const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();         
        setTimeout(() => {
            window.location = this.href; 
        }, 500); 
    });
});

function principal() {
    home.innerText = '';
    let div = document.createElement('div'); 
    div.classList.add('container');
    div.classList.add('bg-container');
    let span = document.createElement('span'); 
    span.innerText = 'LLEIDA';
    let h1 = document.createElement('h1'); 
    h1.innerText = 'VISITA';
    h1.appendChild(span);
    let p = document.createElement('p');
    p.innerText = 'Planifica amb nosaltres la teva visita a la ciutat'

    div.appendChild(h1);
    div.appendChild(p);
    home.appendChild(div);
}

let index = document.getElementById('index');
let home = document.getElementById('main')

principal();
index?.addEventListener('click', () => {        
    principal();
});
