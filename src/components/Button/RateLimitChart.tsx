/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const RateLimitChart = () => {
  const data = [
    {
      name: '5pm',
      tvl: 2400,
      amt: 2400
    },
    {
      name: '6pm',
      tvl: 1398,
      amt: 2210
    },
    {
      name: '7pm',
      tvl: 9800,
      amt: 2290
    },
    {
      name: '8pm',
      tvl: 3908,
      amt: 2000
    },
    {
      name: '9pm',
      tvl: 4800,
      amt: 2181
    },
    {
      name: '10pm',
      tvl: 3800,
      amt: 2500
    },
    {
      name: '11pm',
      rateLimit: 2890,
      tvl: 4300,
      amt: 2100
    },
    {
      name: '12pm',
      rateLimit: 2890,
      amt: 2100
    }
  ];

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis range={[0, 10]} dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="tvl" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="rateLimit" stroke="red" />
    </LineChart>
  );
};

export default RateLimitChart;
