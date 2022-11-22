import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  console.log(isOpen)
  return {
    isOpen,
    toggle
  };
}

