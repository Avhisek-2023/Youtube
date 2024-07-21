import { useState } from "react";
import { GrChannel } from "react-icons/gr";
import Modal from "./Modal";

function ButtonForModal() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    return setModal(false);
  };

  const openModal = () => {
    // console.log(id);
    setModal(true);
  };

  return (
    <>
      <div className="logo-align">
        <GrChannel />
      </div>
      <div className="ml-2" onClick={() => openModal()}>
        Create Your Own Channel
      </div>
      {modal && <Modal close={closeModal} />}
    </>
  );
}

export default ButtonForModal;
