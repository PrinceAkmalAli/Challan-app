import React, { useState, useEffect } from "react";
import axios from "axios";

export default function All() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/students/details/")
      .then((response) => {
        console.log("Student Data:", response.data); // Debug data
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  const handleDelete = (entry_no) => {
    axios
      .delete(`http://127.0.0.1:8080/api/students/delete/${entry_no}/`)
      .then((response) => {
        setStudents(students.filter((student) => student.entry_no !== entry_no));
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-80">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Roll No
            </th>
            <th scope="col" className="px-6 py-3">
              Total Fee
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const particulars = [
              { label: "Admission Fee", value: student.admission_fee },
              { label: "Tution Fee", value: student.tution_fee },
              {
                label: "University Registration Fee",
                value: student.university_registration_fee,
              },
              { label: "Library Security", value: student.library_security },
              { label: "Examination Fee", value: student.examination_fee },
              { label: "Masjid Funds", value: student.masjid_funds },
              {
                label: "Science Lab Charges",
                value: student.science_lab_charges,
              },
              { label: "Sport Funds", value: student.sport_funds },
              { label: "Other Funds", value: student.other_funds },
              { label: "Processing Fee", value: student.processing_fee },
            ];

            const totalAmount = particulars.reduce(
              (acc, item) => acc + (item.value || 0),
              0
            );

            return (
              <tr
                key={student.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {student.student_name || "N/A"}
                </th>
                <td className="px-6 py-4">{student.department || "N/A"}</td>
                <td className="px-6 py-4">{student.entry_no || "N/A"}</td>
                <td className="px-6 py-4">{totalAmount || "N/A"}</td>
                <td className="px-6 py-4">
                    {console.log(student.entry_no)}
                  <button
                    onClick={() => handleDelete(student.entry_no)}
                    className="bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-4 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
