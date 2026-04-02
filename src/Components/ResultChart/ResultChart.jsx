import React from 'react';

import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
  {
    id: 1,
    name: "Jahid",
    physics: 85,
    chemistry: 78,
    math: 92,
  },
  {
    id: 2,
    name: "Rahim",
    physics: 75,
    chemistry: 82,
    math: 88,
  },
  {
    id: 3,
    name: "Karim",
    physics: 90,
    chemistry: 85,
    math: 95,
  },
];



const ResultChart = () => {
  return (
    <div>
      <LineChart width={500} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis stroke='red'></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;