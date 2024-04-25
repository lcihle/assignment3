
function updateOneRobotById(updateThisRobot) {
    var CardMovie = document.getElementById("col");
    CardMovie.innerHTML = ``;

    fetch('http://localhost:8081/listRobots') 
   .then(response => {

       if (!response.ok) {

           throw new Error('Network response was not ok');

       }

       return response.json();

   })

   .then(myRobots => {

       loadMovies(myRobots);

   })

   .catch(error => {

       console.error('There was a problem with the fetch operation:', error);

   });

}


function loadMovies(myMovies) {

    var CardMovie = document.getElementById("col");

    var checkboxes = [];

    var cards = [];

 

    for (var i = 0; i<myMovies.length; i++){

 

        let title = myMovies[i].name;

        let year = myMovies[i].price;

        let url = myMovies[i].imageUrl;

        let checkbox = "checkbox" + i.toString();

        let card = "card" + i.toString();

 

       // create a new HTML div division

        let AddCardMovie = document.createElement("div");

 

       // add class = “col” to new division for Bootstrap

       AddCardMovie.classList.add("col");

 

       AddCardMovie.innerHTML = `

        <input type="checkbox" id=${checkbox} class="form-check-input" checked>

        <label for=${checkbox} class="form-check-label">Show Image ${i}</label>

        <div id=${card} class="card shadow-sm">

        <img src=${url} class="card-img-top" alt="..."></img>

        <div class="card-body">

        <p class="card-text"> <strong>${title}</strong>, ${year}</p>

        <div class="d-flex justify-content-between align-items-center">

        <div class="btn-group">

        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>

        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>

        </div>

        <small class="text-body-secondary">9 mins</small>

        </div>

        </div>

        </div>

        `;

        // append new division

        CardMovie.appendChild(AddCardMovie);

 

        let cbox = document.getElementById(checkbox);

        checkboxes.push(cbox);

        let ccard = document.getElementById(card);

        cards.push(ccard);

 

        // explore console

        console.log(checkbox);

        console.log(card);

   

 

    } // end of for

 

    console.log(checkboxes);

    console.log(cards);

 

    // Add event listeners to checkboxes to toggle card visibility

    checkboxes.forEach((checkboxParam, index) => {

    console.log(index);

    checkboxParam.addEventListener('change', () => {

    if (checkboxParam.checked) {

    cards[index].style.display = 'block'; // Show the card

    } else {

    cards[index].style.display = 'none'; // Hide the card

    }

    });

    });

}

 

function showOneRobot() {

 

    let id=document.getElementById("robotID").value;

    console.log(id);

    fetch(`http://localhost:8081/${id}`)

        .then(response => {

            if (!response.ok) {

                throw new Error('Network response was not ok');

            }

            return response.json();

        })

        .then(myFavoriteRobot => {

            loadOneRobot(myFavoriteRobot, id);

        })

        .catch(error => {

            console.error('There was a problem with the fetch operation:', error);

        });

 

    function loadOneRobot(myFavoriteRobot, id) {
        var CardMovie = document.getElementById("col");
        CardMovie.innerHTML = '';


        let title = myFavoriteRobot.name;

        let year = myFavoriteRobot.price;

        let url = myFavoriteRobot.imageUrl;

       // let checkbox = "checkbox" + i.toString();

      //  let card = "card" + i.toString();
    
        // Create a new HTML element to display the image of the fetched robot
       // let url = myFavoriteRobot.imageUrl;
        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col");
        AddCardMovie.innerHTML = `

        <input type="checkbox" id= class="form-check-input" checked>

        <label for= class="form-check-label">Show Image </label>

        <div id= class="card shadow-sm">

        <img src=${url} class="card-img-top" alt="..."></img>

        <div class="card-body">

        <p class="card-text"> <strong>${title}</strong>, ${year}</p>

        <div class="d-flex justify-content-between align-items-center">

        <div class="btn-group">

        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>

        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>

        </div>

        <small class="text-body-secondary">9 mins</small>

        </div>

        </div>

        </div>

        `;
        
        // Append the new HTML element to the container
        CardMovie.appendChild(AddCardMovie);
       // loadMovies(myMovies);
       fetch(`http://localhost:8081/${id}`) 
       .then(response => {

           if (!response.ok) {

               throw new Error('Network response was not ok');

           }

           return response.json();

       })

       .then(myRobots => {

           loadMovies(myRobots);

       })

       .catch(error => {

           console.error('There was a problem with the fetch operation:', error);

       });
    }

       

 

    }

 



 

