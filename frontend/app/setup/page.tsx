"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ReactFlow, { Node, Edge } from "reactflow";
import "reactflow/dist/style.css";

export default function SetupPage() {
    const router = useRouter();

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        strength: "",
        otherStrength: "",
        goals: "",
        otherGoals: "",
        timeline: "",
        otherTimeline: "",
    });

    const [graphData, setGraphData] = useState({
        nodes: [],
        edges: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNext = () => {
        if (step === 3) {
            generateGraph();
        } else {
            setStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    const generateGraph = () => {
        const nodes: Node[] = [
            { id: "1", position: { x: 0, y: 0 }, data: { label: "Start" }, type: "default" },
        ];
        const edges: Edge[] = [];

        const strength = formData.strength === "other" ? formData.otherStrength : formData.strength;

        if (strength === "communication") {
            nodes.push({
                id: "2",
                position: { x: 200, y: 100 },
                data: { label: "Networking Events" },
                type: "default",
            });
            edges.push({ id: "e1-2", source: "1", target: "2", animated: true });
        }

        if (formData.goals.includes("resume") || formData.otherGoals.includes("resume")) {
            nodes.push({
                id: "3",
                position: { x: 400, y: 0 },
                data: { label: "Improve Resume" },
                type: "default",
            });
            edges.push({ id: "e2-3", source: "2", target: "3", animated: true });
        }

        const timeline =
            formData.timeline === "other" ? formData.otherTimeline : formData.timeline;

        if (timeline === "fast") {
            nodes.push({
                id: "4",
                position: { x: 600, y: 100 },
                data: { label: "Apply Aggressively" },
                type: "default",
            });
            edges.push({ id: "e3-4", source: "3", target: "4", animated: true });
        }

        setGraphData({ nodes, edges });
        router.push("/dashboard");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Setup Your Profile</h1>
            <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
                {step === 1 && (
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            What is your primary strength?
                        </h2>
                        <div className="space-y-2">
                            <label className="block">
                                <input
                                    type="radio"
                                    name="strength"
                                    value="communication"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Communication
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="strength"
                                    value="small contributions"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Small Contributions to Big Projects
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="strength"
                                    value="resume"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Resume
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="strength"
                                    value="project managing"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Project Managing
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="strength"
                                    value="other"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Other
                            </label>
                            {formData.strength === "other" && (
                                <input
                                    type="text"
                                    name="otherStrength"
                                    value={formData.otherStrength}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                                    placeholder="Please specify your strength"
                                />
                            )}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            What are your goals?
                        </h2>
                        <textarea
                            name="goals"
                            value={formData.goals}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            placeholder="Describe your goals..."
                        />
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            How quickly do you want to find an internship?
                        </h2>
                        <div className="space-y-2">
                            <label className="block">
                                <input
                                    type="radio"
                                    name="timeline"
                                    value="fast"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                As soon as possible
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="timeline"
                                    value="moderate"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Within a few months
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="timeline"
                                    value="slow"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                I’m taking my time
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="timeline"
                                    value="other"
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Other
                            </label>
                            {formData.timeline === "other" && (
                                <input
                                    type="text"
                                    name="otherTimeline"
                                    value={formData.otherTimeline}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                                    placeholder="Please specify your timeline"
                                />
                            )}
                        </div>
                    </div>
                )}

                <div className="mt-6 flex justify-between">
                    {step > 1 && (
                        <button
                            onClick={handleBack}
                            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                        >
                            Back
                        </button>
                    )}
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        {step === 3 ? "Finish" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}