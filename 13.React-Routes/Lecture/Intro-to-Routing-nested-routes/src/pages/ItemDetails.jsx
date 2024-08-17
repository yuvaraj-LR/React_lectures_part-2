import { useParams } from "react-router-dom";
import { ITEM } from "../data/item.data";

function ItemDetail() {

    const param = useParams();

    const data = ITEM.filter((item) => item.id === param.id);
    
    return (
        <>
            <h1>I am item detail page.</h1>
            <h2>{param.id}</h2>

            <h1>Title: {data[0].name}</h1>
            <p>Desc: {data[0].desc}</p>
        </>
    )
}

export default ItemDetail;