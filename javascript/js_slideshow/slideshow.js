function start() {
    const space = document.querySelector(".space");
    const left = document.querySelector(".fa-arrow-left");
    const right = document.querySelector(".fa-arrow-right");
    const dotts = document.querySelector(".dotts");
    var images = ["./foton/JPEG/ghost-presenter-1076897-unsplash.jpg", "./foton/JPEG/jack-millard-1138486-unsplash.jpg", "./foton/JPEG/jeremy-bishop-1138388-unsplash.jpg", "./foton/JPEG/john-westrock-745677-unsplash.jpg", "./foton/JPEG/kaleb-dortono-87610-unsplash.jpg", "./foton/JPEG/kym-ellis-662656-unsplash.jpg", "./foton/JPEG/lucien-kolly-1069829-unsplash.jpg", "./foton/JPEG/phil-coffman-161240-unsplash.jpg", "./foton/JPEG/reuben-teo-1132796-unsplash.jpg", "./foton/JPEG/stephen-kraakmo-1138352-unsplash.jpg"]
    var index = 0;
    space.style.cssText = 'background: url("' + images[0] + '") no-repeat center';

    for (let i = 0; i > space.length; i++);
    {
        dotts.innerHTML += '<i class="fas fa-circle"></i>'
    }
    


    left.addEventListener("click", change, false);
    right.addEventListener("click", change, false);

    function change()
        {
        if (this.dataset.direction == "right")
        {
            index++;
        }
        if (this.dataset.direction == "left")
        {
            index--;
        }
        if (index == -1)
        {
            index = images.length - 1;
        }
        if (index == images.length)
        {
            index = 0;
        }
        console.log(this.dataset.direction + " " + index + " " + images[index]);
        space.style.cssText = 'background: url("' + images[index] + '") no-repeat center';
    }
}
start();