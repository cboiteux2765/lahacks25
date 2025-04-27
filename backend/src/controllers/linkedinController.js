const express = require('express');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/api/linkedin/callback';

router.get('/callback', async (req, res) => {
    const { code } = req.query;

    try {
        // Exchange authorization code for access token
        const tokenResponse = await axios.post(
            'https://www.linkedin.com/oauth/v2/accessToken',
            null,
            {
                params: {
                    grant_type: 'authorization_code',
                    code,
                    redirect_uri: REDIRECT_URI,
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        const accessToken = tokenResponse.data.access_token;

        // Fetch LinkedIn profile data
        const profileResponse = await axios.get('https://api.linkedin.com/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const emailResponse = await axios.get(
            'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        const profileData = {
            ...profileResponse.data,
            email: emailResponse.data.elements[0]['handle~'].emailAddress,
        };

        // Send profile data to the frontend
        res.json(profileData);
    } catch (error) {
        console.error('Error during LinkedIn OAuth:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to authenticate with LinkedIn' });
    }
});

module.exports = router;