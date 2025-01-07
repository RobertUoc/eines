import { styles } from '../css/styles.css';

import { funcions } from "../js/funcions.js";
import { festes } from "../js/festes.js";
import { enllacos } from "../js/enllacos.js";
import { presentacio } from "../js/presentacio.js";
import { categories } from "./categoria.js";

let menu = document.getElementById('menu');
let imagen = document.getElementById('imagen');

document.addEventListener('DOMContentLoaded', () => { 
    const lazyImages = document.querySelectorAll('.lazy'); 
    const observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                const img = entry.target; 
                img.src = img.dataset.src; 
                observer.unobserve(img); 
            } 
        }); 
    }); 
    lazyImages.forEach(img => { 
        observer.observe(img); 
    }); 
});
