import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBlogs } from "../hooks";

export const DeletePost = () => {
  const { id: paramId } = useParams(); // Extracting id from route params
  const [id, setId] = useState<string | null>(paramId || null);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (id) {
      try {
        const response = await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        });

        console.log("Deleted post ID:", response.data.id);

        // Navigate to another page after deletion
        navigate("/blogs", { replace: true });
        useBlogs();
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div className="">
      {/* You can also use id to show some information about the post here */}
      <button
        type="button"
        onClick={handleDelete} // Trigger deletion on button click
        className="text-white mr-3 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Delete
      </button>
    </div>
  );
};
