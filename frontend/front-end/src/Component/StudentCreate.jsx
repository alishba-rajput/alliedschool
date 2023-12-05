import { formToJSON } from "axios";
import React, { useState } from "react";
function StudentCreate() {
  const [formData, setFormData] = useState({
    fees: "",
    name: "",
    cnic: "",
    contactNo: "",
    gender: "",
    age: "",
    country: "",
    city: "",
    houseNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const bodyData = {
      fees: formData.fees,
      human: {
        name: formData.name,
        address: {
          country: formData.country,
          city: formData.city,
          houseNo: formData.houseNo,
        },
        gender: formData.gender,
        age: formData.age,
        cnic: formData.cnic,
        contactNo: formData.contactNo,
      },
    };
    console.log(bodyData);
    try {
      const response = await fetch("https://localhost:8080/student/create", {
        method: "POST",
        body: {bodyData},
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle the response data
      const responseData = await response.json();
      console.log("Response:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Handle form submission logic here

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Student Create Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
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
            value={formData.cnic}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            AGE
          </label>
          <input
            type="age"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contactNo"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Contact No
          </label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="houseNo"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            House No
          </label>
          <input
            type="text"
            id="houseNo"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fees"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Fees
          </label>
          <input
            type="text"
            id="fees"
            name="fees"
            value={formData.fees}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default StudentCreate;
