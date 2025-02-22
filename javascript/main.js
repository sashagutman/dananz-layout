document.querySelectorAll('.spoiler-button').forEach(button => {
    button.addEventListener('click', function () {
        const content = this.nextElementSibling;
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        this.querySelector('.arrow').classList.toggle('rotate'); 
    });
});










