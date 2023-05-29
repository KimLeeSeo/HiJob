import React from "react";
import { useState,useRef } from "react";
import profile from "../APP/profile.png";
import "./Picture.css"

function Picture(){
    const [imgUrl,setImgUrl] = useState(null);
    const imgRef = useRef();

    const onChangeImage = () =>{
        const reader = new FileReader();
        const file = imgRef.current.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImgUrl(reader.result);
        };
    };

    return(
        <React.Fragment >
            <div id="image_box">
                <img src ={imgUrl ? imgUrl : profile} id="image"></img>
                <input accept="image/*" name="file" type = "file" ref={imgRef} onChange={onChangeImage} id="image_btn"></input>
            </div>
        </React.Fragment>
    );
}

export default Picture;