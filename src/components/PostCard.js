import { auth, db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export const PostCard = ({post, toggle, setToggle}) => {
  const { id, title, description, author } = post;
  let isAuth = JSON.parse(localStorage.getItem("isAuth"));

  async function handleDelete() {
    const document = doc(db, "posts", id);
    await deleteDoc(document); 
    setToggle(!toggle);
  }


  return (        
    <div className="block mb-3 max-w-7xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-800">
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ title }</h5>
      <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">{ description }</p>
      <div className="flex justify-between">
        <span className="text-sm font-medium dark:text-gray-200 bg-sky-850 py-1 px-3 rounded-md">{ author.name }</span>
        { isAuth && (author.id === auth.currentUser.uid) && (<span onClick={handleDelete} className="text-red-600 cursor-pointer"><i className="bi bi-trash3"></i></span>) }
      </div>
    </div>
  )
}
