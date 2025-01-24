import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogsCard"

export const Fullblog = ({blog}: {blog: Blog}) => {
    

    return <div>
        <Appbar/>
        <div className="flex justify-center">       
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12"> 
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold pt-4">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 text-sm font-extralight pt-2">
                        Posted on 22nd December 2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                    <div className="col-span-4 pt-4 ml-12">
                        <div className="text-lg text-slate-600">
                            Author
                        </div>
                        <div className="flex">
                            <div className="pt-2 flex flex-col justify-center">
                                <Avatar authorName={blog.author.name}/>
                            </div>
                            <div>
                                <div className="text-2xl font-bold pt-2 px-4">
                                    {blog.author.name}
                                </div>
                                <div className="pt-2 text-slate-500 px-4">
                                    This is just a random phrase I have added where there needs to be some better content
                                </div>
                            </div>
                    </div>
                </div>
        </div>   
    </div>
    </div>
}