

document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

       
        alert(`Thank you, ${name}! Your message has been sent. We will get back to you soon.`);
        
    
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});
