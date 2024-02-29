import React from "react";

const DataTable = ({ dataList, selectedItem }) => {
  return (
    <table className="border-collapse border w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 border">ID</th>
          <th className="py-2 px-4 border">Name</th>
          <th className="py-2 px-4 border">Age</th>
          {/* Add more header columns if needed */}
        </tr>
      </thead>
      <tbody className="[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-300">
        {selectedItem
          ? dataList
              .filter((item) => item.id == selectedItem)
              .map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="py-2 px-4 border">{item.id}</td>
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.age}</td>
                  {/* Add more data columns if needed */}
                </tr>
              ))
          : // If no item is selected, display all items in the table
            dataList.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="py-2 px-4 border">{item.id}</td>
                <td className="py-2 px-4 border">{item.name}</td>
                <td className="py-2 px-4 border">{item.age}</td>
                {/* Add more data columns if needed */}
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default DataTable;
