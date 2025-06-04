// import { useRef } from "react";
// import { Button } from "../components/Button";
// import { Input } from "../components/Input";
// import { BACKEND_URL } from "../config";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export function Signin() {
//     const usernameRef = useRef<HTMLInputElement | null>(null);
//     const passwordRef = useRef<HTMLInputElement | null>(null);
//     const navigate = useNavigate();

//     async function signin() {
//         const username = usernameRef.current?.value;
//         console.log(usernameRef.current)
//         const password = passwordRef.current?.value;
//         const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
//             username,
//             password
//         })
//         const jwt = response.data.token;
//         localStorage.setItem("token", jwt);
//         navigate("/dashboard")
//     }
//     return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
//         <div className="bg-white rounded-xl border min-w-48 p-8">
//             <Input reference={usernameRef} placeholder="Username" />
//             <Input reference={passwordRef} placeholder="Password" />
//             <div className="flex justify-center pt-4">
//                 <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true} />
//             </div>
//         </div>
//     </div>
// }


import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
            username,
            password
        });
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
    }

    return (
        <div className="min-h-screen w-full bg-gray-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8 border border-gray-100">
                <div className="text-center mb-8 w-full">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back</h2>
                    <p className="text-gray-500 text-lg">Sign in to your account</p>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <Input reference={usernameRef} placeholder="Username" />
                    <Input reference={passwordRef} placeholder="Password" />
                </div>
                <div className="w-full flex flex-col gap-4 pt-8">
                    <Button
                        onClick={signin}
                        loading={false}
                        variant="primary"
                        text="Sign In"
                        fullWidth={true}
                    />
                    <div className="text-center text-base text-gray-500 pt-2">
                        Don't have an account?{' '}
                        <Link
                            to="/signup"
                            className="text-purple-600 hover:underline font-medium"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}