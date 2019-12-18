const basicGalleryToggle = document.querySelector(".basic-channels-toggle");
const extendedGalleryToggle = document.querySelector(".extended-channels-toggle");
const fullGalleryToggle = document.querySelector(".full-channels-toggle");

const basicGallery = document.querySelector(".basic-channels-gallery");
const extendedGallery = document.querySelector(".extended-channels-gallery");
const fullGallery = document.querySelector(".all-channels-gallery");


const hideAllGalleries = function(){
    basicGallery.style.display = "none";
    extendedGallery.style.display = "none";
    fullGallery.style.display = "none";
};

const addShowHideListener = function(toggleButton, gallery){
    toggleButton.addEventListener("click", function(){
        hideAllGalleries();
        let displayValue = gallery.style.display;
        
        if (displayValue == "none") {
            gallery.style.display = "grid";
        } else {
            gallery.style.display = "none";
        }
    });
};

addShowHideListener(basicGalleryToggle, basicGallery);
addShowHideListener(extendedGalleryToggle, extendedGallery);
addShowHideListener(fullGalleryToggle, fullGallery);


