import { Link } from "react-router-dom";
import PropType from "prop-types";

const EditButton = ({ productId }) => {
    return (
        <Link className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" to={`/products/${productId}`}>Editar</Link>
    );
};

EditButton.propTypes = {
    productId: PropType.number
}

export default EditButton;