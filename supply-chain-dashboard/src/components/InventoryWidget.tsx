import React from 'react';
import { Package, TrendingUp } from 'lucide-react';

const InventoryWidget: React.FC = () => {
  return (
    <div className="widget">
      <div className="widget-header">
        <div className="widget-title">
          <div className="widget-icon">
            <Package size={20} />
          </div>
          <span>Inventory Levels</span>
        </div>
      </div>
      <div className="widget-body">
        <div className="widget-value">12,458</div>
        <div className="widget-change positive">
          <TrendingUp size={16} />
          <span>+8.5% from last month</span>
        </div>
        <div className="stat-grid">
          <div className="stat-item">
            <div className="stat-label">In Stock</div>
            <div className="stat-value">10,234</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Low Stock</div>
            <div className="stat-value">1,124</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Out of Stock</div>
            <div className="stat-value">100</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">On Order</div>
            <div className="stat-value">1,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryWidget;
