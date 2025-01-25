import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogsCard"

export const Fullblog = ({blog}: {blog: Blog}) => {
    

    return <div>
        <Appbar deletepost="yes"/>
        <div className="flex justify-center">       
            <div className=" px-10 max-w-2xl pt-200 pt-12"> 
                <div className="col-span-8">
                    <div className="text-4xl max-w-xl font-extrabold pt-4">
                        {blog.title}
                    </div> 
                    <div className="flex pt-8">
                            <div className="pt-2 flex flex-col justify-center">
                                <Avatar authorName={blog.author.name} type="Big"/>
                            </div>
                            <div>
                                <div className="text-lg font-medium pt-2 px-4">
                                    {blog.author.name}
                                </div>
                                <div className="text-slate-500 text-sm font-extralight px-4">
                                    Posted on 22nd December 2024
                                </div>
                            </div>
                    </div>
                    <div className="pt-4 border-b-[1px] border-slate-200">
                    </div>
                    <div className="pt-4 italic text-lg">
                        {blog.content}
                    </div>
                </div>
        </div>   
    </div>
    </div>
}