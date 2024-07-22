import MainLayout from "../layout/MainLayout";

const HomePage = () => {
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold mb-4">Ejercicio de Evaluación</h1>
            <p className="mb-4">
                Bienvenidos a la evaluación de programación frontend con React. Este ejercicio tiene como objetivo evaluar tus habilidades en el desarrollo de aplicaciones web utilizando React.
            </p>
            <p className="mb-4">
                A continuación, se describen las tareas que debes completar. Tienes un total de 60 minutos para finalizar la evaluación. Lee atentamente cada punto y asegúrate de cumplir con los requisitos especificados.
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li className="p-2">
                    <strong>Mostrar la Lista de Productos:</strong>
                    <br />
                    Crea un componente llamado <code>ProductList</code>. Obtén los datos de los productos mediante una solicitud fetch a la URL <code>https://programacionfrontendbackend.onrender.com/api/products</code> utilizando el método GET. Muestra la lista de productos en la página <code>Products</code> utilizando el componente <code>ProductList</code>.
                    <br />
                    Un ejemplo del formato de los datos recibidos es el siguiente:
                    <pre>
                    {`[
    {
        "id": 1,
        "name": "Laptop",
        "price": 1200
    },
    {
        "id": 2,
        "name": "Smartphone",
        "price": 800
    }
]`}
                    </pre>
                    Si la lista de productos está vacía, muestra el mensaje: {'"No hay productos registrados."'}
                </li>
                <li className="p-2">
                    <strong>Crear Página de Edición de Productos:</strong>
                    <br />
                    Crea una página llamada <code>EditProductPage</code> que permita editar los detalles de un producto. El formulario en <code>EditProductPage</code> debe mostrar los campos <code>name</code> y <code>price</code> del producto. Los datos del producto deben obtenerse mediante una solicitud fetch a la URL <code>{'https://programacionfrontendbackend.onrender.com/api/products/<id>'}</code> utilizando el método GET, donde <code>&lt;id&gt;</code> debe ser reemplazado por el id del producto.
                    <br />
                    El formato de los datos recibidos será el siguiente:
                    <pre>
                    {`{
    "id": 1,
    "name": "Laptop",
    "price": 1200
}`}
                    </pre>
                </li>
                <li className="p-2">
                    <strong>Actualizar Producto:</strong>
                    <br />
                    Permite que los datos del producto puedan ser editados en el formulario. Al presionar el botón {'"Actualizar Producto"'}, guarda los cambios mediante una solicitud fetch a la URL <code>{'https://programacionfrontendbackend.onrender.com/api/products/<id>'}</code> utilizando el método PUT. El cuerpo de la solicitud debe tener el siguiente formato:
                    <pre>
                    {`{
  "name": "Laptop",
  "price": 1200
}`}
                    </pre>
                </li>
                <li className="p-2">
                    <strong>Redirección a la Página Principal:</strong>
                    <br />
                    Después de guardar los cambios, redirige al usuario a la página de productos.
                </li>
            </ul>
            <p className="mt-4">
                Usa componentes funcionales y hooks (<code>useState</code>, <code>useEffect</code>). Aplica estilos utilizando Tailwind CSS. Asegúrate de manejar errores en las solicitudes fetch (ej. mostrar un mensaje de error si la solicitud falla).
            </p>
            <p className="mt-4">
                Al finalizar, sube tu proyecto a un repositorio de GitHub y proporciona el enlace al repositorio para su revisión. Asegúrate de que el proyecto sea fácil de ejecutar con instrucciones claras en el archivo README.
            </p>
            <p className="mt-4">
                ¡Buena suerte!
            </p>
        </MainLayout>
    );
}

export default HomePage;