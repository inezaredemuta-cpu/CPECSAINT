

function applyNow() {
    alert("Application coming soon!");
}




function validateForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields!");

        return false;
    }

    alert("Message sent successfully!");

    document.getElementById("contactForm").reset();

    return true;
}




function toggleMenu() {

    let nav = document.getElementById("navLinks");

    nav.classList.toggle("showMenu");
}



let links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function() {

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");
    });

});



window.onload = function() {

    console.log("CPEC Saint Babeth Website Loaded Successfully");

};