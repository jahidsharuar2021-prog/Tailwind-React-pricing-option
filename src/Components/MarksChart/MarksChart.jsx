import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const MarksPromiseRes = use(marksPromise);
    const marksData = MarksPromiseRes.data;
    // console.log(marksData);

    //data processing for the chart
    const marksChartData=marksData.map(studentData=>{
     const student = {
       id: studentData.student_id,
       name: studentData.name,
       physices: studentData.marks.physics,
       chemistry: studentData.marks.chemistry,
       math: studentData.marks.math,
       avg:(studentData.marks.physics,
       + studentData.marks.chemistry +studentData.marks.math)/3,
     }
    return(student);
    })
    // console.log(marksChartData);

  return (
    <div>
      <BarChart width={500} height={350} data={marksChartData}>
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
      <Bar dataKey="avg" fill='yellow'></Bar>
      <Bar dataKey="chemistry" fill='blue'></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;