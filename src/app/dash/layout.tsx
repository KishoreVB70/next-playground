import React from "react";

type props = {
    children: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    analytics: React.ReactNode,
}
export default function DashLayout({
    children,
    revenue,
    notifications,
    analytics
  }: props) {
    return (
      <div className="h-[80vh] flex flex-col justify-center items-center" >
          {children}
          {revenue}
          {notifications}
          {analytics}
      </div>
  
    );
  }
  