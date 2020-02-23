import React from 'react';

import PhotoModel from "../models/PhotoModel";

const PHOTO_HEIGHT = 150;
const PHOTO_WIDTH = 200;

export default function Photo(photoModel: PhotoModel) {
    const height = photoModel.targetHeight ? photoModel.targetHeight : PHOTO_HEIGHT;
    const width = photoModel.targetWidth ? photoModel.targetWidth : PHOTO_WIDTH;
    
    return (
        <div className="photoTile">
            <img height={height} width={width}src={photoModel.url} />
            <div className="textOverlay">
                {photoModel.caption}
            </div>
        </div>
    )
}