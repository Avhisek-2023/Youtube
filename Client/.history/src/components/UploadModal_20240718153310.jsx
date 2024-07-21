import "./Modal.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { uploadVideo } from "../api/index.js";

function Modal(props) {
  const dispatch = useDispatch();
  const titleref = useRef();
  const fileref = useRef();

  const upload = (event) => {
    event.preventDefault();
    const payLoad = {
      user_id: user_id,
      name: nameref.current.value,
      description: descref.current.value,
    };
    if (!(nameref.current.value && descref.current.value)) {
      alert("Fill the parameters...");
      return;
    }
    dispatch(createChannel(payLoad));
  };

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <form onSubmit={upload} encType="multipart/form-data">
          <h1 className="mt-3 text-center">Upload Video</h1>
          <div className=" in">
            <input type="text" placeholder="Name" ref={titleref} />
          </div>
          <div className="in">
            <input
              type="file"
              name="files[]"
              placeholder="Description"
              ref={fileref}
            />
          </div>

          <div className="mt-6 mb-4 in">
            <button className="mr-4 btn-success">Upload</button>
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

// const UploadModal = () => {
//   return <div></div>;
// };

// export default UploadModal;
