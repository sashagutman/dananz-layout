// function header loading
fetch('./components/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#header').innerHTML = data;

        // open burger menu
        const menuToggle = document.getElementById("menu-toggle");
        if (menuToggle) {
            menuToggle.addEventListener("click", function () {
                this.classList.toggle("open");
                document.querySelector('.nav').classList.toggle('menu-open');
                document.body.classList.toggle("overlay-active");
            });
        }

        // active class
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        
    })
    .catch(error => console.error('Error loading header:', error));

// function footer loading
fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

 