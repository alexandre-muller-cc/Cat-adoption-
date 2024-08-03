const date = document.getElementById("date");


function displayTime(){
    const today = new Date();
    const currentDateTime = today.toLocaleString();

    date.textContent = currentDateTime;

}


displayTime();
setInterval(displayTime, 1000);

//This will run the function every 1000 ms 

//For Browse pet on multiple pages 

if (document.getElementById("centralimg")){

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


}

//For the Find a Dog pet form 

if (document.getElementById("findDogForm"))
    {
    const Cat1 = document.getElementById("Cat1");
    const Dog1 = document.getElementById("Dog1");
    const Breed1 = document.getElementById("Breed1");
    const Breed2 = document.getElementById("Breed2");
    const rangevalue = document.getElementById("rangevalue");
    const Female = document.getElementById("Female");
    const Male = document.getElementById("Male");
    const doesnotmatter = document.getElementById("Doesnotmatter");
    const Cat3 = document.getElementById("Cat3");
    const Dog3 = document.getElementById("Dog3");
    const Children = document.getElementById("Children");

    const submit = document.getElementById("submit");


    submit.onclick = function(){
        if(!Cat1.checked && !Dog1.checked)
            {
            window.alert("Please enter all the fields values");
            }
        else if (Breed1.value.length == 0 && !Breed2.checked ){
            window.alert("Please enter all the fields values");
        }
        else if (rangevalue.value==0){
            window.alert("Please enter all the fields values");
        }
        else if (!Female.checked && !Male.checked && !doesnotmatter.checked ){
            window.alert("Please enter all the fields values");
        }
        
    }

}

if (document.getElementById("haveaPetToGiveAway"))
    {

        const Cat1 = document.getElementById("Cat1");
        const Dog1 = document.getElementById("Dog1");

        const Breed = document.getElementById("Breed");
        const rangevalue = document.getElementById("rangevalue");
        const Female = document.getElementById("Female");
        const Male = document.getElementById("Male");


        const Cat2 = document.getElementById("Cat2");
        const Dog2 = document.getElementById("Dog2");

        const Baby = document.getElementById("Baby");
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");

        const email = document.getElementById("email");
        const submit = document.getElementById("submit");
        const reset = document.getElementById("reset");


        submit.onclick = function(){
            if(!Cat1.checked && !Dog1.checked)
                {
                window.alert("Please enter all the fields values");
                }
            else if (Breed.length == 0){
                window.alert("Please enter all the fields values");
            }
            else if (rangevalue.value==0){
                window.alert("Please enter all the fields values");
            
            }

            else if (firstName.value.length ==0 || lastName.value.length ==0){
                window.alert("Please enter a first name and last name");
            
            }
            else if (!email.value.includes("@")){
                window.alert("Please enter a valid email address");

            }
            
        }
       

    }












