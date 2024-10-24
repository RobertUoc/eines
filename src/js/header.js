import { categories } from '../css/categories.css';


function ver_funcio(boton) {    
    matriu.map(ciutat => {
        document.getElementById(ciutat).classList.add('d-none')
    });        
    document.getElementById(boton).classList.remove('d-none');    
}
export { ver_funcio }

let guimera = document.getElementById('guimera');
let aigues = document.getElementById('aigues');
let lleida = document.getElementById('lleida');
let boi = document.getElementById('boi');
let vallbona = document.getElementById('vallbona');

const matriu = ['ver_guimera', 'ver_aigues', 'ver_lleida', 'ver_boi', 'ver_vallbona'];

guimera?.addEventListener('click', () => {     
    ver_funcio('ver_guimera');    
});

aigues?.addEventListener('click', () => {  
    ver_funcio('ver_aigues');    
});

lleida?.addEventListener('click', () => {  
    ver_funcio('ver_lleida');    
});

boi?.addEventListener('click', () => {  
    ver_funcio('ver_boi');    
});

vallbona?.addEventListener('click', () => {  
    ver_funcio('ver_vallbona');    
});


