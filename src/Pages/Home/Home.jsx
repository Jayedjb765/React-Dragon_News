import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <h3 className="text-3xl font-poppins font-bold">This is Home page</h3>
            
        </div>
    );
};

export default Home;