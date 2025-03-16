"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LaundryMarketChart = () => {
    const data: ChartData<"line"> = {
        labels: [ "2023", "2025", "2027", "2030" ],
        datasets: [
            {
                label: "Digital Laundry Market",
                data: [ 1.98, 5, 9, 14 ], // Market values in billion USD
                borderColor: "#0072ff",
                backgroundColor: "rgba(0, 114, 255, 0.1)",
                fill: true,
                tension: 0.4,
            },
            {
                label: "Traditional Laundry Market",
                data: [ 2, 1.8, 1.5, 1 ],
                borderColor: "#ff4d4d",
                backgroundColor: "rgba(255, 77, 77, 0.1)",
                fill: true,
                tension: 0.4,
                borderDash: [ 5, 5 ], // Moved inside dataset
            },
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: "#333",
                    font: { size: 14 },
                },
            },
            title: {
                display: true,
                text: "Digital vs. Traditional Laundry Market in the UK",
                font: { size: 16, weight: "bold" }, // Corrected font weight
                color: "#222",
            },
            tooltip: {
                backgroundColor: "#fff",
                titleColor: "#000",
                bodyColor: "#000",
                borderColor: "#ccc",
                borderWidth: 1,
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#444", font: { size: 12, weight: "normal" } }, // Fixed font weight
            },
            y: {
                grid: { color: "#ddd" }, // Removed invalid borderDash
                ticks: { color: "#444", font: { size: 12, weight: "normal" } }, // Fixed font weight
            },
        },
    };

    return <Line data={ data } options={ options } />;
};

export default LaundryMarketChart;
