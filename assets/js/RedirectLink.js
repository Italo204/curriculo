document.getElementById("Whatsapp").addEventListener("click", function(){
    const phoneNumber = "5534988794217";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
});

document.getElementById("Email").addEventListener("click", function(){
    const email = "italosantos.developer@gmail.com";
    const subject = "Contato Profissional";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
});

document.getElementById("Git").addEventListener("click", function() {
    const userName = "Italo204"
    const url = `https://www.github.com/${userName}`;
    window.open(url, "_blank");
});

document.getElementById("Linkedin").addEventListener("click", function() {
    const user = "italo-developer"
    const url = `https://www.linkedin.com/in/${user}/`
    window.open(url, "_blank");
});