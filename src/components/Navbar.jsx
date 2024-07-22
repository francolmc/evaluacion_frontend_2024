import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-orange-300 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-xl font-bold">
              Evaluacion 
            </div>
            <div>
              <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/products" className="text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
            </div>
          </div>
        </nav>
      );
};

export default Navbar;