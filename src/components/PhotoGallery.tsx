import React from 'react';

import PhotoModel from "../models/PhotoModel";
import Photo from "./PhotoTile";

const mockPhotos: PhotoModel[] = [
    {
        caption: "Cool photo",
        url: "https://na.rdcpix.com/48063128/ab56a5a91431644dc57e031e9b665a54w-c166303xd-w640_h480_q80.jpg"
    },
    {
        caption: "Cool photo2",
        url: "https://lh3.googleusercontent.com/proxy/WmeOrXpiXnEGKMVELKxWvXEDfIhtklfr1dq6NL-eHWEsfo4cnMGd7LRVNY3oe2AjoBich_K2ubGRu0TEm8_0mQlrIoB4k6Lw8ulUN0WeEozQhdtJsZE"
    },
    {
        caption: "Cool photo2",
        url: "https://lh3.googleusercontent.com/proxy/WmeOrXpiXnEGKMVELKxWvXEDfIhtklfr1dq6NL-eHWEsfo4cnMGd7LRVNY3oe2AjoBich_K2ubGRu0TEm8_0mQlrIoB4k6Lw8ulUN0WeEozQhdtJsZE"
    }
]
export default function PhotoGallery() {
    return (
        <div className="photoGallery">
            {mockPhotos.map(photo => <Photo caption={photo.caption} url={photo.url}/>)}
        </div>
    )
}