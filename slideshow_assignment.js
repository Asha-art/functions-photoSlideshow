
var slideshow = {

  // 1. An array called `photoList` that contains the names of the photos as strings
   photoList : ['photo1', 'photo2', 'photo3'] ,
  // An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed 
   currentPhotoIndex : 0,
  



  // console.log(indexof(currentPhotoIndex));
      nextPhoto : function(){
        
        if(this.currentPhotoIndex < this.photoList.length){
               
                console.log("next photo: "+this.photoList[this.currentPhotoIndex]);
                this.currentPhotoIndex++; 
            }     

        else{
           // console.log("End of Slideshow");  //  Otherwise, log "End of slideshow";
           this.pause();
          }

      },
      
      
       prevPhoto : function(){

        if(this.currentPhotoIndex >0){
         
               this.currentPhotoIndex--;  
               console.log(this.photoList[this.currentPhotoIndex]);
           }
        else{
        console.log("Start of Slideshow");
        }

      },
      

   getCurrentPhoto:function(){

        return this.photoList[this.currentPhotoIndex];
     },
     
      
// js functions3 lab below
      playInterval : " ",

        play : function(){

            this.playInterval = setInterval(function(){slideshow.nextPhoto()},2000);

        },


       pause : function(){
           clearInterval(this.playInterval);


        }


}

// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.getCurrentPhoto();
slideshow.play();






