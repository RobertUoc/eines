import foto1 from '../img/guimera.webp';
import foto2 from '../img/lleida.webp';
import foto3 from '../img/boi.webp';
import foto4 from '../img/aigues.webp';
import foto5 from '../img/monastir.webp';

let fotos = [{
    id : 'foto1',
    url : foto1,
    alt : 'Guimera'
    },
    {
    id : 'foto2',
    url : foto2,
    alt : 'Lleida'
    },
    {
    id : 'foto3',        
    url : foto3,
    alt : 'Boi'
    },
    {
    id : 'foto4',
    url : foto4,
    alt : 'Aigües'
    },
    {
    id : 'foto5',        
    url : foto5,
    alt : 'Vallbona'
    }
];

let articles = [{
        titul : 'Inici de la Visita: La Seu Vella',
        missatge : "La visita comença a la Seu Vella, l'antiga catedral que és el principal monument arquitectònic de la ciutat. S'alça imponent sobre un puig que porta el seu nom, des del qual es pot contemplar tota la ciutat, el riu Segre i gran part de l'horta de Lleida. La Seu Vella forma part d'un conjunt monumental integrat pel Castell del Rei o la Suda i la fortificació militar que els envolta."
        },
        {
        titul : 'Descobrint el Centre de Lleida',
        missatge : "Després, baixarem cap al centre, fent parada a l'església de Sant Llorenç, un temple medieval molt apreciat pels lleidatans. Arribarem a l'Eix Comercial, que segueix el traçat del Camí de Sant Jaume, una de les principals vies de la ciutat."
        },
        {
        titul : 'Edificis Emblemàtics', 
        missatge : "En el recorregut, trobarem diversos edificis destacats:",
        fills : [ 'La Seu Nova, construïda al segle XVIII per substituir la vella que havia esdevingut una caserna militar.',
            "L'Hospital de Santa Maria, un edifici gòtic que acollia els més necessitats i els pelegrins.",
            "La Capella del Peu del Romeu, dedicada a Santiago, situada sobre l'antiga via de pelegrinatge de la ruta jacobea.",
            "El Palau de la Paeria, l'Ajuntament de Lleida, ubicat en un antic palau senyorial del segle XIII, amb antigues dependències com les presons que es poden visitar.",
            "El Palau de la Diputació, construït reaprofitant estructures de l'antic hospici, amb el notable balcó del Serraller, davant de la pintoresca Casa de Sauces."
        ]
        },
        {
        titul : 'Els Camps Elisis',
        missatge : "L'eix comercial i històric és paral·lel al riu Segre, un dels principals elements que dóna personalitat a la ciutat. Just a l'altra banda del riu trobem els Camps Elisis, inspirats en el conegut parc francès. És un recinte públic amb jardins d'estil francès i romàntic anglès, construïts sobre terrenys boscosos, que acull edificis de finals del segle XIX i principis del XX."
        }
];

let presentacio = document.getElementById('presentacio');
let home = document.getElementById('main')

