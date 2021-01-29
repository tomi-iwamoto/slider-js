
/* 1. Click right button
    2. image changes to second image
    3. click left button
    4. image goes back to the previous image
    5. if I click left button first, the image will go to the last image

    elements I need to get at: 
    the two buttons 
    the image element */

    let i = 0; //start point
    let images = []; //empty array
    let img = document.getElementById('img');
    let forwardButton = document.getElementById('forward');
    let backButton = document.getElementById('back');


    //array of images
    images[0] = "img/one.jpg";
    images[1] = "img/two.jpg";
    images[2] = "img/three.jpg";

    img.src = images[i]; //without this the img tag that is currently empty in the html will show (an empty box cause there's no image in it), but here I am declaring that at the get go, the image will be the first index image.

    //function to change image forward
    function nextImg(){
        img.src = images[i];
        
        // if(i < images.length - 1){
        //     i++;
        // } else {
        //     i = 0;
        // }


        if(i < images.length - 1){//ie. if i = 0 or 1 keep adding
            i++;
        } else {
            i = 0;
        }
    }

    //function to change image backwards
    function previousImg(){

        img.src = images[i];

        if(i < images.length && i > 0){
            i--;
        } else {
            i = 2;
        }
    }
    
    //click button function

    forwardButton.addEventListener('click', nextImg);
    backButton.addEventListener('click', previousImg);


  