import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

const RevenueWidget: React.FC = () => {
  return (
    <div className="widget">
      <div className="widget-header">
        <div className="widget-title">
          <div className="widget-icon">
            <DollarSign size={20} />
          </div>
          <span>Revenue</span>
        </div>
      </div>
      <div className="widget-body">
        <div className="widget-value">$2.4M</div>
        <div className="widget-change positive">
          <TrendingUp size={16} />
          <span>+12.3% from last month</span>
        </div>
        <div className="stat-grid">
          <div className="stat-item">
            <div className="stat-label">This Month</div>
            <div className="stat-value">$2.4M</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Last Month</div>
            <div className="stat-value">$2.1M</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">This Quarter</div>
            <div className="stat-value">$6.8M</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">YTD</div>
            <div className="stat-value">$12.5M</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueWidget;