async function lesPresentacio() {
    // Amago el menu
    let rect = imagen.getBoundingClientRect();
    if (rect.top > 0) { menu.dispatchEvent(new MouseEvent('click')); }
    //
    const svgNS = "http://www.w3.org/2000/svg";

    home.innerText = '';

    let ruta = document.createElement('div'); 
    ruta.innerHTML = "Visita Lleida";
    ruta.classList.add('ruta'); 

    let svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width','200');
    svg.setAttribute('height','100');
    svg.setAttribute('viewBox','0 0 200 100');

    let autocar = document.createElementNS(svgNS, 'rect');
    autocar.setAttribute('x','10');
    autocar.setAttribute('y','30');
    autocar.setAttribute('width','180');
    autocar.setAttribute('height','50');
    autocar.setAttribute('fill','#FFD700');
    autocar.setAttribute('stroke','#000');
    autocar.setAttribute('stroke-width','2');
    let roda1 = document.createElementNS(svgNS, 'circle');
    roda1.classList.add('wheel');    
    roda1.setAttribute('cx','40');
    roda1.setAttribute('cy','80');
    roda1.setAttribute('r','10');
    roda1.setAttribute('fill','#000');
    let roda2 = document.createElementNS(svgNS, 'circle');
    roda2.classList.add('wheel');
    roda2.setAttribute('cx','160');
    roda2.setAttribute('cy','80');
    roda2.setAttribute('r','10');
    roda2.setAttribute('fill','#000');    
    let finestra1 = document.createElementNS(svgNS, 'rect');
    finestra1.setAttribute('x','20');
    finestra1.setAttribute('y','40');
    finestra1.setAttribute('width','30');
    finestra1.setAttribute('height','20');    
    finestra1.setAttribute('fill','#FFF'); 
    finestra1.setAttribute('stroke','#000');
    finestra1.setAttribute('stroke-width','1');
    let finestra2 = document.createElementNS(svgNS, 'rect');
    finestra2.setAttribute('x','60');
    finestra2.setAttribute('y','40');
    finestra2.setAttribute('width','30');
    finestra2.setAttribute('height','20');    
    finestra2.setAttribute('fill','#FFF'); 
    finestra2.setAttribute('stroke','#000');
    finestra2.setAttribute('stroke-width','1');
    let finestra3 = document.createElementNS(svgNS, 'rect');
    finestra3.setAttribute('x','100');
    finestra3.setAttribute('y','40');
    finestra3.setAttribute('width','30');
    finestra3.setAttribute('height','20');    
    finestra3.setAttribute('fill','#FFF'); 
    finestra3.setAttribute('stroke','#000');
    finestra3.setAttribute('stroke-width','1');
    let finestra4 = document.createElementNS(svgNS, 'rect');
    finestra4.setAttribute('x','140');
    finestra4.setAttribute('y','40');
    finestra4.setAttribute('width','30');
    finestra4.setAttribute('height','20');    
    finestra4.setAttribute('fill','#FFF'); 
    finestra4.setAttribute('stroke','#000');
    finestra4.setAttribute('stroke-width','1');

    svg.appendChild(autocar);
    svg.appendChild(roda1);
    svg.appendChild(roda2);
    svg.appendChild(finestra1);
    svg.appendChild(finestra2);
    svg.appendChild(finestra3);
    svg.appendChild(finestra4);
    ruta.appendChild(svg);

    let h1 = document.createElement('h1');
    h1.classList.add('center');
    h1.innerText = 'Lleida, historia, cultura i el Segre';

    let div = document.createElement('div'); 
    div.classList.add('container');
    let p = document.createElement('p');
    p.innerText = "Lleida ha estat històricament la capital interior de Catalunya. La seva situació a ponent la va convertir a la porta d'entrada i sortida, ja fos per carretera o via fluvial. Aquesta situació estratègica va fer que durant segles la ciutat visqués grans èpoques d'esplendor que es veuen reflectides en el passat monumental, però alhora aquest fet va provocar que durant els conflictes bèl·lics la ciutat patís greus danys i canvis importants.";
    let seccio1 = document.createElement('section');
    seccio1.classList.add('foto-galeria');

    fotos.map(foto => {
        let svg = document.createElementNS(svgNS, 'svg'); 
        svg.setAttribute('id',foto.id);
        svg.classList.add('imagen');
        svg.setAttribute('width','100');
        svg.setAttribute('height','100');
        svg.setAttribute('viewBox','0 0 100 100');

        let d = document.createElement('div');     
        d.classList.add('canviar');
        let img = document.createElementNS(svgNS, 'image');
        img.setAttribute("href", foto.url);
        img.setAttribute('width','100');
        img.setAttribute('height','100');   
        img.setAttribute('loading', 'lazy');  
        svg.appendChild(img);

        d.appendChild(svg);        
        seccio1.appendChild(d);
                
        svg.addEventListener('click', () => {                                         
            // Elimino la classe per ferla petita
            const fotos = document.querySelectorAll('.imagen');
            fotos?.forEach(f => f.classList.remove('grande'));
            svg.classList.toggle('grande');  
        });
    });

    let seccio2 = document.createElement('section');
    seccio2.classList.add('container'); 
    seccio2.classList.add('articles');
    articles.map(article => {
        let art = document.createElement('article');
        let h2 = document.createElement('h2');
        h2.innerText = article.titul;
        let p = document.createElement('p');
        p.innerText = article.missatge;        

        art.appendChild(h2);
        art.appendChild(p);
        let ul = document.createElement('ul');
        let control = 0;
        if (article.fills != undefined) {
            article.fills.map(fill => {
                let li = document.createElement('li');
                li.innerText = fill;
                ul.appendChild(li);
                control += 1;
            });
        }
        if (control > 0) { seccio2.appendChild(ul); }
        seccio2.appendChild(art);

    });

    div.appendChild(ruta);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(seccio1);
    div.appendChild(seccio2);    
    home.appendChild(div);        

}

export {lesPresentacio};

presentacio?.addEventListener('click', () => {  
    lesPresentacio();                
});


