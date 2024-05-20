const container = document.getElementById('container');
const link = document.querySelectorAll('.link');

link.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault;
        container.classList.toggle("show-signup");
    })
})