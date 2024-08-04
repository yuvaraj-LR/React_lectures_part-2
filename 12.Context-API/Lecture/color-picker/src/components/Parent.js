import { useState } from "react"
import { Child } from "./Child";
import { colorContext } from "../context";

export const Parent = (props) => {
    const [color, setColor] = useState('#000000');

    return (
        <>
            <h1 className="parent">Pick a color.</h1>

            <input value={color} onChange={(e) => {
                setColor(e.target.value)
            }} type="color" />

            <colorContext.Provider value={color}>
                <Child color={color}/>
            </colorContext.Provider>

        </>
    );
};