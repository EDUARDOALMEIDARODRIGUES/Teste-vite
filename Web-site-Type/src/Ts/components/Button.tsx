import { useState } from "react";
import Modal from "./Modal";

type ButtomSet = {
      children : React.ReactNode;
}

function Buttom({ children }: ButtomSet) {
      const [modalIsOpen, setModal] = useState(false);

      function handleModalOpen() {
            setModal(!modalIsOpen);
      }

      return (
            <>
                  <button
                        type="button"
                        onClick={handleModalOpen}
                  >{children}</button>
                  <Modal isOpen={modalIsOpen} onClose={handleModalOpen}/>
            </>
      );
}

export default Buttom;