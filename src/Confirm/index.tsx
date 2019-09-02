import * as React from "react";
import Button from "../Button";
import Modal from "../Modal";

const Confirm: React.FC<{
  className?: string;
  onCancel: React.EventHandler<React.SyntheticEvent>;
  onConfirm: React.EventHandler<React.SyntheticEvent>;
  open: boolean;
}> = ({ children, className, onCancel, onConfirm, open }) => {
  return (
    <Modal className={className} open={open} onClose={onCancel}>
      <>
        {children || (
          <>
            <h3>Are you sure?</h3>
            <p>
              What you&apos;re about to do can&apos;t be undone, so be sure!
            </p>
          </>
        )}
        <div>
          <Button onClick={onCancel}>No</Button>
          <Button onClick={onConfirm}>Yes</Button>
        </div>
      </>
    </Modal>
  );
};

Confirm.displayName = "Confirm";

export default Confirm;
