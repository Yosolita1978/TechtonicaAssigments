//making the input required
let userInput = document.getElementById('username')
userInput.setAttribute("required", "required");

document.getElementById('submit').addEventListener("click", (event) =>{
    event.preventDefault();
  
    //Grab the inputs 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
  
     
    //Validation
    //Validate a name - is not an empty string
    const firstErrorDiv = document.getElementsByClassName("error")[0];
    if(username === "" || email === ""){
        firstErrorDiv.innerText = "Please enter both fields"
    } else{
        firstErrorDiv.innerText = ""
    }
    
    //Email validation - validate that the pattern in the email is correct
    const secErrorDiv = document.getElementsByClassName("error")[1];
    const correctPattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!correctPattern.test(email)){
        secErrorDiv.innerText = "Please enter a valid email"
    } else{
        secErrorDiv.innerText = ""
    }

    //console.log
    console.log(username);
    console.log(email);

    //Show thank you note to the user
    const thirdErrorDiv = document.getElementsByClassName("error")[2];
    if(username && email){
        thirdErrorDiv.innerText = "Form submit successfully! Thank you for your data"
        thirdErrorDiv.style.color = "coral" 
    }
    
  })