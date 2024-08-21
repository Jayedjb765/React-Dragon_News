import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";


const LeftNav = () => {
    const [categorys,setcategory] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setcategory(data))
    },[])
    return (
        <div className="space-y-4">
           
            <h3 className="text-xl mb-3">All Caterogy</h3>
            {
                categorys.map(category => <Link className="block text-bold ml-3 " to={`{/category/${category.id}}`} key={category.id}>{category.name} </Link>)
            }
           
        </div>
    );
};

export default LeftNav;