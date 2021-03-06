
/* 1. Click right button
    2. image changes to second image
    3. click left button
    4. image goes back to the previous image
    5. if I click left button first, the image will go to the last image*/


    let i= 0; //start point
    let images = [
        "img/one.jpg",
        "img/two.jpg",
        "img/three.jpg"
    ]; 
    let img = document.getElementById('img');
    let forwardButton = document.getElementById('forward');
    let backButton = document.getElementById('back');

    //img.src = images[i]; //without this the img tag that is currently empty in the html will show (an empty box cause there's no image in it), but here I am declaring that at the get go, the image will be the first index image.

    //function to change image forward
    //when I click this button, the next image gets accessed. The prev image doesn't display.

    function nextImg(){
   
        img.src = images[i];//why do i need this if it is global already?

        if(i < images.length - 1){//ie. if i = 0 or 1 keep adding
            i++;
        } else if (i >= images.length -1){ // if i > 2 then go back to 0 the first image
            i = 0;
        } 

        
    }

    //function to change image backwards
    function previousImg(){

        img.src = images[i];

        //if image index is 1 or 2 
        if(i < images.length && i > 0){ //if i is less than 3 AND greater than 0 (if it is 1 0r 2)
            i--;
        } else {
            i = 2;
        }
    }
    


    //click button function
    forwardButton.addEventListener('click', nextImg);
    backButton.addEventListener('click', previousImg);


  