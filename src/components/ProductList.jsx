import PropType from "prop-types";

const ProductList = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase">ID</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase">Nombre</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase">Precio</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase">Stock</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.product_name}</td>
              <td className="py-2 px-4 border-b border-gray-200">${item.price}</td>
              <td className="py-2 px-4 border-b border-gray-200">${item.stock}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductList.propTypes = {
    products: PropType.arrayOf(
        PropType.shape({
            id: PropType.number,
            product_name: PropType.string,
            price: PropType.number,
            stock: PropType.number
        })
    )
}

export default ProductList;
