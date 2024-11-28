import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, []);

  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className="bg-gradient-to-b from-sections-bg-1 to-sections-bg-2 p-8 backdrop:bg-gradient-to-b backdrop:from-elements-color-main/5 backdrop:to-elements-color-main/10 drop-shadow-xl w-2/4 rounded-3xl overflow-x-hidden max-xl:w-3/5 max-lg:w-4/5 max-md:w-full"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
}

export default Modal;
