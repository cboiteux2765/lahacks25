"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactFlow, { Node, Edge, Background } from "reactflow";
import "reactflow/dist/style.css";

export default function DashboardPage() {
    const router = useRouter();

    // Mock user data (replace with actual data from your backend or context)
    const [userData, setUserData] = useState({
        strength: "communication", // Example: "communication", "resume", etc.
        timeline: "fast", // Example: "fast", "moderate", "slow"
        currentStep: "Networking Events",
    });

    const [graphData, setGraphData] = useState({
        nodes: [],
        edges: [],
    });

    useEffect(() => {
        if (!userData.strength) {
            // Redirect to setup page if strength is not determined
            router.push("/setup");
        } else {
            generateGraph();
        }
    }, [userData]);

    const generateGraph = () => {
        const nodes: Node[] = [
            { id: "1", position: { x: 0, y: 0 }, data: { label: "Start" }, type: "default" },
        ];
        const edges: Edge[] = [];

        if (userData.strength === "communication") {
            nodes.push({
                id: "2",
                position: { x: 200, y: 100 },
                data: { label: "Networking Events" },
                type: "default",
            });
            edges.push({ id: "e1-2", source: "1", target: "2", animated: true });
        }

        if (userData.strength === "resume") {
            nodes.push({
                id: "3",
                position: { x: 400, y: 0 },
                data: { label: "Improve Resume" },
                type: "default",
            });
            edges.push({ id: "e1-3", source: "1", target: "3", animated: true });
        }

        if (userData.timeline === "fast") {
            nodes.push({
                id: "4",
                position: { x: 600, y: 100 },
                data: { label: "Apply Aggressively" },
                type: "default",
            });
            edges.push({ id: "e2-4", source: "2", target: "4", animated: true });
        }

        setGraphData({ nodes, edges });
    };

    const calculateTimeRemaining = () => {
        if (userData.timeline === "fast") return "1 month";
        if (userData.timeline === "moderate") return "3 months";
        if (userData.timeline === "slow") return "6 months";
        return "Unknown";
    };

    const getResources = (step) => {
        const resources = {
            "Networking Events": "https://www.linkedin.com/events/",
            "Improve Resume": "https://zety.com/resume-builder",
            "Apply Aggressively": "https://www.indeed.com/",
        };
        return resources[step] || "#";
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">User Dashboard</h1>

            {/* User Strength */}
            <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    Your Strength: {userData.strength.charAt(0).toUpperCase() + userData.strength.slice(1)}
                </h2>
            </div>

            {/* Current Step */}
            <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    Current Step: {userData.currentStep}
                </h2>
                <p className="text-gray-700">
                    Time Remaining: <strong>{calculateTimeRemaining()}</strong>
                </p>
            </div>

            {/* React Flow Chart */}
            <div style={{ width: "100%", height: "300px" }} className="bg-white shadow-md rounded-lg p-4">
                <ReactFlow
                    nodes={graphData.nodes}
                    edges={graphData.edges}
                    fitView
                    zoomOnScroll={false}
                    zoomOnPinch={false}
                    panOnScroll={false}
                >
                    <Background />
                </ReactFlow>
            </div>

            {/* Resources Section */}
            <div className="mt-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Resources for Your Current Step</h2>
                <a
                    href={getResources(userData.currentStep)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    Click here to access resources for "{userData.currentStep}"
                </a>
            </div>
        </div>
    );
}