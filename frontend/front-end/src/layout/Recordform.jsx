import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StudentForm = () => {
  const [formData, setFormData] = useState({
    fees: "",
    name: "",
    cnic: "",
    
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Assuming you have a backend API endpoint for posting student data
      const response = await axios.post('http://localhost:8080/student/create', {
        name: formData.name,
        cnic: formData.cnic,
        age: formData.age,
        gender: formData.gender,
        contactNo: formData.contactNo,
        country: formData.country,
        city: formData.city,
        houseNo: formData.houseNo,
        fees: formData.fees,
      });
  
      console.log('Data posted successfully:', response.data);
      // You can handle success, e.g., redirect to another page or show a success message
    } catch (error) {
      console.error('Error posting data:', error.message);
      // Handle error, e.g., display an error message to the user
    }
  };
  

  // Do something with the form data, e.g., send it to a backend API

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Student Create Form</h2>
      <form onSubmit={handleSubmit}>
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
          onClick={console.log(formData)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default StudentForm;
