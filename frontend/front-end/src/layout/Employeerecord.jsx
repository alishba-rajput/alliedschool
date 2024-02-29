import React, { useState } from 'react';
import DataTable from "./EmployeeTable"

const App = () => {
  // Sample data list
  const dataList = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 35 }
  ];

  // State to hold selected item from dropdown
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle dropdown selection
  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      {/* Dropdown component */}
      <select onChange={handleDropdownChange}>
        <option value="">Select an item</option>
        {dataList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <DataTable dataList={dataList} selectedItem={selectedItem} />
    </div>
    
  );
  
};

export default App;
