// Followed code from Code Institutes EmailJS lesson 08/07/2020

function sendMail(contactForm) {
  emailjs
    .send("gmail", "happy_hour", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      message: contactForm.message.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );

  return false;
}
