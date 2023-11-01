import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType={
  
}

const Profile:React.FC<any> = (props) => {
//  2

  /*  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 23 },
  ] */


  return (
    <div>
      <ProfileInfo />    
      <MyPosts posts={props.posts} />
      {/* <MyPosts posts={posts} /> */}
      Main content
    </div>
  );
};

export default Profile;
