# Supply Chain Analytics Dashboard

A premium, production-ready React dashboard for visualizing Samsung-style supply chain data across **sales, shipments, inventory, procurement, and production** — built with React 18, TypeScript, Tailwind CSS v4, and Recharts.

## Quick Start

```bash
cd dashboard
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

## Tech Stack

| Layer | Technology |
|---|---|
| Build | Vite 7 |
| UI | React 18 + TypeScript |
| Styling | Tailwind CSS v4 |
| Charts | Recharts |
| CSV Parsing | PapaParse |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router v6 |

## Dashboard Pages

| Page | Key Visuals |
|---|---|
| **Overview** | 4 KPI cards, revenue trend area chart, category donut, top products bar, shipment status pie |
| **Sales & Revenue** | Revenue vs profit line chart, customer bar chart, category breakdown |
| **Supply Chain** | Carrier performance stacked bar, delay reasons, shipping cost trend |
| **Inventory** | Stock vs safety stock grouped bar, facility distribution, reorder alerts table |
| **Production** | Production volume trend, defect rate by product, facility output, supplier lead times |

## Features

- 🎯 **Real-time filters** — Year, Quarter, Category, Customer (applied globally)
- 📊 **15+ interactive charts** with tooltips and legends
- 🎨 **Dark glassmorphism theme** with premium navy/indigo palette
- ⚡ **Animated KPI cards** with Framer Motion entrance effects
- 📱 **Responsive grid** — 4-col → 2-col → 1-col
- 🔄 **Loading skeletons** while CSV data loads
- ⚠️ **Error boundaries** for graceful failure handling
- 🧭 **Collapsible sidebar** navigation

## Project Structure

```
dashboard/
├── public/data/          # 10 CSV data files
├── src/
│   ├── types/            # TypeScript interfaces
│   ├── services/         # Data loader + processor
│   ├── context/          # React Context (data + filters)
│   ├── components/
│   │   ├── layout/       # Sidebar, Header, DashboardLayout
│   │   └── ui/           # KPICard, ChartCard, LoadingSkeleton
│   ├── pages/            # Overview, Sales, SupplyChain, Inventory, Production
│   ├── App.tsx           # Router setup
│   ├── main.tsx          # Entry point
│   └── index.css         # Tailwind + custom styles
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Data Sources

10 CSV files in a star schema (5 dimension + 5 fact tables):
- **Dimensions:** Products (16), Customers (5), Facilities (6), Suppliers (7), Date (731 days)
- **Facts:** Sales (~8.5K), Shipments (~7.5K), Inventory (~1.2K), Procurement (~2.2K), Production (~4.5K)

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

Deploy the `dist/` folder to:
- **Vercel:** `npx vercel --prod`
- **Netlify:** Drag & drop `dist/` or connect Git repo
- **GitHub Pages:** Use `vite-plugin-gh-pages`
