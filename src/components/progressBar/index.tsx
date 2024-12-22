import React from "react";

const ProgressBar = () => {
  const total = 45; // Target in millions
  const segments = [
    { label: "Won", value: 18, color: "bg-green-500" },
    { label: "Committed", value: 18, color: "bg-blue-500" },
    { label: "Best case", value: 18, color: "bg-purple-500" },
    { label: "Qualified", value: 18, color: "bg-yellow-500" },
    { label: "Leads", value: 75, color: "bg-gray-400" },
  ];

  const totalValue = segments.reduce((acc, segment) => acc + segment.value, 0);

  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 mb-2 text-sm">
        <span>1 month until Q4 ends</span>
        <span className="ml-auto">Target: $45 million</span>
        <span className="ml-2">{Math.round((totalValue / total) * 100)}% of target achieved</span>
      </div>
      <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        {segments.map((segment, index) => (
          <div
            key={index}
            className={`${segment.color} h-full`}
            style={{ width: `${(segment.value / total) * 100}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-sm">
        {segments.map((segment, index) => (
          <span key={index} className="flex items-center space-x-1">
            <span
              className={`w-4 h-4 inline-block ${segment.color} rounded-full`}
            ></span>
            <span>{segment.label} ${segment.value}m</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
