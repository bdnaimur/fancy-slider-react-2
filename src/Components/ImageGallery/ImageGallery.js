import React from 'react';
import ShowImages from './ShowImages/ShowImages';

const ImageGallery = ({images, selectItem}) => {
    return (
        <div className="row">
            {images.map(image => <ShowImages image = {image} selectItem = {selectItem}></ShowImages>)}
        </div>
    );
};

export default ImageGallery;