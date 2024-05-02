import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";
export function Modal({ isVisible, errorMsg = null }) {
  if (isVisible) {
    return (
      <div className="modal w-100 min-vh-100 d-flex justify-content-center align-items-center">
        <div className="card ">
          <div className="card-body text-center ">
            <FontAwesomeIcon
              icon={errorMsg ? faCircleXmark : faCircleCheck}
              size="2x"
              className={errorMsg ? " text-danger mb-2 " : "text-success mb-2"}
            />
            <h5 className="card-title fs-4">{errorMsg ? "Error" : "Success"}</h5>
            <p className="card-text ">
              {errorMsg ?errorMsg : "The data has been sent successfully"}
            </p>
            <button className={errorMsg ? "btn btn-danger" : "btn btn-success"}>
              Close
            </button>
          </div>
        </div>
        {/* <div className="card " >
          <div className="card-body text-center ">
          <FontAwesomeIcon icon={faCircleXmark} size="2x" className="text-danger mb-2  " />
       
            <h5 className="card-title ">Error</h5>
            <p className="card-text">{errorMsg !=null? errorMsg : "The data has been sent successfully"}</p>
            <button className="btn btn-danger">Done</button>
          </div>
        </div> */}
      </div>
    );
  } else {
    return <></>;
  }
}
