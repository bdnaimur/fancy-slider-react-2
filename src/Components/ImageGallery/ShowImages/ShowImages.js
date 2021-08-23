import React from 'react';

const ShowImages = ({image,selectItem}) => {
    return (
        <div className="col-lg-3 col-md-4 col-xs-6 img-item mb-2">
            <img class="img-fluid img-thumbnail" onClick={(event)=>{selectItem(event,image.webformatURL)}} src={image.webformatURL} alt={image.tags}/>
        </div>
    );
};

export default ShowImages;