(function(){
            emailjs.init("user_0kg3KNjk39fsLR9fKlIoP");
        })();

function sendMail(contactForm) {
    emailjs.send("outlook", "joe", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "query": contactForm.query.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}