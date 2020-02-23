import React, { Component } from 'react';

import PhotoModel from "../models/PhotoModel";
import Photo from "./PhotoTile";
import { Arrow } from "../SVGs/Arrow";

interface PhotoGalleryProps {
    photos: PhotoModel[];
}

interface PhotoGalleryState {
    photoIndex: number;
    visible: boolean;
    clickDisabled: boolean;
    selectedIndex: number;
}

// These can be adjusted to whatever we need
const MAX_PHOTOS_SHOWN = 5;
const PHOTO_DELAY_MS = 200;

export default class PhotoGallery extends Component <PhotoGalleryProps, PhotoGalleryState> {
    constructor(props: PhotoGalleryProps) {
        super(props);
        this.state = {
            photoIndex: 0,
            visible: true,
            clickDisabled: false,
            selectedIndex: 0
        }
    }

    handleIndexUpdate(isLeft: boolean = true) {
        if (isLeft && this.state.photoIndex > 0) {
            // Need to disable click here to make sure
            // user can't click again before we update the photos due to the
            // 200 ms delay
            this.setState({
                visible: false,
                clickDisabled: true
            })
            setTimeout(() =>
                this.setState({
                    clickDisabled: false,
                    photoIndex: this.state.photoIndex - MAX_PHOTOS_SHOWN,
                    visible: true
                }), PHOTO_DELAY_MS)
            
        } else if (!isLeft && this.state.photoIndex + MAX_PHOTOS_SHOWN < this.props.photos.length) {
            this.setState({
                visible: false,
                clickDisabled: true
            })
            setTimeout(() =>
                this.setState({
                    clickDisabled: false,
                    photoIndex: this.state.photoIndex + MAX_PHOTOS_SHOWN,
                    visible: true
                }), PHOTO_DELAY_MS)
        }
    }

    handlePhotoSelection(index: number) {
        this.setState({
            selectedIndex: index
        });
    }

    render() {
        const photosInView = this.props.photos.slice(this.state.photoIndex, this.state.photoIndex + MAX_PHOTOS_SHOWN);
        const className = this.state.visible?'fadeIn':'fadeOut';
        const firstPhotoInView = this.state.photoIndex + 1;
        const lastPhotoInView = this.state.photoIndex + 5;
        const selectedPhoto = this.props.photos[this.state.selectedIndex];

        return (
            <div className="photoGalleryWrapper">
                <div>Viewing Photos {firstPhotoInView} - {lastPhotoInView} of {this.props.photos.length}</div>
                <div className={`photoGallery ${className}`}>
                    <div onClick={() => !this.state.clickDisabled && this.handleIndexUpdate()}>
                        <Arrow/>
                    </div>
                    {photosInView.map((photo, ind) => {
                        return (
                            <div className="photoTileWrapper" onClick={() => this.handlePhotoSelection(ind)}>
                                <Photo key={ind} caption={photo.caption} url={photo.url}/>
                            </div>
                        )
                    })}
                    <div onClick={() => !this.state.clickDisabled && this.handleIndexUpdate(false)}>
                        <Arrow isRight/>
                    </div>
                </div>
                <div className="selectedPhoto">
                    <Photo 
                        caption={selectedPhoto.caption} 
                        targetHeight={450}
                        targetWidth={600}
                        url={selectedPhoto.url} />
                </div>
            </div>
        )
    }
}