import React from 'react';

const ShowSlides = ({sliderImages}) => {
    return (
        <div >
            <img class="w-100" src={sliderImages} alt="Img"/>
        </div>
    );
};

export default ShowSlides;