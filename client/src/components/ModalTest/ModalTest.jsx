//Imports
import { useState } from "react";
import { Modal } from "../Modal/Modal.jsx";
import "./modalTest.css";

export const ModalTest = () => {
  //Hooks
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //Functions

  return (
    <>
      <button className="modal-btn" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div clasName="form-container">
          <form className="input-form">
            <input type="text" placeholder="Job Title" name="title" />
            <input
              type="text"
              placeholder="Job Description"
              name="description"
            />
            <input type="text" placeholder="Pay" name="pay" />

            <button className="input-btn">Submit</button>
          </form>
        </div>
      </Modal>
    </>
  );
};
