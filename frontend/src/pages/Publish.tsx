import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div >   
    <Appbar/>
    <div className="flex justify-center">
        <div className="max-w-screen-lg w-full pt-8">
                <input onChange={(e)=>{
                    setTitle(e.target.value);
                }} type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 focus:outline-none  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"></input>
        </div>
    </div>
    <Texteditor onChange = {(e) => {
        setDescription(e.target.value);
    }}/>        
    <div className="flex justify-center">
            <div className="max-w-screen-lg w-full pt-5">
                <button onClick={async() => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog/create`, {   
                        title,
                        content: description
                    },{
                    headers : {
                        Authorization : localStorage.getItem('token')
                    }});
                    navigate(`/blogs/${response.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
</div>
}

function Texteditor({onChange} : {onChange : (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return <div>
        <div className="flex justify-center">
            <div className="max-w-screen-lg w-full pt-2 ">
                <textarea onChange={onChange} id="message"className="focus:outline-none min-h-[200px] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Write your thoughts here..."></textarea>
            </div>
        </div>   
    </div>
}