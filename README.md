# Supply Chain Web Dashboard

A modern, responsive web-based dashboard for supply chain business management built with React, TypeScript, and Vite.

![Supply Chain Dashboard](https://github.com/user-attachments/assets/13fcb0df-1341-4132-99c4-ca4d58512718)

## Features

- **Inventory Management**: Real-time tracking of inventory levels, stock status, and orders
- **Order Status Tracking**: Monitor completed, in-transit, pending, and delayed orders
- **Revenue Analytics**: Comprehensive revenue metrics with monthly, quarterly, and yearly breakdowns
- **Shipping Metrics**: Visual representation of shipping status with pie charts
- **Supplier Performance**: Bar chart visualization of supplier performance ratings
- **Cost Analysis**: Multi-line chart tracking procurement, logistics, and storage costs over time

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Recharts** - Beautiful and customizable charts
- **Lucide React** - Clean and modern icons
- **CSS3** - Responsive styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Navigate to the dashboard directory:
```bash
cd supply-chain-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Dashboard Widgets

### 1. Inventory Levels
- Total inventory count with trend indicator
- Breakdown by stock status (In Stock, Low Stock, Out of Stock, On Order)

### 2. Order Status
- Real-time order tracking
- Status categories: Completed, In Transit, Pending, Delayed

### 3. Revenue
- Monthly revenue with growth percentage
- Historical data (This Month, Last Month, This Quarter, YTD)

### 4. Shipping Metrics
- Total shipments with trend
- Distribution visualization (On Time, Delayed, In Transit)

### 5. Supplier Performance
- Average performance score
- Individual supplier ratings comparison

### 6. Cost Analysis
- Multi-category cost tracking
- Time-series analysis of procurement, logistics, and storage costs

## Project Structure

```
supply-chain-dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.tsx    # Main dashboard container
│   │   ├── Header.tsx       # Navigation header
│   │   ├── InventoryWidget.tsx
│   │   ├── OrderStatusWidget.tsx
│   │   ├── RevenueWidget.tsx
│   │   ├── ShippingMetricsWidget.tsx
│   │   ├── SupplierPerformanceWidget.tsx
│   │   └── CostAnalysisWidget.tsx
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── dist/                    # Production build output
└── package.json             # Dependencies and scripts
```

## Customization

The dashboard uses mock data for demonstration. To integrate with real data:

1. Replace mock data in widget components with API calls
2. Add state management (Redux, Zustand, or Context API)
3. Implement authentication and authorization
4. Connect to your backend services

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
