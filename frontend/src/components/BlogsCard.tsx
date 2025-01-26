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
        <div className="p-4 border-b-[1px] border-slate-200">
            <div className="flex items-center gap-2">
                <div className="flex justify-center flex-col text-sm">
                    <Avatar authorName = {authorName} type="Small"/>
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

export function Avatar({ authorName, type }: { authorName?: string; type: string }) {
  // Determine the author's initials or fallback to "U"
  const authName =
    authorName && authorName.trim()
      ? authorName.split(" ").map((word) => word.charAt(0)).join("")
      : localStorage.getItem("name")?.charAt(0);

  // Set class names dynamically based on the `type` prop
  const sizeClass = type === "Big" ? "w-12 h-12 text-[24px]" : "w-9 h-9 text-[12px]";
  const positionClass = type === "Big" ? "mb-1" : "";
  
  return (
    <div
      className={`relative inline-flex items-center justify-center ${sizeClass} overflow-hidden rounded-full bg-gray-500 ml-1 mb-[9px]`}
    >
      <span className={`font-xs text-gray-300 ${positionClass}`}>{authName}</span>
    </div>
  );
}
