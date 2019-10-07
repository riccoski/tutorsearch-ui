// @ts-check
import * as React from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { useToggleState, useClickOutside } from "../hooks";
import styles from "./Modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal: React.FC<{
  className?: string;
  onClose: Function;
  open: boolean;
  trigger?: React.ReactNode;
}> = ({ children, className, onClose, open }) => {
  const [element] = React.useState(document.createElement("div"));
  const { open: showModal, handleOpen, handleClose } = useToggleState(open);
  const ref = useClickOutside(handleClose);
  React.useEffect(() => {
    if (open) handleOpen();
    else handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const dispose = React.useCallback(() => {
    document.body.classList.remove("no-scroll");
    if (element.parentNode === modalRoot) {
      modalRoot!.removeChild(element);
    }
  }, [element]);

  React.useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
      modalRoot!.appendChild(element);
    } else {
      dispose();
      if (typeof onClose === "function") onClose();
    }

    return dispose;
  }, [showModal]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {showModal &&
        createPortal(
          <CSSTransition timeout={500} classNames="animated fadeIn">
            <div
              className={classNames(styles.modal, className, {
                [styles.isOpen]: showModal
              })}
            >
              <div className={styles.overlay}>
                <div ref={ref} className={styles.container}>
                  <div className={styles.close} onClick={handleClose} />
                  {children}
                </div>
              </div>
            </div>
          </CSSTransition>,
          element
        )}
    </>
  );
};

Modal.displayName = "Modal";

export default Modal;
