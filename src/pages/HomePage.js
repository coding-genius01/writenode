import { useEffect, useRef, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config"
import { PostCard } from "../components/PostCard"
import { useTitle } from "../hooks/useTitle";
import { SkeletonCard } from "../components/SkeletonCard";

export const HomePage = () => {
  const [posts, setPosts] = useState(new Array(3).fill(false));

  const postsRef = useRef(collection(db, "posts"));

  const [toggle, setToggle] = useState(false);
  useTitle("Home");

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPosts(data.docs.map((document) => ({...document.data(), id: document.id})));
    }

    getPosts();
    console.log("---");
  }, [toggle, postsRef])

  return (
    <section>
      { posts.map((post, index) => (
        post ? (<PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />) : (<SkeletonCard key={index} />)
      )) }
    </section>
  )
}
