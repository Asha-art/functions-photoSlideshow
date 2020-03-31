var slideshow = {

  // 1. An array called `photoList` that contains the names of the photos as strings
   photoList : ['photo1', 'photo2', 'photo3'] ,
  // An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed 
   currentPhotoIndex : 0,
  

  // console.log(indexof(currentPhotoIndex));
   	  nextPhoto : function(){
  			
   	 	  if(this.currentPhotoIndex < (this.photoList.length-1)){
   	 		       this.currentPhotoIndex++; 
         	 			console.log("next photo: "+this.photoList[this.currentPhotoIndex]);

         	 	}
       

     	 	else{
     	 		 console.log("End of Slideshow");  //  Otherwise, log "End of slideshow";
     	 		}
   	 	},
   	 	
   	 	
  	   prevPhoto : function(){

   	 		if(this.currentPhotoIndex >0){
	   	 	 
			         this.currentPhotoIndex--;  
               console.log("previous photo: "+this.photoList[this.currentPhotoIndex]);
           }

    	 	else{
   	 		console.log("Start of Slideshow");
   	 		}

   	 	},
   	 	
   	 
   		 getCurrentPhoto:function(){

   			console.log("current photo: "+ this.photoList[this.currentPhotoIndex]);
   	 }

}

console.log(slideshow.nextPhoto());
console.log(slideshow.currentPhotoIndex);
console.log(slideshow.nextPhoto());
console.log(slideshow.currentPhotoIndex);
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.currentPhotoIndex);
console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.getCurrentPhoto());