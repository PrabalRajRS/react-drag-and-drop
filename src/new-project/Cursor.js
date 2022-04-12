import React, { useState } from 'react';
import "./Cursor.css";

function Cursor() {
    const [styles, setStyles] = useState("auto")
    const [cursorStyle, setCursorStyle] = useState("move")
    const handleCrossHair = () => {
        setStyles("crossHair")
    }
    const handlepointer = () => {
        setStyles("pointer")
    }
    const handleMove = () => {
        setStyles("move")
    }
    const handleImage = () => {
        setStyles("image")
    }
    const handleReset = () => {
        setStyles("auto")
    }


    return (
        <div className={styles} style={{ height: "50rem" }}>
            <button onClick={handleCrossHair}>Crosshair Cursor</button><br /> <br />
            <button onClick={handlepointer}>Pointer Cursor</button><br /> <br />
            <button onClick={handleMove}>Move Cursor</button><br /> <br />
            <button onClick={handleImage}>Image Cursor</button><br /> <br />
            <button onClick={handleReset}>Reset</button><br /> <br />
            <div className="cursor-object" style={{ cursor: cursorStyle }} onDrag={() => setCursorStyle("crossHair")} draggable="true" />

        </div>
    )
}

export default Cursor;
