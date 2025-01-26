import { SignedupInput } from "@vimal.sde/medium-common"
import { ChangeEvent, useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Auth = ({type} : {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs , setPostInputs] = useState<SignedupInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`, type == "signup" ? postInputs :
                {username: postInputs.username,
                password: postInputs.password}
            );
            const jwt = response.data;
            console.log(response.data.name);
            
            localStorage.setItem("name", jwt.name || "Guest");
            localStorage.setItem("token",jwt.token);
            navigate("/blogs");
        }catch(e){
            alert("Error while signin up")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10 mb-3"><div className="text-3xl font-extrabold">
                    {type == "signup" ? "Create an account" : "Login to your account"}
                    
                </div>                  
                {type == "signup" ? "Already have an account?" : "Don't have an account?"} 
                <Link to={type=='signup' ? "/signin": "/"} className="text-blue-500 underline pl-1">{type == "signup" ? "Login" : "Signup"}</Link>
                </div>
                {type === "signup" ? <InputBox label="Name" placeHolder="Vimal" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}
                <div>                      
                    <InputBox label="Username" placeHolder="vimalwq@gmail.com" onChange={(e) => {
                    setPostInputs(postInputs=>({
                        ...postInputs,
                        username: e.target.value
                    }))
                }} />                 
                    <InputBox label="Password" type={'password'} placeHolder="123456" onChange={(e) => {
                    setPostInputs(c=>({
                        ...c,
                        password: e.target.value
                    }))
                }} />   
                <button onClick={
                    sendRequest
                } type="button" className="text-white bg-gray-800 w-full mt-8 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup" ? "Sign up" : "Sign in"}</button>

                </div>
            </div>
        </div>
    </div>
}

interface inputInterface {
    label: string,
    placeHolder : string,
    type?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function InputBox({label, placeHolder, type, onChange} : inputInterface){
    return <div className="pt-2">
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeHolder} required />
        </div>
    </div>
}