import React, { useState } from "react";

export default function Deletestudent() {
  const [cnic, setCnic] = useState("");
  const handleInputChange = (event) => {
    setCnic(event.target.value);
  };

  const handleFormDelete = async (e) => {
   console.log(cnic)
    fetch(`http://localhost:8080/student/delete/${cnic}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // You might need to include additional headers, such as authentication headers
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Resource deleted successfully:", data);
        // Handle any further actions after successful deletion
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
        // Handle errors or failed deletion
      });
  };

  return (
    <div>
      <div>
        <label
          htmlFor="cnic"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          CNIC
        </label>
        <input
          type="text"
          id="cnic"
          name="cnic"
          value={cnic}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleFormDelete}
      >
        Delete Student
      </button>
    </div>
  );
}
