document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.ButtonLanguage');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('ativo');
        });
    });
});
