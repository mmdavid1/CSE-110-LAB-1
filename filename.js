window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        console.log("testing");
        var emailInput = document.getElementById("email");
        ;
        alert("Thank you for subscribing with email: " + emailInput.value);
    });
}