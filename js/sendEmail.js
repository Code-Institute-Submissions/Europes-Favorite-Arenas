function sendMail(contactForm) {
    emailjs.send("gmail","template_8q5b5bd", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddrress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        })
};
