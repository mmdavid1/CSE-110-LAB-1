window.onload = function() {
    let form = document.getElementById("subscribe-form");

    let emailInput = document.getElementById("email");

    form.addEventListener("submit", function(event) {
        console.log("Form submitted");
        event.preventDefault(); 
        alert(emailInput.value);
    });
}