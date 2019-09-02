import { useCallback, useEffect, useRef, useState } from "react";

export function useToggleState(initialState = false) {
  const [open, setOpen] = useState(initialState);

  function handleClose(e?: React.SyntheticEvent): void {
    if (e) e.preventDefault();
    setOpen(false);
  }

  function handleOpen(e?: React.SyntheticEvent): void {
    if (e) e.preventDefault();
    setOpen(true);
  }

  function handleToggle(e?: React.SyntheticEvent): void {
    if (e) e.preventDefault();
    setOpen(!open);
  }

  return { open, handleOpen, handleClose, handleToggle };
}

export function useClickOutside(callback: any) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    e => {
      if (!ref.current!.contains(e.target)) callback();
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return function dispose() {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return [ref, handleClickOutside];
}
