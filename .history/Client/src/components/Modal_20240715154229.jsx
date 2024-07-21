import "./Modal.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
function Modal(props) {
  const user_id = useSelector((state) => state.user.users[0].data.result._id);
  const nameref = useRef();
  const descref = useRef();

  const createTask = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <form onSubmit={createTask}>
          <h1 className="mt-3 text-center">Create Channel</h1>
          <div className=" in">
            <input type="text" placeholder="Name" ref={nameref} />
          </div>
          <div className="in">
            <input type="text" placeholder="Description" ref={descref} />
          </div>

          <div className="mt-6 mb-4 in">
            <button className="mr-4 btn-success">Create</button>
            <button onClick={props.close} className=" btn-danger">
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;
