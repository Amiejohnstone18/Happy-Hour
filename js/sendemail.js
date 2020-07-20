function sendMail(contactForm) {
    emailjs.send("gmail", "happy_hour", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "question": contactForm.question.value
    })

    .then(
        function(response) {
            console.log("SUCCESS", response);
        }, 
        function(error) {
            console.log("FAILED", error);
        }
    )

    return false;
}

