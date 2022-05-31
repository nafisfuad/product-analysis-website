import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const Dashboard = () => {
    const [data, setData] = useData();
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div>
                <BarChart width={500} height={400} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                </BarChart>
            </div>
            <div>
            <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
            </div>
        </div>



    );
};

export default Dashboard;