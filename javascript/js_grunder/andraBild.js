function get_rand(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function start() 
{
    var images = ["./bilder/robin-benzrihem-740615-unsplash.jpg", "./bilder/nathan-dumlao-1117076-unsplash.jpg", "./bilder/sam-wermut-1116431-unsplash.jpg", "./bilder/erin-hervey-1115937-unsplash.jpg"];
    var img = document.querySelector("img");
    function change() 
    {
        var index = get_rand(0, images.length - 1);
        img.setAttribute("src", images[index]);
    }
    var button = document.querySelector("button");
    button.addEventListener("click", change, false);
}
start();