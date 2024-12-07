



import { lesFestes } from '../js/festes.js';
import { lesCategories } from '../js/categoria.js';
import { lesPresentacio } from '../js/presentacio.js';
import { lesEnllacos } from '../js/enllacos.js';

let categoria = document.getElementById('categoria_peu');
let festes = document.getElementById('festes_peu');
let presentacio = document.getElementById('presentacio_peu');
let enllacos = document.getElementById('enllacos_peu');

categoria?.addEventListener('click', () => {            
    lesCategories();
});

festes?.addEventListener('click', () => {            
    lesFestes();
});

presentacio?.addEventListener('click', () => {            
    lesPresentacio();
});

enllacos?.addEventListener('click', () => {            
    lesEnllacos();
});