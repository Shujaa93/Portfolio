// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================
// Back To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =========================
// Dark Mode
// =========================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.id = "darkModeBtn";

document.body.appendChild(darkBtn);

let darkMode = false;

darkBtn.onclick = () => {

    darkMode = !darkMode;

    document.body.classList.toggle("dark-mode");

    darkBtn.innerHTML = darkMode ? "☀️" : "🌙";

};
