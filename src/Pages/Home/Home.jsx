import { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightNav from "../../Shared/RightNav/RightNav";
import BreakingNews from "../BreakingNews/BreakingNews";
import Item from "../Item/Item";


const Home = () => {
    const [items,setitems] = useState([]);
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setitems(data))
    },[])
    return (
        <div>
           
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className=""><LeftNav></LeftNav></div>
                
                <div className=" lg:col-span-2 ">
                <h3 className="text-2xl">Dragon News Home</h3>
                    {
                    items.map(item => <Item 
                    key={item.id} 
                    item={item}>

                    </Item>)
            
            }</div>
                <div className=""><RightNav></RightNav></div>
            </div>
            
            
        </div>
    );
};

export default Home;