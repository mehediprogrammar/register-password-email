import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../__firebase_init";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })

    }



    return (
        <div >
             <h2 className="text-center text-2xl my-10 font-bold">Register Now</h2>
            <form onSubmit={handleRegister}>
                 
                <input className=" bg-gray-500 px-5 text-white  w-2/3 py-3 mt-10" type="email" name="email" id="" />
                <br />
                <input className=" bg-gray-500 px-5 text-white  w-2/3 py-3 mt-10" type="password" name="password" id="" />
                <br />
                 <input className=" bg-indigo-500 text-white text-xl font-semibold px-5 w-2/3 py-3 mt-10" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;