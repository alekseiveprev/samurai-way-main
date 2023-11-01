import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


type PostItemPropsType ={
  message?: string
  likesCount?: number
}

type PostPropsType ={
  posts: Array<PostItemPropsType>
  
}

const MyPosts:React.FC<PostPropsType> = (props) => {
//1
 /*  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 23 },
  ] */

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea> </textarea>
        </div>
        <div>
          <button> Add post</button>
          <button> Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
        {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
 */}
      </div>
    </div>
  );
};

export default MyPosts;
