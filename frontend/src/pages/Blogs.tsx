import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { Skeletons } from "../components/Skeletons";
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const {loading, blogs} = useBlogs();
    
    if(loading){
        return <div>
            <Appbar deletepost="no"/>
            <div className="flex justify-center">
                <div className="">
                    <Skeletons/>
                    <Skeletons/>
                    <Skeletons/>
                    <Skeletons/>
                    <Skeletons/>
                    <Skeletons/>
                </div>
            </div>
        </div>
    }

    
    return <div>
        <Appbar/>
        <div className="max-w-2xl mx-auto cursor-pointer md:w-full">
            {// @ts-ignore
            blogs.blogs.map(blog =>
                <BlogsCard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={"22nd feb"}/>
            )}
        </div>
    </div>
}