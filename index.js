const date = document.getElementById("date");


function displayTime(){
    const today = new Date();
    const currentDateTime = today.toLocaleString();

    date.textContent = currentDateTime;

}
displayTime();
setInterval(displayTime, 1000); //This will run the function every 1000 ms 

//To make the page switch

const nextUrl = "Browse_Available_Pets_2.html";
const previousUrl = "Browse_Available_Pets.html";
const goNext = document.getElementById("next");
const goBack = document.getElementById("previous");



goNext.onclick = function(){
    window.location.href = nextUrl;
   
   
}
goBack.onclick = function(){
    window.location.href = previousUrl;
   
   
}

//Insure that the form in the find a dog/cat is filled

const Cat1 = document.getelementById("Cat1");
const Dog1 = document.getelementById("Dog1");
const Breed1 = document.getelementById("Breed1");
const Breed2 = document.getelementById("Breed2");
const rangevalue = document.getelementById("rangevalue");
const Cat2 = document.getelementById("Cat2");
const Dog2 = document.getelementById("Dog2");
const Doesnotmatter = document.getelementById("Doesnotmatter");
const Cat3 = document.getelementById("Cat3");
const Dog3 = document.getelementById("Dog3");
const Children = document.getelementById("Children");

const submit = document.getelementById("submit");


submit.onclick = function(){
    if(!Cat1.checked){
        console.log("hello")
    }

}






