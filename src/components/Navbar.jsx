import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>  Swal.fire({
            icon: "success",
            title: " Successfully Log out",
            text: "You have successfully Log out.",
          }))
        .catch(error => console.error (error))
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCard">My Card</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
       
    </>

    return (
        <div className="navbar bg-[#F2F2F2]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img className="w-[100px] rounded-full" src="https://m.media-amazon.com/images/I/51cOM2ZPaoL.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span>{user.email}</span>
                        <a onClick={handleLogOut} className="btn btn-sm">Log out</a>
                    </> 
                    : <Link to="/login">
                        <button className="btn btn-primary my-2 px-6">Login</button>
                    </Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;