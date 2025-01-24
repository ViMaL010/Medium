import { Appbar } from "./Appbar"

export const Blogskeleton = () => {
    return <div>
            <Appbar/>
            <div role="status" className=" animate-pulse">
            <div className="flex justify-center">       
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12"> 
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold pt-4">
                            <div className="h-16 w-[200px] bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>    
                        </div>
                        <div className="text-slate-500 text-sm font-extralight pt-2">

                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>  
                        </div>
                        <div className="pt-4">
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> 
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>  
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>  
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>  
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>  
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>  
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>  
                        </div>
                    </div>

                    <div className="col-span-4 pt-4 ml-12">
                        <div className="text-lg text-slate-600">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> 
                        </div>
                        <div className="flex">
                            <div className="pt-2 flex flex-col justify-center">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold pt-2 px-4">
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> 
                                </div>
                                <div className="pt-2 text-slate-500 px-4">
                                    
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>  
                                </div>
                            </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
    </div>
}



