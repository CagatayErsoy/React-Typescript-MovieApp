import { useState } from "react";

 const useModal=()=> {
  const [isOpen, setisOpen] = useState(false);
  console.log("modal")
  const toggle = () => {
    setisOpen(!isOpen);
  };
 
  return {
    isOpen,
    toggle
  };
}
export default useModal

