import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../__firebase_init";


const HeroRegister = () => {
    const [registerError, setRegisterError] = useState(" ")
    const [successful, setSuccessful] = useState("")
  
    const handleHeroRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
      
        //reset error
        setRegisterError(" ")
        setSuccessful(" ")

  
        if(password.length < 6){
            setRegisterError(' Password should be at least 6 characters')
            return;
        }


        // create user

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
             console.log(user)
             setSuccessful("successful your email")
        })
        .catch(error => {
            console.error(error)
           setRegisterError(error.message)
        })


       

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleHeroRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

         {
            registerError && <p className="Enter your new email text-red-500">{registerError}</p>
         }
         {
            successful && <p className=" text-green-500">{successful}</p>
         }
    </div>
  </div>
</div>
        </div>
    );
};

export default HeroRegister;