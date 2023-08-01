// function that validates a email - PLEASE DONT CHANGE
function validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

//Grab the form
document.getElementById("email-form").addEventListener("submit", (event) =>{
    
    const pTag = document.getElementById("message");
    // A method to prevent the form from submitting
    event.preventDefault();
    const email = document.getElementById("email-input").value 
    if(validateEmail(email)){
        pTag.textContent = `Thank you for your email: ${email}`;
        console.log(`Thank you for your email: ${email}`);
    } else{
        pTag.textContent = "Please enter a valid email";
        console.log("Please enter a valid email");
    }
})