function addRobot() {

    const id = "4";

    const name = "Robot Logan";

    const price = "195.50"; 

    const description = "logan ihle robo";

    const imageUrl = 'https://robohash.org/logan';

 

    const data = {

        id: id,

        name: name,

        price: price,

        description: description,

        imageUrl: imageUrl

    };

 

    fetch('http://localhost:8081/addRobot', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(data)

    })

    .then(response => response.json())

    .then(data => {
        addRobotMethod(data)
       // console.log(data);

        //showMessagePopup("Robot added successfully!");

    })

    .catch(error => {

        console.error('Error:', error);

        //showMessagePopup("Error adding robot. Please try again.");

    });

    function addRobotMethod(data) {
        var CardMovie = document.getElementById("col");
        CardMovie.innerHTML = ``;
       // loadMovies(myMovies);
       fetch('http://localhost:8081/listRobots') 
       .then(response => {

           if (!response.ok) {

               throw new Error('Network response was not ok');

           }

           return response.json();

       })

       .then(myRobots => {

           loadMovies(myRobots);

       })

       .catch(error => {

           console.error('There was a problem with the fetch operation:', error);

       });
    }
    

}

 

function deleteOneRobot() {

    // Fetch the value from the input field

    let id = document.getElementById("deleteRobotById").value;

    console.log(id);

 
// was http://localhost:8081/deleteRobot/${id}
    fetch(`http://localhost:8081/deleteRobot/${id}`, {

        method: 'DELETE',

        headers: { 'content-type': 'application/json' },

        body: JSON.stringify(

            { "id":id}

        )

    })

    .then(response => response.json())

    .then(deleteThisRobot => {deleteOneRobotById(deleteThisRobot)});

    function deleteOneRobotById(deleteThisRobot) {
        //CardMovie.innerHTML= ``;
        var CardMovie = document.getElementById("col");
        CardMovie.innerHTML = ``;
       // loadMovies(myMovies);
       fetch('http://localhost:8081/listRobots') 
       .then(response => {

           if (!response.ok) {

               throw new Error('Network response was not ok');

           }

           return response.json();

       })

       .then(myRobots => {

           loadMovies(myRobots);

       })

       .catch(error => {

           console.error('There was a problem with the fetch operation:', error);

       });
    }

}

 

function updateOneRobot() {

    // Fetch the value from the input field

    let id = document.getElementById("updateRobotById").value;

    console.log(id);

    fetch(`http://localhost:8081/updateRobot/${id}`, {

    method: 'PUT',

    headers: { 'content-type': 'application/json' },

    body: JSON.stringify(

    {

    "name": "Robot Abraham ALDACO-GASTELUM",

    "price": 100.90,

    "description": "I robot is one example of an image for my exercise",

    "imageUrl": 'https://robohash.org/Abraham'

    }

    )

    })

    .then(response => response.json())

    .then(updateThisRobot => {updateOneRobotById(updateThisRobot)});

    

}

   

 

document.addEventListener('DOMContentLoaded', function() {

    fetch('http://localhost:8081/listRobots') 
        .then(response => {

            if (!response.ok) {

                throw new Error('Network response was not ok');

            }

            return response.json();

        })

        .then(myRobots => {

            loadMovies(myRobots);

        })

        .catch(error => {

            console.error('There was a problem with the fetch operation:', error);

        });

});
