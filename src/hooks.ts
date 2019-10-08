import * as React from "react";

export function useToggleState(initialState = false) {
  const [open, setOpen] = React.useState(initialState);

  function handleClose(e?: React.FormEvent<HTMLElement>): void {
    if (e) e.preventDefault();
    setOpen(false);
  }

  function handleOpen(e?: React.FormEvent<HTMLElement>): void {
    if (e) e.preventDefault();
    setOpen(true);
  }

  function handleToggle(e?: React.FormEvent<HTMLElement>): void {
    if (e) e.preventDefault();
    setOpen(!open);
  }

  return { open, handleOpen, handleClose, handleToggle };
}

export function useClickOutside(callback: any) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (!ref.current!.contains(e.target)) callback();
    }
    document.addEventListener("click", handleClickOutside, true);

    return function dispose() {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return ref;
}
