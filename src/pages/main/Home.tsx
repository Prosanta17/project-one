import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import Posts from "./Posts";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}
const Home: React.FC = () => {
  const [postList, setPostList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "post");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mx-auto p-5 mt-5">
      {postList?.map((post) => {
        return <Posts post={post} />;
      })}
    </div>
  );
};

export default Home;
