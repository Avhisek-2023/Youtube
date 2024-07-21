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
    <div>
      <button className="text-green-700 " onClick={() => openModal(item.id)}>
        {" "}
        <BorderColorIcon />
      </button>
      {modal && <Modal close={closeModal} item={item} />}
    </div>
  );
}

export default ButtonForModal;
