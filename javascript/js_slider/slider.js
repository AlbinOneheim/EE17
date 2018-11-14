function start()
{
    const img = document.querySelector("img");
    const eWidth = document.querySelector("#width");
    const eHeight = document.querySelector("#height");
    const output = document.querySelector("#output");
    img.width = 400;
    img.height = 400;

    eWidth.addEventListener("input", changeWidth, false);
    eHeight.addEventListener("input", changeHeight, false);

    function changeWidth()
    {
        console.log("width=" + eWidth.value);
        img.width = eWidth.value;
        output.textContent = "(" + eWidth.value + "x" + eHeight.value + ")";
    }
    function changeHeight()
    {
        console.log("height=" + eHeight.value);
        img.height = eHeight.value;
        output.textContent = "(" + eWidth.value + "x" + eHeight.value + ")"; 
    }
}
start();