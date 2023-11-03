import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import App from "./../../App";
import state from "./../../redux/state";
import { RootStateType } from "./../../redux/state";

type PostsType = {
  id: number
  message: string
  likesCount: number
}

type ProfilePagesType = {
  posts: PostsType[]    
}

type ProfilePropsType={
  state: ProfilePagesType
}

const Profile:React.FC<ProfilePropsType> = (props) => {
//  2

  /*  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 23 },
  ] */


  return (
    <div>
      <ProfileInfo />    
      <MyPosts posts={props.state.posts} />
      {/* <MyPosts posts={props.posts} /> */}

      {/* <MyPosts posts={posts} /> */}
      Main content
    </div>
  );
};

export default Profile;
