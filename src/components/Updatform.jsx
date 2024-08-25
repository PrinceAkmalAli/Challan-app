import React, { useState, useEffect } from "react";

function Updatform({ challanData }) {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (challanData) {
      setFormValues(challanData);
    }
  }, [challanData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { entry_no } = formValues;

    if (!entry_no) {
      console.error("Entry No is required to update the challan.");
      return;
    }

    fetch(`http://127.0.0.1:8080/api/students/update/${entry_no}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        event.target.reset();  // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="px-80 ml-60 py-5">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        {[
          { id: "challan_no", label: "Challan No", type: "text" },
          { id: "account_no", label: "Account No", type: "text" },
          { id: "student_name", label: "Student Name", type: "text" },
          { id: "father_name", label: "Father Name", type: "text" },
          { id: "entry_no", label: "Entry No", type: "text" },
          { id: "degree", label: "Degree", type: "text" },
          { id: "department", label: "Department", type: "text" },
          { id: "semester", label: "Semester", type: "text" },
          { id: "due_date", label: "Due Date", type: "date" },
          { id: "admission_fee", label: "Admission Fee", type: "number", step: "0.01" },
          { id: "tuition_fee", label: "Tuition Fee", type: "number", step: "0.01" },
          { id: "registration_fee", label: "Registration Fee", type: "number", step: "0.01" },
          { id: "library_security_fee", label: "Library Security Fee", type: "number", step: "0.01" },
          { id: "examination_fee", label: "Examination Fee", type: "number", step: "0.01" },
          { id: "masjid_fund", label: "Masjid Fund", type: "number", step: "0.01" },
          { id: "science_lab_charges", label: "Science Lab Charges", type: "number", step: "0.01" },
          { id: "sports_fund", label: "Sports Fund", type: "number", step: "0.01" },
          { id: "computer_fund", label: "Computer Fund", type: "number", step: "0.01" },
          { id: "university_other_funds", label: "University Other Funds", type: "number", step: "0.01" },
          { id: "processing_fee", label: "Processing Fee", type: "number", step: "0.01" },
        ].map(({ id, label, type, step }) => (
          <div key={id}>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              value={formValues[id] || ""}
              step={step}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        ))}
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I agree with the{" "}
          <a href="/" className="text-blue-600 hover:underline dark:text-blue-500">
            terms and conditions
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
}

export default Updatform;
