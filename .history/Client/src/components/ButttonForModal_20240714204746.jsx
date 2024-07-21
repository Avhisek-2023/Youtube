import { useState } from "react";

function ButtonForModal() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    return setModal(false);
  };

  const openModal = (id) => {
    console.log(id);
    setModal(true);
  };

  return (
    <>
      <div className="logo-align">
        <GrChannel />
      </div>
      <div className="ml-2">Create Your Own Channel</div>
      {modal && <Modal close={closeModal} />}
    </>
  );
}

export default ButtonForModal;
