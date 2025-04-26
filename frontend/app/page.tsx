"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactFlow, { Node, Edge, Background } from 'reactflow';
import 'reactflow/dist/style.css';

export default function Page() {
    const nodes: Node[] = [
        { id: '1', position: { x: 0, y: 0 }, data: { label: 'Make Project' }, type: 'default' },
        { id: '2', position: { x: 200, y: 100 }, data: { label: 'Get Experience' }, type: 'default' },
        { id: '3', position: { x: 400, y: 0 }, data: { label: 'Make Resume' }, type: 'default' },
        { id: '4', position: { x: 600, y: 100 }, data: { label: 'Apply' }, type: 'default' },
        { id: '5', position: { x: 800, y: 0 }, data: { label: 'Interview' }, type: 'default' },
        { id: '6', position: { x: 1000, y: 100 }, data: { label: 'Offer' }, type: 'default' },
    ];

    const edges: Edge[] = [
        { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: 'arrowclosed' } },
        { id: 'e2-3', source: '2', target: '3', animated: true, markerEnd: { type: 'arrowclosed' } },
        { id: 'e3-4', source: '3', target: '4', animated: true, markerEnd: { type: 'arrowclosed' } },
        { id: 'e4-5', source: '4', target: '5', animated: true, markerEnd: { type: 'arrowclosed' } },
        { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: 'arrowclosed' } },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <br/> <br/> <br/>
            <h1 className="text-4xl font-bold text-blue-600">Welcome to JobJourney!</h1>
            <p className="mt-4 text-lg text-gray-700">
                We help students find internships based on their strengths.
                Get personalized recommendations for steps to get your internships.
            </p>
            <div style={{ width: '100%', height: '500px' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    fitView
                    zoomOnScroll={false} // Disable zooming with scroll
                    zoomOnPinch={false} // Disable zooming with pinch gestures
                    panOnScroll={false} // Disable panning with scroll
                >
                    <Background />
                </ReactFlow>
            </div>
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    What Our Users Say
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
                    {/* Testimonial 1 */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://images.app.goo.gl/9ACow2eKw6thtHLAA"
                            alt="User 1"
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <p className="text-gray-700 italic">
                            "JobJourney helped me land my first internship in just two months! The personalized roadmap was a game-changer."
                        </p>
                        <p className="text-gray-900 font-semibold mt-2">- Alex Johnson</p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dperson&psig=AOvVaw0NaBxTUdVp0IBN-hdjWRH5&ust=1745780421549000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC-9YGx9owDFQAAAAAdAAAAABAQ"
                            alt="User 2"
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <p className="text-gray-700 italic">
                            "I loved how easy it was to follow the steps. The recommendations were tailored to my strengths and goals."
                        </p>
                        <p className="text-gray-900 font-semibold mt-2">- Maria Lopez</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
            <div className="mt-6 mb-12"> {/* Added mb-12 for bottom margin */}
    <Link href="/login" className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600">
        Get Started
    </Link>
</div>
            </div>
        </div>
    );
}