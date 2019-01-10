import React from 'react'

const instagramPost = (props) =>{
    return (
        <div className="instagram-post">
            <img width="100%" src={props.url}/>
            <p>
                {props.caption}
            </p>
        </div>
    )
}

export default instagramPost;