import React, { useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchInput from "../SearchInput/SearchInput";
import ShowSlides from "../ShowSlides/ShowSlides";
import SliderSearchSection from "../SliderSearchSection/SliderSearchSection";

const Home = () => {
  const [query, setQuery] = useState("");
  const [datas, setDatas] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [showSlide, setShowSlide] = useState("");
  const [display, setDisplay] = useState({
    showImageGallery: true,
    showSliderSearch: false,
    showSlider: false,
  });
  const handleBlur = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };
  const imageSearchHandleClick = () => {
    setShowSlide("")
    setSliderImages([]);
    clearInterval(timer)
    setDisplay({
      showImageGallery: true,
      showSliderSearch: true,
      showSlider: false,
    });

    const KEY = "15674931-a9d714b6e9d654524df198e00&q";
    const url = `https://pixabay.com/api/?key=${KEY}=${query}&image_type=photo&pretty=true`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDatas(data.hits));
  };
  const selectItem = (e, image) => {

    const element = e.target;
    element.classList.add("added");
    const imageIndex = sliderImages.indexOf(image);
    if (imageIndex === -1) {
      let newSliderImages = [...sliderImages, image];
      setSliderImages(newSliderImages);
    }
  };
  let slideIndex = 0;
  let timer = "";
  const handleSliderBtn = () => {
    if (sliderImages.length > 0) {
      setDisplay({
        showImageGallery: false,
        showSliderSearch: false,
        showSlider: true,
      });
    }
    changeSlide(0);
    timer = setInterval(() => {
      slideIndex++;
      changeSlide(slideIndex);
    }, 2000);
  };
  const changeSlide = (index) => {
    if (index >= sliderImages.length) {
      index = 0;
      slideIndex = 0;
    }
    const displaySlide = sliderImages.filter((slide) => {
      return slide === sliderImages[index];
    });
    setShowSlide(displaySlide);
  };
  return (
    <div className="container">
      <SearchInput
        imageSearchHandleClick={imageSearchHandleClick}
        handleBlur={handleBlur}
      ></SearchInput>
      {display.showSliderSearch && (
        <SliderSearchSection
          handleSliderBtn={handleSliderBtn}
        ></SliderSearchSection>
      )}

      {display.showImageGallery && (
        <ImageGallery images={datas} selectItem={selectItem}></ImageGallery>
      )}
      
      {display.showSlider && <ShowSlides sliderImages={showSlide}></ShowSlides>}
    </div>
  );
};

export default Home;
