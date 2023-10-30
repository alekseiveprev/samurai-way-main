import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />    
      <MyPosts />
      Main content
    </div>
  );
};

export default Profile;
