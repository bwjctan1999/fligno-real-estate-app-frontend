import DesignLogin from "../../assets/svgs/DesignLogin";
import Button from "../../components/Button"
import TextField from "../../components/Textfield";


export default function Login() {
    return (
        <div className="flex flex-wrap gap-9 min-h-screen items-center justify-center bg-gray-50">
          <div className=" px-12 pt-12 pb-10 text-left md:w-5/12 lg:w-5/12 xl:w-4/12 ">
            
            <h3 className="mb-2 pb-3 text-4xl font-bold text-zinc-900 ">
            Login
            </h3>

            <p className="text-sm mb-4">
            Not registered? 
            <a  
                onClick={() => navigate("/Signup")} 
                className="text-blue-600 hover:underline">
            Sign Up
            </a>
            </p>

        <form action="">
         

        <div className= "flex flex-col gap-4">
            <TextField
                type="text"
                placeholder="Email"
            />

            <TextField
                type="Password"
                placeholder="Password"
            />

        <div >
          <input type="radio" />
          <label class="text-sm">     Remember Me</label>
            <a  
                onClick={() => navigate("/Signup")} 
                className="text-sm text-blue-600 hover:underline">
                Forgot Password?
            </a>
        </div>

        <div className="flex items-baseline justify-between ">
            <Button text="Log In"/>
          </div>

        </div>
        </form>
        </div>

        <div className="w-1/2 items-end">
          <DesignLogin />
        </div>
        </div>
    );
}

