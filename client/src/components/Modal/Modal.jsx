import "./modal.css";
import { JobForm } from "../JobForm/JobForm";
import { JobUpdateForm } from "../JobUpdateForm/JobUpdateForm";
import { JobApply } from "../JobApply/JobApply";

export const Modal = ({ isOpen, onClose, children, formType }) => {
  if (!isOpen) {
    return null;
  }

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
