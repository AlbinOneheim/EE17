function start()
{
    const space = document.querySelector(".yta");
    const left = document.querySelector(".fa-arrow-left");
    const right = document.querySelector(".fa-arrow-right");
    var images = ["./foton/JPEG/ghost-presenter-1076897-unsplash.jpg", "./foton/JPEG/jack-millard-1138486-unsplash.jpg", "./foton/JPEG/jeremy-bishop-1138388-unsplash.jpg", "./foton/JPEG/john-westrock-745677-unsplash.jpg", "./foton/JPEG/kaleb-dortono-87610-unsplash.jpg", "./foton/JPEG/kym-ellis-662656-unsplash.jpg", "./foton/JPEG/lucien-kolly-1069829-unsplash.jpg", "./foton/JPEG/phil-coffman-161240-unsplash.jpg", "./foton/JPEG/reuben-teo-1132796-unsplash.jpg", "./foton/JPEG/stephen-kraakmo-1138352-unsplash.jpg"]
    left.addEventListener("click", change, false);
    right.addEventListener("click", change, false);
    function change()
    {
        console.log(this.dataset.direction);
        space.setAttribute("src", images[index]);
    }
}
start();