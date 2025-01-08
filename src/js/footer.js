



// import { lesFestes } from '../js/festes.js';
//import { lesCategories } from '../js/categoria.js';
// import { lesPresentacio } from '../js/presentacio.js';
// import { lesEnllacos } from '../js/enllacos.js';

let categoria = document.getElementById('categoria_peu');
let festes = document.getElementById('festes_peu');
let presentacio = document.getElementById('presentacio_peu');
let enllacos = document.getElementById('enllacos_peu');

 categoria?.addEventListener('click',async () => {      
    const { lesCategories } = await import('../js/categoria.js'); lesCategories();      
    lesCategories();
});

festes?.addEventListener('click', async () => {       
    const { lesFestes } = await import('../js/festes.js'); lesFestes();           
    lesFestes();
});

presentacio?.addEventListener('click', async () => {    
    const { lesPresentacio } = await import('../js/presentacio.js'); lesPresentacio();                   
    lesPresentacio();
});

enllacos?.addEventListener('click', async () => {            
    const { lesEnllacos } = await import('../js/enllacos.js'); lesEnllacos();           
    lesEnllacos();
});