import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Modal } from "./Modal";
export default function LoanFrom() {
  let [errorMsg, setErrorMsg] = useState(null);
  let [btnSubmit, setBtnSubmit] = useState(false);
  let [formInputs, setFormInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    salary: "",
    isEmployee: false,
  });

  function handleDivClick() {
    setBtnSubmit(false);
  }

  return (
    <div className="bank-body" onClick={handleDivClick}>
      <div className="container">
        <div className="row gx-0 shadow-lg bg-white p-4 border border-primary-subtle border-2 rounded-4 ">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <img className="mb-4" src="./icons8-bank-64.png" alt="" />
            <h2 className="text-center mb-4 text-primary-emphasis">
              Requesting a Loan
            </h2>
          </div>
          <form
            className="col-12"
            onSubmit={(e) => {
              e.preventDefault();
              if (formInputs.age < 18 || formInputs.age > 100) {
                setErrorMsg("The Age Not Allowed");
              } else if (
                formInputs.phoneNumber.length <= 10 ||
                formInputs.phoneNumber.length > 12
              ) {
                setErrorMsg("The Phone More Less 10");
              } else {
                setErrorMsg();
              }
              setBtnSubmit(true);
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control "
                id="name"
                onChange={(e) => {
                  setFormInput({ ...formInputs, name: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                onChange={(e) => {
                  setFormInput({ ...formInputs, phoneNumber: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                onChange={(e) => {
                  setFormInput({ ...formInputs, age: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <select
                id="salary"
                className="form-select"
                onChange={(e) => {
                  setFormInput({ ...formInputs, salary: e.target.value });
                }}
              >
                <option></option>
                <option>less than 500$</option>
                <option>between 500$ and 2000</option>
                <option>above 2000</option>
              </select>
            </div>

            <div className="form-check mb-5">
              <input
                className="form-check-input"
                type="checkbox"
                id="check"
                onChange={(e) => {
                  setFormInput({
                    ...formInputs,
                    isEmployee: e.target.checked,
                  });
                }}
              />
              <label className="form-check-label" htmlFor="check">
                Are you an employee
              </label>
            </div>

            <div className="btn-submit text-center">
              <button
                type="submit"
                className="btn btn-primary "
                disabled={
                  !formInputs.name ||
                  !formInputs.phoneNumber ||
                  !formInputs.age ||
                  !formInputs.salary
                }
              >
                Submit
              </button>
            </div>
          </form>
          <Modal errorMsg={errorMsg} isVisible={btnSubmit} />
        </div>
      </div>
    </div>
  );
}
