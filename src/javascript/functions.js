/* Carrusel */
var carousel = new Carousel({
    panels: document.getElementsByClassName('slides'),
    thumbnails: document.getElementsByClassName('bullet'),
    panelActiveClass: 'slides-active'
});

carousel.goTo(0); // go to second carousel panel


/*  API Rest axios */
var postUrl = 'https://jsonplaceholder.typicode.com/posts/';
var userUrl = 'https://jsonplaceholder.typicode.com/users/';
var firstTestimonial = document.getElementById('first-testimonial');
var firstUser = document.getElementById('first-user');
var secondTestimonial = document.getElementById('second-testimonial');
var secondUser = document.getElementById('second-user');
var thirdTestimonial = document.getElementById('third-testimonial');
var thirdUser = document.getElementById('third-user');
var fourTestimonial = document.getElementById('four-testimonial');
var fourUser = document.getElementById('four-user');

function getFirstTestimonials(){
   id = 1;
   axios.get(postUrl + id, {
        responseType: 'json'
   })

    .then(function (response) {
        if(response.status==200) {
            console.log(response.data);
            firstTestimonial.innerHTML = response.data.body;
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    }) 
    .then(function () {
    
    });
}

function getFirstUser(){
    id = 1;
    axios.get(userUrl + id, {
        responseType: 'json'
    })

    .then(function (response) {
        if(response.status==200) {
            console.log(response.data);
            firstUser.innerHTML = response.data.name;
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    }) 
    .then(function () {
    
    });
}
function getSecondTestimonials(){
    id = 2;
    axios.get(postUrl + id, {
         responseType: 'json'
    })
 
     .then(function (response) {
         if(response.status==200) {
             console.log(response.data);
             secondTestimonial.innerHTML = response.data.body;
         }
         console.log(response);
     })
     .catch(function (error) {
         console.log(error);
     }) 
     .then(function () {
     
     });
}

function getSecondUser(){
    id = 2;
    axios.get(userUrl + id, {
        responseType: 'json'
    })

    .then(function (response) {
        if(response.status==200) {
            console.log(response.data);
            secondUser.innerHTML = response.data.name;
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    }) 
    .then(function () {
    
    });
}

function getThirdTestimonials(){
id = 3;
axios.get(postUrl + id, {
        responseType: 'json'
})

    .then(function (response) {
        if(response.status==200) {
            console.log(response.data);
            thirdTestimonial.innerHTML = response.data.body;
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    }) 
    .then(function () {
    
    });
}

function getThirdUser(){
    id = 3;
    axios.get(userUrl + id, {
        responseType: 'json'
    })

    .then(function (response) {
        if(response.status==200) {
            console.log(response.data);
            thirdUser.innerHTML = response.data.name;
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    }) 
    .then(function () {
    
    });
}

function getFourTestimonials(){
id = 4;
axios.get(postUrl + id, {
        responseType: 'json'
})

    .then(function (response) {
        if(response.status==200) {
            console.log(response.data);
            fourTestimonial.innerHTML = response.data.body;
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    }) 
    .then(function () {
    
    });
}

function getFourUser(){
    id = 4;
    axios.get(userUrl + id, {
        responseType: 'json'
    })

    .then(function (response) {
        if(response.status==200) {
            console.log(response.data);
            fourUser.innerHTML = response.data.name;
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    }) 
    .then(function () {
    
    });
}

// createList();
getFirstTestimonials();
getFirstUser();
getSecondTestimonials();
getSecondUser();
getThirdTestimonials();
getThirdUser();
getFourTestimonials();
getFourUser();

function navmobile(){
    var showMenu = document.querySelector('.navbar');
    showMenu.style.display = "block";

    var addHeader = document.querySelector('.header');
    addHeader.classList.add('hide-logo');
    addHeader.classList.remove('show-logo');
    
}
function hidemenu(){
    var hideMenu = document.querySelector('.navbar');
    hideMenu.style.display = "none";

    var removeHeader = document.querySelector('.header');
    removeHeader.classList.add('show-logo');
    removeHeader.className.remove('hide-logo');
}