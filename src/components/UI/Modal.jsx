/**
 * Modal component.
 * This component renders a modal dialog using the HTML <dialog> element.
 * It utilizes React Portals to render outside the main component tree.
 * @module Modal
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the modal.
 * @param {boolean} props.open - Determines whether the modal should be displayed.
 * @param {Function} props.onClose - Callback function triggered when the modal is closed.
 * @returns {JSX.Element} The modal component.
 */

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose }) {
  const dialog = useRef(); // create a ref to reference the <dialog> element

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      // show the modal when 'open' is true
      modal.showModal();
    }

    return () => modal.close();
  }, []);

  return createPortal(
    // Render the modal into the 'modal-root' container outside the main component tree
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
