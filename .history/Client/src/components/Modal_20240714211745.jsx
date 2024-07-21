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

          <div className="flex justify-center mt-3 mb-3">
            <button className="mr-4 btn btn-success">Save</button>
            <button onClick={props.close} className="btn btn-danger">
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;
