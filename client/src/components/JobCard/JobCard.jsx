//Imports
import { useState } from "react";
import "./jobcard.css";
import { Modal } from "../Modal/Modal.jsx";

export const JobCard = ({ data }) => {
  console.log(data);
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
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h3>{data.pay}</h3>
      <div>
        <button
          className="card-btn"
          onClick={() => handleOpenModal("jobApply")}
        >
          Apply
        </button>
        <button
          className="card-btn"
          onClick={() => handleOpenModal("jobUpdate")}
        >
          Update Job
        </button>
        <button
          className="card-btn"
          onClick={() => handleOpenModal("jobRemoval")}
        >
          Remove Job
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        formType={formType}
      />
    </>
  );
};
