import React from "react";

export default function ItemCateSkeleton() {
  return (
    <tr className="animate-pulse border-b border-gray-200">
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span className="w-10 h-5 bg-gray-200"></span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center justify-start">
          <span className="bg-gray-200 h-5 w-20"></span>
        </div>
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center justify-start">
          <span className="bg-gray-200 h-5 w-20"></span>
        </div>
      </td>

      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center gap-1">
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <span className="h-20 bg-gray-200 py-1 px-3 rounded-full text-xs"></span>
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <span className="h-20 bg-gray-200 py-1 px-3 rounded-full text-xs"></span>
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <span className="h-20 bg-gray-200 py-1 px-3 rounded-full text-xs"></span>
          </div>
        </div>
      </td>
    </tr>
  );
}
