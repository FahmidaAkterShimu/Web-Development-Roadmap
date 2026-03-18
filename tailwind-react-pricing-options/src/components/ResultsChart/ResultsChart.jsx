import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Rahim", "physics": 78, "chemistry": 72, "math": 85 },
    { "id": 2, "name": "Karim", "physics": 85, "chemistry": 80, "math": 88 },
    { "id": 3, "name": "Ayesha", "physics": 92, "chemistry": 90, "math": 95 },
    { "id": 4, "name": "Nusrat", "physics": 67, "chemistry": 70, "math": 65 },
    { "id": 5, "name": "Siam", "physics": 74, "chemistry": 68, "math": 76 },
    { "id": 6, "name": "Tania", "physics": 88, "chemistry": 85, "math": 90 },
    { "id": 7, "name": "Fahim", "physics": 81, "chemistry": 79, "math": 84 },
    { "id": 8, "name": "Mim", "physics": 69, "chemistry": 72, "math": 71 },
    { "id": 9, "name": "Rafi", "physics": 95, "chemistry": 93, "math": 97 },
    { "id": 10, "name": "Sumaiya", "physics": 73, "chemistry": 75, "math": 78 }
]

const ResultsChart = () => {
    return (
        <div className='ml-50 mt-8'>
            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 900 }} responsive data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics" stroke="blue"></Line>
                <Line dataKey="chemistry" stroke="orange"></Line>
                <Line dataKey="math" stroke="yellow"></Line>
            </LineChart>

        </div>
    );
};

export default ResultsChart;
