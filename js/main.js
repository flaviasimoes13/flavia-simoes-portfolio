const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    siteNav.classList.toggle("open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        siteNav.classList.remove("open");
    });
});

/* ==========================================================
   FLAGS — MOBILE CASE SLIDER
========================================================== */

document.querySelectorAll(".flags-case").forEach((caseItem) => {

    const button =
        caseItem.querySelector(".flags-case-toggle");

    if (!button) return;


    button.addEventListener("click", () => {

        const showingProposal =
            caseItem.classList.toggle("show-proposal");


        button.textContent =
            showingProposal ? "←" : "→";


        button.setAttribute(
            "aria-label",
            showingProposal
                ? "Ver bandeira original"
                : "Ver proposta"
        );

    });

});