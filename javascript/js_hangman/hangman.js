function start()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    /* Kropen */
    ctx.moveTo(250,150);
    ctx.lineTo(250,280);
    ctx.stroke();

    /* Höger arm */
    ctx.moveTo(250,150);
    ctx.lineTo(300,200);
    ctx.stroke();

    /* Vänster arm */
    ctx.moveTo(250,150);
    ctx.lineTo(200,200);
    ctx.stroke();

    /* Höger ben */
    ctx.moveTo(250,280);
    ctx.lineTo(300,350);
    ctx.stroke();

    /* Vänster ben */
    ctx.moveTo(250,280);
    ctx.lineTo(200,350);
    ctx.stroke();
    

    /* Huvudet */
    ctx.beginPath();
    ctx.arc(250, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();

    /* Höger öga */
    ctx.beginPath();
    ctx.arc(230, 100, 5, 0, 2 * Math.PI);
    ctx.stroke();

    /* Vänster öga */
    ctx.beginPath();
    ctx.arc(270, 100, 5, 0, 2 * Math.PI);
    ctx.stroke();

    /* Mun */
    ctx.beginPath();
    ctx.arc(250, 110, 30, 0, 1 * Math.PI);
    ctx.stroke();
}
start();