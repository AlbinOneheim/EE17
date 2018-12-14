window.onload = start;
function start()
{
    const eKnapp = document.querySelector("button");
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");

    let listaKarak = [
        "Sonic",
        "Mario",
        "Vault Boy",
        "Illidan Stormrage",
        "Link",
        "Prince of Persia",
        "Bowser",
        "Kratos",
        "Big Daddy",
        "Donkey Kong"
    ];

    let = listaBilder = [
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/sonic-hedgehog-nintendo.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/mario-smash-bros.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/fallout-vault-boy.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/illidan-stormrage-warcraft.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/link-legend-zelda.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/prince-persia.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/bowser-smash-bros.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/kratos-god-war.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/bioshock-big-daddy.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/donkey-kong-nintendo.jpg"
    ];

    eKnapp.addEventListener("click", slumpa);
    function slumpa()
    {
        let slumptal = Math.ceil(Math.random() * 10 - 1);

        eRuta1.value = slumptal;
        
        eRuta2.value = listaKarak[slumptal];

        document.getElementById("bilder").src = listaBilder[slumptal];
    }
}