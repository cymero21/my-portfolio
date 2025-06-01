  //getting the url parameters (e.g ?id=1) from the project.html link
  /* 
  const params = new URLSearchParams(window.location.search);
  //getting the value of the "id" parameters from the url (e.g, id=1)
  const id = params.get('id'); // this id will be openPage(1), (2) ......

  // this is our data object )- it stores all the information for each project
  const data = {
   1: { 
    title: "food website",
    description: "this is food website",
    images: ["pizza.png", "our-menu.png", "contact-pizza.png"] //array foe the images
  },
  2: {
    title: "oceanWave blog",
    description: "this an ocean blog",
    images: ["ocean-1.jpeg", "ocean-2.jpeg"]
  },
  3: {
    title: "sofa website",
    description: "this is sofa website",
    images: ["sofa-1.jpeg", "sofa-2.jpeg"]
  },
};

//now we use the ID from the url to get the correct data from the object
const project = data[id];

//cehck if we found a matching project
if (project){
    //set the title text in the <h1 id="projectTitle"> element
    document.getElementById("projectTitle").textContent = project.title;
    //now the paragraph text
    document.getElementById("projectDescription").textContent = project.description;
    //get the container where we'll insert the images
    const grid = document.getElementById("imageGrid");

    //loop through each images in the array
    project.images.forEach(src => {
        //creating a new image tag
        const img = document.createElement("img");
        //set its source to the image file
        img.src = src;
        //add an alt attribute for accessibilty
        img.alt = "project image";
        // add the image to the container in the html
        grid.appendChild(img);
    });
} else {
    //if no matching project is found (e.g, ?id=99), show an error message
    document.getElementById("projectTitle").textContent = 'not found';
    document.getElementById("projectDescription").textContent = 'no project for this ID.';
};