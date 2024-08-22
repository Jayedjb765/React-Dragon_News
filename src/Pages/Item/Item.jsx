import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
const Item = ({ item }) => {
  const { author, title, details, image_url,total_view } = item;
  return (
    <div className="space-y-2 mb-5 border ">
      <div className=" justify-between flex bg-slate-100">
        <div className="flex ml-2">
          <div>
            <img className="w-10 rounded-full mr-3" src={author.img} alt="" />
          </div>
          <div>
            <h3 className="text-base">{author.name}</h3>
            <h3 className="text-sm">{author.published_date}</h3>
          </div>
        </div>
        <div className="flex items-center">
          <h3 className="text-2xl mr-1 ">
            <CiBookmark></CiBookmark>
          </h3>
          <h3 className="text-2xl mr-2">
            <CiShare2></CiShare2>
          </h3>
        </div>
      </div>
      <div className="px-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <img src={image_url} alt="" />
        <p className="text-base mb-2">{details}</p>
      </div>
      <div className="justify-between flex border-y py-2">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="flex mr-2 items-center ">
           <h3 className="text-base mr-1"><AiOutlineEye></AiOutlineEye></h3>
           <h3 className="text-base">{total_view}</h3>

        </div>
      </div>
    </div>
  );
};

export default Item;
