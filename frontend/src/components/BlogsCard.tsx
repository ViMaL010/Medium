import { Link } from "react-router-dom"

interface blogCardProps{
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: number
}

export const BlogsCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
} :  blogCardProps) => {
       return <Link to={`/blogs/${id}`}>
        <div className="p-4 border-b-[1px] border-slate-200 pb-4">
            <div className="flex items-center gap-2">
                <div className="flex justify-center flex-col text-sm">
                    <Avatar authorName = {authorName}/>
                </div>
                <div className="font-thin text-sm">
                    {authorName} 
                </div>
                <div className="text-[8px] text-slate-700">
                &#9679;
                </div>
                <div className="font-thin text-slate-500 text-sm">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="font-thin text-md ">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-400 text-sm font-extralight pt-4">
                {Math.ceil(content.length / 100) + " mins read"} 
            </div>
        </div>
    </Link>
}

export function Avatar({authorName} : {authorName: string}){
    let authName = authorName.split(" ").map(word => word.charAt(0)).join('')
    return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-gray-500 text-[12px]">
    <span className="font-xs text-gray-300">{authName} </span>
    </div>

}