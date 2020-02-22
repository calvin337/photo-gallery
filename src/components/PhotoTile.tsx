import React from 'react';

import PhotoModel from "../models/PhotoModel";

const PHOTO_HEIGHT = 150;
const PHOTO_WIDTH = 200;

export default function Photo(photoModel: PhotoModel) {
    return (
        <div className="photoTile">
            <img height={PHOTO_HEIGHT} width={PHOTO_WIDTH}src={photoModel.url} />
            <div className="textOverlay">
                {photoModel.caption}
            </div>
        </div>
    )
}