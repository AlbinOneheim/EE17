function start()
{
    const elementImg = document.querySelector(".bild img");
    const elementP = document.querySelector(".bild p");
    const elementMiniatyr1 = document.querySelector(".miniatyr1");
    const elementMiniatyr2 = document.querySelector(".miniatyr2");
    const elementMiniatyr3 = document.querySelector(".miniatyr3");
    const elementMiniatyr4 = document.querySelector(".miniatyr4");

    elementMiniatyr1.addEventListener("click", visaBild);
    elementMiniatyr2.addEventListener("click", visaBild);
    elementMiniatyr3.addEventListener("click", visaBild);
    elementMiniatyr4.addEventListener("click", visaBild);
    
    function visaBild()
    {
        console.log(this.dataset.file);
        
    }
}
start();