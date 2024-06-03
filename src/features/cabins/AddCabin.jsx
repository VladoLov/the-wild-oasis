/* eslint-disable no-unused-vars */
/* import { useState } from "react"; */
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// ---CONVERTING MODAL TO A COMPOUND COMPONENT
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// -----MODAL  CABIN

/* function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(true);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
} */

export default AddCabin;
