import { useNavigate } from "react-router-dom";

export const Signout = () => { 
    const navigate = useNavigate();

    const handleSignout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate("/signin");
    }
    return <div>
    <button
        type="button"
        onClick={handleSignout}
        className="text-white mr-3 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
    >
        Sign Out
    </button>

    </div>
}