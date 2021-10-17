import React from "react";
import { isElementOfType } from "react-dom/test-utils";
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImpotant, onToggleLike}) => {
    const element = posts.map((item) => {
        if (item !== 'object' && isEmpty(item))
        return (
            <li key = {item.id} className="list-group-item">
                <PostListItem 
                    label={item.label} 
                    important={item.important}
                    like={item.like}
                    onDelete={() => onDelete(item.id)}
                    onToggleImpotant={() => onToggleImpotant(item.id)}
                    onToggleLike={() => onToggleLike(item.id)}
                />
                
            </li>
        )
    })

    function isEmpty(obj) {
        for (let key in obj) {
            return true
        }
        return false
    }

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}



export default PostList;