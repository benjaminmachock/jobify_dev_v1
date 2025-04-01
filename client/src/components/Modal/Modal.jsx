import "./modal.css";
import { JobForm } from "../JobForm/JobForm";
import { JobUpdateForm } from "../JobUpdateForm/JobUpdateForm";
import { JobApply } from "../JobApply/JobApply";

//wanted to create a flexible and scalable modal component that can render diff forms based on formType

//isOpen controls whether the modal is visible
//onClose - function that closes the modal
//children - additional JSX content passed inside the modal
//formType - determines which form component to render
export const Modal = ({ isOpen, onClose, children, formType }) => {
  if (!isOpen) {
    return null;
  }

  //function responsible for user clicking outside the modal content on the overlay, calls onClose to close the modal. ensuring that clicking inside the modal doesnt trigger the closing of the modal
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const renderForm = () => {
    switch (formType) {
      case "jobForm":
        return <JobForm />;
      case "jobUpdate":
        return <JobUpdateForm />;
      case "jobApply":
        return <JobApply />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {children}
        {renderForm()}
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
