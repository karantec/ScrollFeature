import React from "react";
import { cn } from "../../lib/util";

const Card = ({ className, children }) => {
  return (
    <div className={cn("rounded-lg border bg-white p-6 shadow-md", className)}>
      {children}
    </div>
  );
};

const CardContent = ({ className, children }) => {
  return <div className={cn("space-y-4", className)}>{children}</div>;
};

export { Card, CardContent };
