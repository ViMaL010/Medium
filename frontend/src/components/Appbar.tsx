import { Link } from "react-router-dom"
import { Avatar } from "./BlogsCard"
import { DeletePost } from "./DeletePost"
type AppbarProps = {
    deletepost?: string
}

export const Appbar = ({ deletepost }: AppbarProps) => {

    return <div className="flex justify-between items-center border-b px-10 py-2">
        <Link to={"/blogs"} className="cursor-pointer">
        <div className="flex items-center">
            <div>
                <img src="/medium icon.webp" className="h-20 w-26" alt="" />
            </div>
        </div>
        </Link>
        <div>
            {deletepost === "yes"? <div className="flex items-center">
            <Link to= {'/blogs'} >
            <DeletePost />
            </Link>
            <Link to= {'/publish'}>
                <button type="button" className="text-white mr-3 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
            </Link>    <div className="mb-2">
                <Avatar authorName="Vimal" type="Small"/>
            </div>
            </div>: <div>
            <Link to= {'/publish'}>
                <button type="button" className="text-white mr-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
            </Link>    
                <Avatar authorName="Vimal" type="Small"/>
            </div>}

        </div>
    </div>
}