import "./Modal.css";

function Modal(props) {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <form>
          <h1 className="mt-3 text-center">Create Channel</h1>
          <div className=" in">
            <input type="text" placeholder="Name" />
          </div>
          <div className="in">
            <input type="text" placeholder="Description" />
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
