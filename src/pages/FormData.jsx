import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 

const FormData = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    salary: "",
    bonus: "",
    guarantee: "",
    child: "",
    insurance: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'salary' || name === 'bonus' || name === 'guarantee' || name === 'insurance' || name === 'child' ? value.replace(/\D/g, '') : value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    
    const processedFormData = {
      salary: Number(formData.salary),
      bonus: Number(formData.bonus),
      guarantee: Number(formData.guarantee),
      child: Number(formData.child),
      insurance: Number(formData.insurance),
    };

    navigate("/result", { state: { formData: processedFormData } });
  };

  return (
    <>
      <h1>Fill in information</h1>
      <form onSubmit={submitForm}>
        <p>
          <label>เงินเดือน:</label>
          <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
        </p>
        <p>
          <label>โบนัส:</label>
          <input type="text" name="bonus" value={formData.bonus} onChange={handleChange} />
        </p>
        <p>
          <label>หักประกันสังคมต่อเดือน:</label>
          <input type="text" name="guarantee" value={formData.guarantee} onChange={handleChange} />
        </p>
        <p>
          <label>จำนวนบุตร:</label>
          <input type="text" name="child" value={formData.child} onChange={handleChange} />
        </p>
        <p>
          <label>ค่าเบี้ยประกัน:</label>
          <input type="text" name="insurance" value={formData.insurance} onChange={handleChange} />
        </p>
        <button type="submit">คำนวณเลย</button>
      </form>
    </>
  );
};

export default FormData;
