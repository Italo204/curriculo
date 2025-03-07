document.getElementById("Whatsapp").addEventListener("click", function(){
    const url = config.PHONENUMBER;
    window.open(url, "_blank");
});

document.getElementById("Email").addEventListener("click", function(){
    const subject = "Contato Profissional";

    const mailtoLink = `mailto:${config.EMAIL}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
});

document.getElementById("Git").addEventListener("click", function() {
    const url = config.GIT;
    window.open(url, "_blank");
});

document.getElementById("Linkedin").addEventListener("click", function() {
    const url = config.LINKEDIN;
    window.open(url, "_blank");
});