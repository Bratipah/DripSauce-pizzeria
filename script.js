//contact forms values
function subscribe(formcontact) {
    var name = document.forms["formcontact"]["name"].value;
    var email = document.forms["formcontact"]["email"].value;
    var message = document.forms["formcontact"]["message"].value;
    alert("We have received your message. " + name + " Thank you for reaching to us");
};

//orderchoice form value
function submit(formorder) {
    var pizzasize = document.forms["formorder"]["pizzasize"].value;
    var pizzatopping = document.forms["formorder"]["pizzatopping"].value;
    var pizzacrust = document.forms["formorder"]["pizzacrust"].value;
    var pizzanumber = document.forms["formorder"]["pizzanumber"].value;

    if (pizzasize === "small") {
        alert("Small size = KSH800");
    } else if (pizzasize === "large") {
        alert("Small size = KSH1000");
    } else if (pizzasize === "small") {
        alert("Small size = KSH1500");
    } else {
        alert("Choose a size ")
    }
};

