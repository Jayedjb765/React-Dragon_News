import Header from "../../Shared/Header/Header";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightNav from "../../Shared/RightNav/RightNav";
import BreakingNews from "../BreakingNews/BreakingNews";


const Home = () => {
    return (
        <div>
           
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border"><LeftNav></LeftNav></div>
                <div className=" lg:col-span-2 border">This is nav</div>
                <div className="border"><RightNav></RightNav></div>
            </div>
            
            
        </div>
    );
};

export default Home;