import caragolillo from '../img/caragolillo.jpg';

let multimedia = [
    {titol : 'Himne Caragolillo Brillo',
     url : 'https://www.youtube.com/embed/Bz4BV8GndoQ?si=clV3z0AB-67iA9Cq',
     atribut : 'Video playear caragolillo brillo'          
    },
    {titol : 'Himne Polvoro',
     url : 'https://www.youtube.com/embed/OjkPz3JNmbM?si=_Pl4xAIHEuDREfi5',
     atribut : 'Video playear himme polvoro'                      
    },
    {titol : 'La Festa',
     url : 'https://www.youtube.com/embed/uO9eIv1U9-Q?si=x0uMV_YM9ioPQWyx',
     atribut : 'Video playear la festa'                      
    }
]

let festes = document.getElementById('festes');
let home = document.getElementById('main');

function lesFestes() {
    home.innerText = '';
    let div = document.createElement('div');
    div.classList.add('container');

    let h1 = document.createElement('h1');
    h1.classList.add('center');
    h1.innerText = 'Les Festes';
    let h2 = document.createElement('h2');
    h2.innerText = 'Aplec del Caragol';

    let img = document.createElement('img');
    img.setAttribute('src', caragolillo);    
    img.setAttribute('alt','Caragolillo');
    img.classList.add('foto');

    let links = document.createElement('div');
    links.classList.add('center');

    // youtube.
    multimedia.map(link => {
        let h2 = document.createElement('h2');
        h2.innerText = link.titol;
        let d = document.createElement('div');
        d.classList.add('youtube');
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', link.url);
        iframe.setAttribute('title', link.atribut);
        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('allow', 'web-share');
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        iframe.setAttribute('allowfullscreen','allowfullscreen');

        d.appendChild(iframe);
        links.appendChild(h2);
        links.appendChild(d);
    });     
    
    let d = document.createElement('div');
    let b = document.createElement('b');
    b.innerText = 'Colla Caragolillo Brillo';
    let p = document.createElement('p');
    p.innerText = 'Per a molts la festa més esperada, on tothom es lliura de les etiquetes socials i s’agermana en una festa pels sentits. Amants del bon menjar, del bon beure, de la gresca, gent que vol passar uns dies de desconnexió de la monotonia del dia a dia, tots sou benvinguts a la colla Caragolillo Brillo. «Endavant, sempre endavant, amb alegria i bon humor!»'
    let span = document.createElement('span');
    span.innerText = 'Any de fundació: 1991';
    d.appendChild(b);
    d.appendChild(p);
    d.appendChild(span);

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(links);
    div.appendChild(d);

    home.appendChild(div);
};

export {lesFestes};

festes?.addEventListener('click', () => {   
    lesFestes();
})
