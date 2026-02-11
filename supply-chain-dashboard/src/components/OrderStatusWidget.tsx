import React from 'react';
import { ShoppingCart } from 'lucide-react';

const OrderStatusWidget: React.FC = () => {
  return (
    <div className="widget">
      <div className="widget-header">
        <div className="widget-title">
          <div className="widget-icon">
            <ShoppingCart size={20} />
          </div>
          <span>Order Status</span>
        </div>
      </div>
      <div className="widget-body">
        <ul className="status-list">
          <li className="status-item">
            <span className="status-label">Completed</span>
            <span className="status-badge completed">2,458</span>
          </li>
          <li className="status-item">
            <span className="status-label">In Transit</span>
            <span className="status-badge in-transit">834</span>
          </li>
          <li className="status-item">
            <span className="status-label">Pending</span>
            <span className="status-badge pending">256</span>
          </li>
          <li className="status-item">
            <span className="status-label">Delayed</span>
            <span className="status-badge delayed">42</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderStatusWidget;
