prompts=[{

}]

choices = [{
    name:"cow",
    image: "https://loremflickr.com/180/100",
    sound: "",
    
},{name:"horse",
image: "https://loremflickr.com/180/100",
sound: "",
},{name:"cat",
image: "https://loremflickr.com/180/100",
sound: "",
},{name:"dog",
image: "https://loremflickr.com/180/100",
sound: "",
}]

const loadObjects = (choices) => { 
    for (const key in choices) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            
        }
    }
    // <div class="card object-card">
    //                     <img class="card-img-top" src="" alt="">
    //                 </div>
 };

// on click
$('.object-card').click(function (e) { 
    e.preventDefault();
    console.log('clicked:', this);
});

// check click