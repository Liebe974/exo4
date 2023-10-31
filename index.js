const toggleBtn = document.querySelector(".toggle-btn");
const sideBar = document.querySelector("#side-bar");
const content = document.querySelector(".content");

toggleBtn.addEventListener("click", () => {
    sideBar.classList.toggle("open");
})
content.addEventListener("click", () => {
    sideBar.classList.remove("open");
})

