import HeaderTitle from "./HeaderTitle";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'A1', marks: 60 },
    { name: 'A2', marks: 60 },
    { name: 'A3', marks: 60 },
    { name: 'A4', marks: 60 },
    { name: 'A5', marks: 58 },
    { name: 'A6', marks: 60 },
    { name: 'A7', marks: 60 },
    { name: 'A8', marks: 60 },
  ];
  

const Statistics = () => {
  return (
    <div>
      <HeaderTitle>Statistics</HeaderTitle>
      <div className="max-w-[1000px] mx-auto my-10 md:my-16">
        <h1 className="title text-center pb-5 md:pb-10">All assignment marks I got so far</h1>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
