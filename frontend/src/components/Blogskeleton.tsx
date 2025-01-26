import { Appbar } from "./Appbar"

export const Blogskeleton = () => {
    return <div>
            <Appbar/>
            <div className="flex justify-center">
                <div className="">
                    <div role="status" className="w-[480px] animate-pulse lg:w-[750px]">
                        <div>
                                    <div className="p-4 border-b-[1px] border-slate-200 pb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex justify-center flex-col text-sm w-[400px] lg:min-w-[700px]">
                                                <div className="h-6 bg-gray-200 rounded-full mb-4"></div>
                                                <div className="h-6 bg-gray-200 rounded-full mb-4"></div>
                                                <div className="h-6 bg-gray-200 rounded-full mb-4"></div>
                                            </div>
                                            

                                            <div className="font-thin text-sm">
                                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                                            </div>
                                            <div className="font-thin text-slate-500 text-sm">
                                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>          
                                            </div>
                                        </div>
                                        <div className="text-xl font-semibold pt-2">
                                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>          
                                        </div>
                                        <div className="font-thin text-md ">
                                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>          
                                        </div>
                                        <div className="text-slate-400 text-sm font-extralight pt-4">
                                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>          
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
    </div>
    </div>
}



