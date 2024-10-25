import foto1 from '../img/guimera.jpg';
import foto2 from '../img/lleida.jpg';
import foto3 from '../img/boi.jpg';
import foto4 from '../img/aigues.jpg';
import foto5 from '../img/monastir.jpg';

let presentacio = document.getElementById('presentacio');
let home = document.getElementById('main')

presentacio?.addEventListener('click', () => {        
    let fotos = [{
                url : foto1,
                alt : 'Guimera'
                },
                {
                url : foto2,
                alt : 'Lleida'
                },
                {
                url : foto3,
                alt : 'Boi'
                },
                {
                url : foto4,
                alt : 'Aigües'
                },
                {
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

    home.innerText = '';
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
        let d = document.createElement('div'); 
        d.classList.add('fotografia');
        let img = document.createElement('img');
        img.setAttribute('src', foto.url);
        img.setAttribute('alt', foto.alt);
        img.classList.add('fotografia');

        d.appendChild(img);
        seccio1.appendChild(d);
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

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(seccio1);
    div.appendChild(seccio2);
    home.appendChild(div);


});

