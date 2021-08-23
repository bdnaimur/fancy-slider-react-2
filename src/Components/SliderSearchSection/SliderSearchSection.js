import React from "react";

const SliderSearchSection = ({handleSliderBtn}) => {
  return (
    <div class="d-flex justify-content-around align-items-center mt-3 gallery-header mb-2">
      <h3 class="head-title text-center">Select image for create slider</h3>
      <div class="input-group col-md-3 mb-2 mb-md-0">
        <input
          class="form-control"
          id="doration"
          placeholder="slider change duration"
        />
      </div>
      <button onClick={handleSliderBtn} id="create-slider" class="btn btn-primary px-5">
        Create slider
      </button>
    </div>
  );
};

export default SliderSearchSection;
