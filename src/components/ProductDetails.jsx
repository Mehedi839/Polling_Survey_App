import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveDonateDetail } from "./localstorage";
import Swal from "sweetalert2";



const ProductDetails  = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);
    const AddToCard = () => {
       saveDonateDetail(idInt)
       Swal.fire({
        icon: "success",
        title: "Product Added Successful",
      })
    }



   const {name,brand,type,image,description,price,rating} = detail
  return (
         <div className="">
         <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={image} alt="" className="w-full h-60 sm:h-96 " />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
			<div className="space-y-2">
            <Link to='/'><button className="btn btn-warning text-white" > {`< `} Back</button> </Link><br />
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl  sm:text-3xl text-black"> <b>Name:</b> {name}</a>
				<p className="text-xl text-black"><b>Brand :</b> {brand}
				</p>
				<p className="text-xl text-black"><b>Type :</b> {type}
				</p>
                <h2 className="text-black text-xl"><b>Price:</b> {price}</h2>
                <h2 className="text-black text-xl"><b>Rating:</b> {rating}</h2>
			</div>
			<div className="text-black">
				<p className="text-md"><b>Description:</b> <br /> {description}</p>
			</div>
            <div className="">
                <button onClick={AddToCard} className=" w-full py-2 bg-green-700 text-white">Add To Card</button>
            </div>
		</div>
	</div>
</div>
           
         </div>
  );
};

export default ProductDetails;