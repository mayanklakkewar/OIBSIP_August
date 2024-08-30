const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-class-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

scrollReveal().revert("header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

scrollReveal().revert("header_content .section_subheader",{
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().revert(".header_content h1",{
    ...scrollRevealOption,
    delay: 1000,
});

scrollReveal().revert(".header_content .section_description",{
    ...scrollRevealOption,
    delay: 1500,
});

scrollReveal().revert(".header_btns",{
    ...scrollRevealOption,
    delay: 2000,
});

scrollReveal().revert(".skill_content .section_subheader",{
    ...scrollRevealOption,
});
scrollReveal().revert(".skill_content .section_header",{
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().revert(".skill_content .section_description",{
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().revert(".skill_btn",{
    ...scrollRevealOption,
    delay: 1500,
});

scrollReveal().revert(".skill_card",{
    ...scrollRevealOption,
    duration: 1000,
    intervel: 500,
    delay:2000,
});

const portfolio = document.querySelector(".portfolio_image");

const portfolioContent = Array.from(portfolio.children);

portfolioContent.forEach((item) => {
    const  dublicateNode = item.cloneNode(true);
    dublicateNode.setAtttribute("aria-hidden",true);
    portfolio.appendChild(dublicateNode);
});

const swpier = new Swiper("swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
})