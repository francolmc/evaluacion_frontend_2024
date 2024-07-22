import PropType from "prop-types";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                {children}
            </div>
        </>
    );
};

MainLayout.propTypes = {
    children: PropType.node
};

export default MainLayout;