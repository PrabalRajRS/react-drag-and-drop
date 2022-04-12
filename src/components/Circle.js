import React, { useContext } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { UserContext } from "../context";
import { ItemTypes } from "../ItemTypes";
import { addElement } from "../store/functions/function.action";
import "./Circle.css";

const style = {
    border: "2px solid gray",
    padding: "0.5rem 1rem",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "1rem",
    cursor: "move",
    float: "left",
}


const Circle = ({ name }) => {

    const { setDragging } = useContext(UserContext)
    const dispatch = useDispatch()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CIRCLE,
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            item: monitor.getItem(),
        }),
        end: (item, monitor) => {
            dispatch(addElement(item))
        },

    }))

    const opacity = isDragging ? 0.5 : 1;
    setDragging(isDragging)


    const cursor = "svg"

    return (
        <div draggable="true" ref={drag} className={cursor} style={{ ...style, opacity }} />
    )
}

export default Circle;