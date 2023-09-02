//Carrosel
//Carrossel
const imgs = document.getElementById("imagens")
const img  = document.querySelectorAll("#imagens img")

let idx = 0

function carrosel(){
    idx++
    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 700}px)`
}

setInterval(carrosel, 1800)


// API

// card 1
fetch('https://swapi.dev/api/people/1').then(r =>{
    return r.json()
}).then(corpo =>{

    document.getElementById('nome').innerHTML = corpo.name
    document.getElementById('altura').innerHTML = corpo.height
    document.getElementById('peso').innerHTML = corpo.mass
    document.getElementById('pele').innerHTML = corpo.skin_color
    document.getElementById('olho').innerHTML = corpo.eye_color
    document.getElementById('aniversario').innerHTML = corpo.birth_year
    document.getElementById('sexo').innerHTML = corpo.gender
})


// card 2
fetch('https://swapi.dev/api/people/3').then(r =>{
    return r.json()
}).then(corpo =>{

    document.getElementById('nome2').innerHTML = corpo.name
    document.getElementById('altura2').innerHTML = corpo.height
    document.getElementById('peso2').innerHTML = corpo.mass
    document.getElementById('pele2').innerHTML = corpo.skin_color
    document.getElementById('olho2').innerHTML = corpo.eye_color
    document.getElementById('aniversario2').innerHTML = corpo.birth_year
    document.getElementById('sexo2').innerHTML = corpo.gender
})

// card 3
fetch('https://swapi.dev/api/people/4').then(r =>{
    return r.json()
}).then(corpo =>{

    document.getElementById('nome3').innerHTML = corpo.name
    document.getElementById('altura3').innerHTML = corpo.height
    document.getElementById('peso3').innerHTML = corpo.mass
    document.getElementById('pele3').innerHTML = corpo.skin_color
    document.getElementById('olho3').innerHTML = corpo.eye_color
    document.getElementById('aniversario3').innerHTML = corpo.birth_year
    document.getElementById('sexo3').innerHTML = corpo.gender
})

// card 4
fetch('https://swapi.dev/api/people/5').then(r =>{
    return r.json()
}).then(corpo =>{

    document.getElementById('nome4').innerHTML = corpo.name
    document.getElementById('altura4').innerHTML = corpo.height
    document.getElementById('peso4').innerHTML = corpo.mass
    document.getElementById('pele4').innerHTML = corpo.skin_color
    document.getElementById('olho4').innerHTML = corpo.eye_color
    document.getElementById('aniversario4').innerHTML = corpo.birth_year
    document.getElementById('sexo4').innerHTML = corpo.gender
})

// card 5
fetch('https://swapi.dev/api/people/20').then(r =>{
    return r.json()
}).then(corpo =>{

    document.getElementById('nome5').innerHTML = corpo.name
    document.getElementById('altura5').innerHTML = corpo.height
    document.getElementById('peso5').innerHTML = corpo.mass
    document.getElementById('pele5').innerHTML = corpo.skin_color
    document.getElementById('olho5').innerHTML = corpo.eye_color
    document.getElementById('aniversario5').innerHTML = corpo.birth_year
    document.getElementById('sexo5').innerHTML = corpo.gender
})