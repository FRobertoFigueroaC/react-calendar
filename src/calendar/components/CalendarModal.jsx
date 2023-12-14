import { useState } from "react";
import Modal from "react-modal"
import DatePicker from "react-datepicker";



import "react-datepicker/dist/react-datepicker.css";

import '../../assets/styles/modal/modal.css'
import { addHours, differenceInSeconds } from "date-fns";

// Modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

// datepicker


export const CalendarModal = () => {

  // modal
  const [isModalOpen, setIsModalOpen] = useState(true)

  const onCloseModal = () => {
    setIsModalOpen(false);   
  }

  // form
  const [formValues, setFormValues] = useState({
    title: 'Vacaciones',
    notes: 'OOO',
    start: new Date(),
    end: addHours(new Date(), 23),
  });

  const onInputChange = ({target}) => {
   setFormValues({
    ...formValues,
    [target.name]: target.value
   })
  }

  const onSubmit = (event) => {
   event.preventDefault();
   const diff = differenceInSeconds(formValues.end, formValues.start);
   if(isNaN(diff) || diff < 0) {
    console.log('Error on dates');
    return;
   }
   if (formValues.title.trim().length <= 0 ) return;
   //TODO: 
   /* 
   remover errores
    cerrar modal
    */
  }

  // datepicker
  const onDateChanged = (event, changing) => {
   setFormValues({
    ...formValues,
    [changing]: event
   });
  }



  return (
    <Modal
    isOpen={isModalOpen}
    className="modal"
    overlayClassName="modal-fondo"
    closeTimeoutMS={200}
    onRequestClose={onCloseModal}
    style={customStyles}
    contentLabel="Example Modal">
      <h1> New Event </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
            <label className="col-12">Starting date & time: </label>
            <DatePicker className="form-control col-3 offset-9"
              showTimeSelect
              selected={formValues.start}
              dateFormat="Pp"
              onChange={(event) => onDateChanged(event, 'start')} />
        </div>

        <div className="form-group mb-2">
            <label className="col-12">Ending date & time: </label>
            <DatePicker className="form-control col-3 offset-9"
              showTimeSelect
              selected={formValues.end}
              minDate={formValues.start}
              dateFormat="Pp"
              onChange={(event) => onDateChanged(event, 'end')}  />
        </div>

        <hr />
        <div className="form-group mb-2">
            <label>Title & notes</label>
            <input 
                type="text" 
                className="form-control"
                placeholder="Event title"
                name="title"
                autoComplete="off"
                value={formValues.title}
                onChange={onInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">A brief description</small>
        </div>

        <div className="form-group mb-2">
            <textarea 
                type="text" 
                className="form-control"
                placeholder="Notes"
                rows="5"
                name="notes"
                value={formValues.notes}
                onChange={onInputChange}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">Additional info</small>
        </div>

        <button
            type="submit"
            className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Save</span>
        </button>
      </form>
    </Modal>
  )
}
