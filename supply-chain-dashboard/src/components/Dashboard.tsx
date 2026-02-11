import React from 'react';
import Header from './Header';
import InventoryWidget from './InventoryWidget';
import OrderStatusWidget from './OrderStatusWidget';
import ShippingMetricsWidget from './ShippingMetricsWidget';
import SupplierPerformanceWidget from './SupplierPerformanceWidget';
import CostAnalysisWidget from './CostAnalysisWidget';
import RevenueWidget from './RevenueWidget';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="widget-row">
            <InventoryWidget />
            <OrderStatusWidget />
            <RevenueWidget />
          </div>
          <div className="widget-row">
            <ShippingMetricsWidget />
            <SupplierPerformanceWidget />
          </div>
          <div className="widget-row full-width">
            <CostAnalysisWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
