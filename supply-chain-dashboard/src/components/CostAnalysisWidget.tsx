import React from 'react';
import { TrendingUp as TrendingUpIcon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CostAnalysisWidget: React.FC = () => {
  const data = [
    { month: 'Jan', procurement: 240000, logistics: 180000, storage: 80000 },
    { month: 'Feb', procurement: 280000, logistics: 190000, storage: 85000 },
    { month: 'Mar', procurement: 260000, logistics: 200000, storage: 82000 },
    { month: 'Apr', procurement: 300000, logistics: 210000, storage: 88000 },
    { month: 'May', procurement: 290000, logistics: 195000, storage: 86000 },
    { month: 'Jun', procurement: 320000, logistics: 220000, storage: 90000 }
  ];

  const totalCost = data[data.length - 1].procurement + 
                     data[data.length - 1].logistics + 
                     data[data.length - 1].storage;

  return (
    <div className="widget">
      <div className="widget-header">
        <div className="widget-title">
          <div className="widget-icon">
            <TrendingUpIcon size={20} />
          </div>
          <span>Cost Analysis</span>
        </div>
      </div>
      <div className="widget-body">
        <div className="widget-value">${(totalCost / 1000).toFixed(0)}K</div>
        <div className="widget-change positive">
          <TrendingUpIcon size={16} />
          <span>Total cost this month</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="procurement" stroke="#667eea" strokeWidth={2} />
            <Line type="monotone" dataKey="logistics" stroke="#48bb78" strokeWidth={2} />
            <Line type="monotone" dataKey="storage" stroke="#f56565" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CostAnalysisWidget;
