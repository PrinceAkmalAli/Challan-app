import React, { useState } from "react";
import Updatform from "./Updatform";
import style from './Voucher.module.css';

const UpdateChalla = () => {
  const [rollNo, setRollNo] = useState("");
  const [challanData, setChallanData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for roll number: ${rollNo}`);

    fetch(`http://127.0.0.1:8080/api/students/challan/${rollNo}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error("No challan found or an error occurred.");
        }
        return response.json();
      })
      .then((data) => {
        console.log('Challan data received:', data);
        setChallanData(data);
        setError("");
      })
      .catch((error) => {
        setChallanData(null);
        setError(error.message);
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-4 mb-4 w-96"
      >
        <div className="flex-1">
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter roll number"
            required
          />
        </div>
        <button
          type="submit"
          className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Search
        </button>
      </form>
      <div className={style.v}>
        {error && <p className="text-red-500">{error}</p>}
        {challanData && <Updatform challanData={challanData} />}
      </div>
    </div>
  );
};

export default UpdateChalla;
