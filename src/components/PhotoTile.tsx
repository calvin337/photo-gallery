import React from 'react';

import PhotoModel from "../models/PhotoModel";

export default function Photo(photoModel: PhotoModel) {
    return (
        <div className="photoTile">
            <img height={300} width={400}src={photoModel.url} />
            <div className="textOverlay">
                {photoModel.caption}
            </div>
        </div>
    )
}