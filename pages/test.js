const basicToggle = document.querySelector(".basic-channels-toggle");

basicToggle.addEventListener("click", function(){
    
    const basicPackageImages = document.querySelector(".basic-channels-gallery");
    let displayValue = basicPackageImages.style.display;
    if (displayValue == "none") {
        basicPackageImages.style.display = "grid";
    } else {
        basicPackageImages.style.display = "none";
    }
});