import React from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SupplierPerformanceWidget: React.FC = () => {
  const data = [
    { name: 'Supplier A', performance: 95 },
    { name: 'Supplier B', performance: 88 },
    { name: 'Supplier C', performance: 92 },
    { name: 'Supplier D', performance: 78 },
    { name: 'Supplier E', performance: 85 }
  ];

  return (
    <div className="widget">
      <div className="widget-header">
        <div className="widget-title">
          <div className="widget-icon">
            <Users size={20} />
          </div>
          <span>Supplier Performance</span>
        </div>
      </div>
      <div className="widget-body">
        <div className="widget-value">87.6%</div>
        <div className="widget-change positive">
          <TrendingUp size={16} />
          <span>+4.1% from last month</span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="performance" fill="#667eea" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SupplierPerformanceWidget;
