const links = ['https://www.viajeroscallejeros.com/lugares-que-ver-en-lleida/', 
    'https://www.caragolillobrillo.org/', 
    'http://www.catvisit.com/es/lleida-historia-cultura-y-el-segre/'
    ];
    
let enllacos = document.getElementById('enllacos');
let home = document.getElementById('main')

function lesEnllacos() {
    // Amago el menu
    let rect = imagen.getBoundingClientRect();
    if (rect.top > 0) { menu.dispatchEvent(new MouseEvent('click')); }
    //

    home.innerText = '';
    let h1 = document.createElement('h1');
    h1.classList.add('center');
    h1.innerText = 'Enllaços';

    let div = document.createElement('div'); 
    div.classList.add('container');
    div.classList.add('center');
    let ol = document.createElement('ol');
    ol.classList.add('listas')

    links.map(link => {
        let li = document.createElement('li');    
        li.innerText = link;
        ol.appendChild(li);
    });        
        
    div.appendChild(ol);
    home.appendChild(h1);
    home.appendChild(div);    
}

export {lesEnllacos};

enllacos?.addEventListener('click', () => {        

    lesEnllacos();

});

