import React from 'react';
import { Truck, TrendingDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const ShippingMetricsWidget: React.FC = () => {
  const data = [
    { name: 'On Time', value: 892, color: '#48bb78' },
    { name: 'Delayed', value: 124, color: '#f56565' },
    { name: 'In Transit', value: 234, color: '#4299e1' }
  ];

  return (
    <div className="widget">
      <div className="widget-header">
        <div className="widget-title">
          <div className="widget-icon">
            <Truck size={20} />
          </div>
          <span>Shipping Metrics</span>
        </div>
      </div>
      <div className="widget-body">
        <div className="widget-value">1,250</div>
        <div className="widget-change negative">
          <TrendingDown size={16} />
          <span>-3.2% from last month</span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ShippingMetricsWidget;
