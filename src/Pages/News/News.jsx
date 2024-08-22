import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightNav from "../../Shared/RightNav/RightNav";
import Navbar from "../../Shared/Navbar/Navbar";


const News = () => {
    const {id} = useParams();
    return (
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                <h3 className="text-2xl">Dragons</h3>

            
            </div>
            <div>
                <RightNav></RightNav>

            </div>

           </div>
            
        </div>
    );
};

export default News;