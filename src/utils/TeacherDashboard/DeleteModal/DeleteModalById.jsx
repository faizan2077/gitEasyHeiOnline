import React from "react";

import "./DeleteModal.scss";

const DeleteModalById = ({ setOpen, modalTitle, modalSubtitle , id,setdeletecomand}) => {

const  handledelete =(id)=>{
console.log(id);
   setdeletecomand(true)
   setOpen(false)
}
  return (
    <section className="deleteModal">
      <div className="deleteModal__scrollable">
        <h4 className="deleteModal__scrollable__title">{modalTitle}</h4>
        <h6 className="deleteModal__scrollable__subtitle">{modalSubtitle}</h6>
        <div className="deleteModal__scrollable__actionButtons">
          <button
            onClick={() => setOpen(false)}
            className="deleteModal__scrollable__actionButtons__cancel"
          >
            Cancel
          </button>
          <button
            onClick={() => handledelete(id)}
            className="deleteModal__scrollable__actionButtons__delete"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteModalById;
