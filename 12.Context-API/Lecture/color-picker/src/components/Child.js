import { colorContext } from "../context"
import { GrandChild } from "./GrandChild"
import { useContext } from "react"

export const Child = () => {
    const color = useContext(colorContext)

    return (
        <div style={{border: `10px solid black`, padding:`10px`, backgroundColor: color, width: `300px`, color: "#fff", fontSize: `2rem`}}>
            <GrandChild />
        </div>
    )
}