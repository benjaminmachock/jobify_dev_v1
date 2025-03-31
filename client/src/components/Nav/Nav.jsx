//Imports
import { useState } from "react";
import { Modal } from "../Modal/Modal.jsx";
import "./nav.css";

export const Nav = () => {
  //Hooks
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const handleOpenModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  return (
    <div className="nav">
      <h1>Jobify</h1>
      <button className="nav-btn" onClick={() => handleOpenModal("jobForm")}>
        Post Job
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        formType={formType}
      />
    </div>
  );
};
