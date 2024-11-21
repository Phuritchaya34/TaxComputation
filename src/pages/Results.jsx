import React from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";  
const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  const salary = parseInt(formData.salary) || 0;
  const bonus = parseInt(formData.bonus) || 0;
  const child = parseInt(formData.child) || 0;
  const guarantee = parseInt(formData.guarantee) || 0;
  const insurance = parseInt(formData.insurance) || 0;

  
  const salaryOfYear = salary * 12 + bonus;

  
  const expenses = salaryOfYear * 0.5 <= 100000 ? salaryOfYear * 0.5 : 100000;

  
  const selfDeduction = 60000;

 
  const childDeduction = child * 30000 <= 60000 ? child * 30000 : 60000;

  
  const socialSecurity = guarantee * 12 <= 30000 ? guarantee * 12 : 30000;

  
  const insuranceDeduction = insurance <= 100000 ? insurance : 100000;
  
 
  const totalDeduction = selfDeduction + childDeduction + socialSecurity + insuranceDeduction;

  
  const totalIncome = salaryOfYear - expenses - totalDeduction > 0 ? salaryOfYear - expenses - totalDeduction : 0;

  
  const calculateTax = (income) => {
    let tax = 0;
    if (income <= 100000) {
      tax = 0;
    } else if (income <= 300000) {
      tax = (income - 100000) * 0.05;
    } else if (income <= 1000000) {
      tax = (income - 300000) * 0.1 + 10000; 
      tax = (income - 1000000) * 0.15 + 70000; 
    }
    return tax;
  };

  
  const taxPayable = calculateTax(totalIncome);

  return (
    <div className="results-container">
      <h1>ผลลัพธ์การคำนวณภาษี</h1>
      <div className="result-item">
        <p><strong>เงินได้ทั้งปี:</strong></p>
        <p className="result-value">{salaryOfYear} บาท</p>
      </div>
      <div className="result-item">
        <p><strong>ค่าใช้จ่าย:</strong></p>
        <p className="result-value">{expenses} บาท</p>
      </div>
      <div className="result-item">
        <p><strong>ค่าลดหย่อน:</strong></p>
        <p className="result-value">{totalDeduction} บาท</p>
      </div>
      <div className="result-item">
        <p><strong>เงินได้พึงประเมินสุทธิ:</strong></p>
        <p className="result-value">{totalIncome} บาท</p>
      </div>
      <div className="result-item tax-result">
        <p><strong>ภาษีที่ต้องชำระ:</strong></p>
        <p className="result-value">{taxPayable} บาท</p>
      </div>
      <div className="final-tax">
        <p>ภาษีที่ต้องชำระทั้งหมด: <strong>{taxPayable} บาท</strong></p>
      </div>
    </div>
  );
};

export default Results;
