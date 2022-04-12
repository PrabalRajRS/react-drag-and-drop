import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context";
import useMousePosition from "../hooks/UseMousePointerPosition";
import "./CursorShapes.css";


const CursorShapes = () => {
  const { x, y } = useMousePosition();
  const { item } = useContext(UserContext)
  const { setItem } = useContext(UserContext)

  useEffect(() => {
    setItem(item)
    
  console.log(item)
  }, [item, setItem])

  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};
export default CursorShapes;