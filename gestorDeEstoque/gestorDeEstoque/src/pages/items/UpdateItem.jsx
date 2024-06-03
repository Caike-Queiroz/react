import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";

export default function UpdateItem() {
    const { getItem } = useStock();
    const { id } = useParams();

    const item = getItem(id);

    return (
        <>
            <h1>UpdateItem</h1>
            <ItemForm
                itemToUpdate={item}
            />
        </>
    )
}