import React from "react";
import style from "./Voucher.module.css";
import lg from "./images/lg.jpg";

const Voucher = ({ challanData }) => {
  if (!challanData) return <p>No data available</p>;

  // Extract dynamic particulars from challanData
  const particulars = [
    { label: 'Admission Fee', value: challanData.admission_fee },
    { label: 'Tution Fee', value: challanData.tuition_fee },
    { label: 'University Registration Fee', value: challanData.registration_fee },
    { label: 'Library Security', value: challanData.library_security_fee },
    { label: 'Examination Fee', value: challanData.examination_fee },
    { label: 'Masjid Funds', value: challanData.masjid_fund },
    { label: 'Science Lab Charges', value: challanData.science_lab_charges },
    { label: 'Sport Funds', value: challanData.sports_fund },
    { label: 'Other Funds', value: challanData.university_other_funds },
    { label: 'Processing Fee', value: challanData.processing_fee }
  ];

  // Calculate total amount
  const totalAmount = particulars.reduce((acc, item) => acc + (item.value || 0), 0);

  return (
    <div className={style.vouchercontainer}>
      {console.log(challanData.challan_no)}
      {console.log('done')}
      <div className={style.voucher}>
        <div className={`${style.logo} ${style.flex1}`}>
          <img src={lg} height="40px" alt="" />
        </div>
        <div className={`${style.flex1}`}>
          <h3>University of Mianwali</h3>
        </div>
        <div className={`${style.student} ${style.flex1}`}>
          <label htmlFor="">Challan No</label>
          <h2>{challanData.challan_no}</h2>
        </div>
        <div className={`${style.flex1}`}>
          <h1 className="text-2xl">AC.No {challanData.account_no}</h1>
        </div>
        <div className={`${style.flex1}`}>
          <label htmlFor="">Due Date</label>
          <h1 className="text-2xl mx-2">{new Date(challanData.due_date).toLocaleDateString()}</h1>
        </div>
        <hr className="my-2"/>
        <div className={`${style.flex}`}>
          <label htmlFor="">Name:</label>
          <h5 className="mx-2 underline">{challanData.student_name}</h5>
        </div>
        <div className={`${style.flex}`}>
          <label htmlFor="">Father Name:</label>
          <h5 className="mx-2 underline">{challanData.father_name}</h5>
        </div>
        <div className={`${style.flex}`}>
          <label htmlFor="">Roll No:</label>
          <h5 className="mx-2 underline">{challanData.entry_no}</h5>
          <label htmlFor="">Semester:</label>
          <h5 className="mx-2 underline">{challanData.semester}</h5>
        </div>
        <hr className="my-2" />
        <div className={style.flex}>
          <h5 className="font-bold">NO</h5>
          <h5 className="font-bold">Particulars</h5>
          <h5 className="font-bold">Amount</h5>
        </div>
        <hr className="my-2" />
        {particulars.map((item, index) => (
          <div className={style.flex} key={index}>
            <h5 className="font-light">{index + 1}</h5>
            <h5 className="font-light text-left">{item.label}</h5>
            <h5 className="font-light">{item.value || '0'}</h5>
          </div>
        ))}
        <hr className="my-2" />
        <div className={style.flex}>
          <h5 className="font-bold text-left">Total:</h5>
          <h5 className="font-bold">{totalAmount}</h5>
        </div>
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default Voucher;
