import React from 'react';
import s from './Post.module.css';

type PostPropsType ={
    message?: string
    likesCount?: number
}
const Post = (props: PostPropsType) => {


    return (
        <div className={s.item}>
            <img
                src="https://mcswebsites.blob.core.windows.net/1013/Event_7891/gallery/avatar_the_way_of_water_ver16.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>

    )
}

export default Post;