import React from "react";

const SearchInput = ({imageSearchHandleClick, handleBlur}) => {
  return (
    <div>
      <h4 class="mt-2 text-center">Search Image for create slider</h4>
      <div class="form-inline mt-3 d-flex justify-content-center">
        <div class="input-group col-md-6 mb-2">
          <input
          onBlur= {handleBlur}
            type="text"
            class="form-control"
            id="search"
            placeholder="nature"
          />
        </div>
        <button onClick={imageSearchHandleClick} type="button" id="search-btn" class="btn btn-primary mb-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
