"use client"
import React, { useState } from "react";
import ProgressBar from "../progressBar";

const Card: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div
        className={`bg-white shadow-md rounded-lg border p-4 ${
          isCollapsed ? "pb-2" : "pb-6"
        }`}
      >
        <div className="flex justify-between items-center w-full">
            <div className="flex w-full">
            <h1 className="text-lg font-bold w-full">
            Hi Mona,{" "}
            <span className="text-blue-600">68%</span> of goal achieved and rest
            can be achieved by focusing on 20 top leads.
          </h1>
            <ProgressBar/>
            <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? "▲" : "▼"}
          </button>
            </div>
         
          
        </div>
        {!isCollapsed && (
          <>
            <p className="text-gray-500 mt-2">
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </p>
           
          </>
        )}

<div className="grid grid-cols-3 gap-6 mt-6">
        {/* Engagement Cards */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {/* Jane Reyes Card */}
            <div className="bg-white shadow rounded-lg p-4 border">
              <h2 className="font-bold">Jane Reyes</h2>
              <p className="text-sm text-gray-500">COO • Northwind Traders</p>
              <div className="bg-blue-50 p-3 mt-3 rounded-lg">
                <h3 className="text-sm font-bold">Engage with Jane Reyes</h3>
                <p className="text-sm text-gray-600">
                  Jane may be interested in upgrading espresso machines for her
                  in-store coffee shops.
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Expand business • High buying intent
              </p>
            </div>

            {/* Allan Munger Card */}
            <div className="bg-white shadow rounded-lg p-4 border">
              <h2 className="font-bold">Allan Munger</h2>
              <p className="text-sm text-gray-500">
                Head of Real Estate Development • Contoso Coffee
              </p>
              <div className="bg-blue-50 p-3 mt-3 rounded-lg">
                <h3 className="text-sm font-bold">Prepare for meeting with Allan</h3>
                <p className="text-sm text-gray-600">
                  Prepare for high-buying intent meeting Copilot scheduled for 2
                  PM regarding upgrading service contract.
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Upcoming meeting • Due today
              </p>
            </div>
          </div>
        </div>

        {/* Other Key Activities */}
        <div className="bg-white shadow rounded-lg p-4 border">
          <h2 className="font-bold">Other key activities</h2>
          <ul className="mt-4 space-y-4">
            <li className="bg-gray-100 p-3 rounded-lg">
              <h3 className="text-sm font-bold">Cafe A100 for Woodland Bank</h3>
              <p className="text-sm text-gray-600">
                $280,000 • 8 days to close
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Review draft and reply to Chris Naido
              </p>
            </li>
            <li className="bg-gray-100 p-3 rounded-lg">
              <h3 className="text-sm font-bold">
                Partnership opportunity for Fabrikam
              </h3>
              <p className="text-sm text-gray-600">
                $5,000,000 • 12 days to close
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Prepare me for Fabrikam’s key stakeholder meeting
              </p>
            </li>
          </ul>
          <button className="text-blue-600 text-sm mt-4">Show all key activities</button>
        </div>
      </div>
      </div>

      {/* Engagement and Key Activities Section */}
      
    </div>
  );
};

export default Card;