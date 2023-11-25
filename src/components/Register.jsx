import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // Create user in firebase
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You have successfully registered.",
        }).then(() => {
          // Reset the form after registration success
          setFormData({
            name: "",
            email: "",
            password: "",
          });
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Registration Error",
            text: error.message, 
          
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: "You have successfully registered.",
          })
      })
      .catch((error) => {
        console.log(error.message);

      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="">
          <div className="card rounded-none w-full max-w-sm bg-base-100">
            <div className="card-body">
              <button onClick={handleGoogleSignIn} className="btn w-full">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951"
                  alt=""
                />{" "}
                Login with Google
              </button>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
              </div>
              <p className="text-center text-lg font-medium">Register now</p>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="input input-bordered"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="input input-bordered"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="input input-bordered"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
              <p>
                Already have an account? Please{" "}
                <Link to="/login">
                  <button className="btn btn-link">Login</button>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
