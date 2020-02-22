import React, { Component } from 'react';

import PhotoModel from "../models/PhotoModel";
import Photo from "./PhotoTile";
import { Arrow } from "../SVGs/Arrow";

const mockPhotos: PhotoModel[] = [
    {
        caption: "Cool photo",
        url: "https://na.rdcpix.com/48063128/ab56a5a91431644dc57e031e9b665a54w-c166303xd-w640_h480_q80.jpg"
    },
    {
        caption: "Cool photo2",
        url: "https://photos.zillowstatic.com/p_e/ISjrowcjg8s9c61000000000.jpg"
    },
    {
        caption: "Cool photo2",
        url: "https://photos.zillowstatic.com/p_e/IS7msywuir0v650000000000.jpg"
    },
    {
        caption: "Cool photo2",
        url: "https://photos.zillowstatic.com/p_e/ISbxvvi2nhu9ab0000000000.jpg"
    },
    {
        caption: "Cool photo2sdfdsfdsfdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf",
        url: "https://photos.zillowstatic.com/p_e/IS3vslcryav6nq0000000000.jpg"
    },
    {
        caption: "Cool photo",
        url: "https://photos.zillowstatic.com/p_e/IS3vch6v8cwlb71000000000.jpg"
    },
    {
        caption: "Cool photo2",
        url: "https://photos.zillowstatic.com/p_e/ISzno67134ni2z0000000000.jpg"
    },
    {
        caption: "Cool photo2",
        url: "https://photos.zillowstatic.com/p_e/ISbp91m0ghkvbt1000000000.jpg"
    },
    {
        caption: "Cool photo2",
        url: "https://photos.zillowstatic.com/p_e/IS7av8px1t9bth0000000000.jpg"
    },
    {
        caption: "Cool photo2",
        url: "https://photos.zillowstatic.com/p_e/IS3fc6xqx27bd70000000000.jpg"
    }
]

interface PhotoGalleryProps {}

interface PhotoGalleryState {
    photoIndex: number;
    visible: boolean;
    clickDisabled: boolean;
}

const MAX_PHOTOS_SHOWN = 5;

export default class PhotoGallery extends Component <PhotoGalleryProps, PhotoGalleryState> {
    constructor(props: PhotoGalleryProps) {
        super(props);
        this.state = {
            photoIndex: 0,
            visible: true,
            clickDisabled: false
        }
    }

    handleIndexUpdate(isLeft: boolean = true) {
        if (isLeft && this.state.photoIndex > 0) {
            this.setState({
                visible: false,
                clickDisabled: true
            })
            setTimeout(() =>
                this.setState({
                    clickDisabled: false,
                    photoIndex: this.state.photoIndex - MAX_PHOTOS_SHOWN,
                    visible: true
                }), 200)
            
        } else if (!isLeft && this.state.photoIndex + MAX_PHOTOS_SHOWN < mockPhotos.length) {
            this.setState({
                visible: false,
                clickDisabled: true
            })
            setTimeout(() =>
                this.setState({
                    clickDisabled: false,
                    photoIndex: this.state.photoIndex + MAX_PHOTOS_SHOWN,
                    visible: true
                }), 200)
        }
    }

    render() {
        const photosInView = mockPhotos.slice(this.state.photoIndex, this.state.photoIndex + MAX_PHOTOS_SHOWN);
        const className = this.state.visible?'fadeIn':'fadeOut';
        const firstPhotoInView = this.state.photoIndex + 1;
        const lastPhotoInView = this.state.photoIndex + 5;

        return (
            <div className="photoGalleryWrapper">
                <div>Viewing Photos {firstPhotoInView} - {lastPhotoInView} of {mockPhotos.length}</div>
                <div className={`photoGallery ${className}`}>
                    <div onClick={() => !this.state.clickDisabled && this.handleIndexUpdate()}>
                        <Arrow/>
                    </div>
                    {photosInView.map((photo, ind) => <Photo key={ind} caption={photo.caption} url={photo.url}/>)}
                    <div onClick={() => !this.state.clickDisabled && this.handleIndexUpdate(false)}>
                        <Arrow isRight/>
                    </div>
                </div>
            </div>
        )
    }
}