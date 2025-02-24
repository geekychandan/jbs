// import { Inter } from "next/font/google";

import ProgressHeader from "../components/ProgressHeader";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Your Interior Design Estimate | HomeLane",
  description: "Get an instant estimate for your home interior design project",
};

export default function EstimateLayout({ children }) {
  return (
    <div >
      <ProgressHeader />
      <main className="min-h-screen bg-gray-50 pt-20 overflow-x:">{children}</main>
    </div>
  );
}
