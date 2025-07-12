import React from "react";

export const LoadingSpinner = (): JSX.Element => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-orange-400 rounded-full animate-spin animate-reverse" style={{animationDuration: '1.5s'}}></div>
      </div>
    </div>
  );
};