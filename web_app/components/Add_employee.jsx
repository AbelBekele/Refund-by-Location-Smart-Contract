import React, { useContext, useState } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { DataContext } from '../Utils/DataContext';

const AddEmployee = () => {
  const { handleClose, currentItem, isFound } = useContext(DataContext);
  const [formData, setFormData] = useState({
    employeeAddress: '',
    name: '',
    allowedDistance: '',
    contractEnd: '',
    lat: '',
    lng: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-overlay-black dark:bg-overlay-dark h-full w-full px-4 lg:px-6 xl:px-0 overflow-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 lg:flex justify-center items-center">
      <div className=" bg-white dark:bg-night-blue h-auto mx-auto lg:mx-0 my-10 lg:my-0  w-full xl:w-2/3 py-8 rounded-md px-6 lg:px-8  relative">
        {/* Add_employee header */}
        <div className="text-center mb-6 text-black dark:text-white">
          <FaRegWindowClose
            onClick={handleClose}
            className="text-2xl rounded-md cursor-pointer absolute top-2 right-2"
          />
          <h1 className="text-3xl font-semibold  mb-2 mt-10 lg:mt-0">
            Register Employee
          </h1>
          <p>Please fill out the following details:</p>
        </div>

        {/* Add_employee body */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="employeeAddress">Employee Address</label>
              <input
                type="text"
                id="employeeAddress"
                name="employeeAddress"
                value={formData.employeeAddress}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="allowedDistance">Allowed Distance</label>
              <input
                type="text"
                id="allowedDistance"
                name="allowedDistance"
                value={formData.allowedDistance}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="contractEnd">Contract End</label>
              <input
                type="date"
                id="contractEnd"
                name="contractEnd"
                value={formData.contractEnd}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lat">Latitude</label>
              <input
                type="text"
                id="lat"
                name="lat"
                value={formData.lat}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lng">Longitude</label>
              <input
                type="text"
                id="lng"
                name="lng"
                value={formData.lng}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
