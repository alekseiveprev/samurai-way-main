import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {

    return (
        <div >
            <div className={s.imgSize}>
                <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            < MyPosts />


            Main content
        </div>

    )
}

export default Profile;