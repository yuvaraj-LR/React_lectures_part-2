import { useContext } from "react";
import { colorContext } from "../context";

export const GrandChild = () => {

    // 1. context by hooks
    // const color = useContext(colorContext)

    // return (
    //     <div>
    //         <p>{color}</p>
    //     </div>
    // )

    // 2. context by Consumer
    return (
        <div>
            <colorContext.Consumer>
                {(color) => <p>{color}</p>}
            </colorContext.Consumer>
        </div>
    )
}