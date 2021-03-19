let imageIndex = 0;
const IMAGE_AMOUNT = 6; 
let slideShowArray = []; 

// Array of image references
for(let i = 0; i < IMAGE_AMOUNT; i++){
    slideShowArray[i] = '<img src="images/' + (i + 1) + '.jpg">'
}


// Function to change the images in the slideshow
function swapImages(){
    if(imageIndex < 0){
        imageIndex = (slideShowArray.length - 1);
    }else if(imageIndex > (slideShowArray.length - 1)){
        imageIndex = 0;
    }
    document.getElementById('output').innerHTML = slideShowArray[imageIndex];
}


$(document).ready( function() {
    swapImages(0);
    $('.prev').click(function(){
        $('#output').effect('slide', {direction:'left'});
        imageIndex--;
        swapImages();
    });
    $('.next').click(function(){
        $('#output').effect('slide', {direction:'right'});
        imageIndex++;
        swapImages()
    });
})
