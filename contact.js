function sendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sharjeel.3119030.co@mhssce.ac.in",
        Password : "18CC90A12B38431287229C772F161767333D",
        To : 'alisharjil133@gmail.com',
        From : "sharjeel.3119030.co@mhssce.ac.in",
        Subject : "New Contact Form Enquiry",
        Body :  "Name: " + document.getElementById("name").value +
        "<br/> Phone: " + document.getElementById("phone").value +
        "<br/> Email: " + document.getElementById("email").value +
        "<br/> Message: " + document.getElementById("message").value 
    }).then(
    message => {
        if(message=='OK'){
            swal("Message Sent Successfully", "I'll get back to you soon!", "success");
        }
        else{
            swal("Error", "You clicked the button!", "error");
        }
    }
    );
}