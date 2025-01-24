import { useParams } from "react-router-dom";
import { Fullblog } from "../components/Fullblog";
import { useBlog } from "../hooks"
import { Blogskeleton } from "../components/Blogskeleton";

export const Blog = () => {
  const {id} = useParams();
  const {loading, blog} = useBlog({
    id : id || ""
  });
  if(loading){
    return <div>
      <Blogskeleton/>
    </div>
  }
  return <div>
    <div>{//@ts-ignore} 
    <Fullblog blog={blog}/> 
    }/</div>
  </div>
  } 