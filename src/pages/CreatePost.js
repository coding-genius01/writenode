import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config"
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const CreatePost = () => {
    const postRef = collection(db, "posts");
    const navigate = useNavigate();
    useTitle("Create Post");

  async function handleCreatePost(event) {
    event.preventDefault();
    const document = {
        title: event.target.title.value,  
        description: event.target.description.value,
        author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid
        }
    }
    await addDoc(postRef, document);
    navigate("/");
  }
  return (
      <section className="bg-white dark:bg-gray-900 rounded-xl">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Add New Post</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Let your creativity flow! Express your ideas and inspire your audience. Share your unique perspective and connect with your community!</p>
            <form onSubmit={handleCreatePost} className="space-y-8">
                <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                    <input type="text" id="title" name="title" maxLength="50" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your title" required autoFocus />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <textarea name="description" id="description" maxLength={600} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start writing your thoughts here..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Create</button>
            </form>
        </div>
    </section>
  )
}
