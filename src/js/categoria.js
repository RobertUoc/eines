import foto1 from '../img/guimera.jpg';
import foto2 from '../img/aigues.jpg';
import foto3 from '../img/lleida.jpg';
import foto4 from '../img/boi.jpg';
import foto5 from '../img/monastir.jpg';

import { lesFestes } from '../js/festes.js';

function ver_funcio(boton) {    
    matriu.map(ciutat => {
        document.getElementById(ciutat).classList.add('d-none')
    });        
    document.getElementById(boton).classList.remove('d-none');    
}
export { ver_funcio }

let categoria = document.getElementById('categoria');
let home = document.getElementById('main');

let botons = [{
          id : 'guimera',
          titul : 'Gimera',
          id_text : 'ver_guimera',
          text : "Una de les millors coses a fer a Lleida és passejar pels carrerons de Guimerà , un dels pobles més bonics a veure a Catalunya . Flanquejat pel riu Corb i situat en un vessant d'una muntanya, aquest poble medieval enamora per les seves cases de pedra amb detalls en portes i finestres, i els seus carrerons costeruts, alguns amb arcades, que et portaran fins a l'Església de Santa Maria i la torre del castell, des d'on tindràs unes vistes fantàstiques. Un cop acabis el recorregut pots tornar a baixar passant per la Plaça Major i alguns dels seus carrers més bonics, com el del Cacau i de la Cendra, fins arribar una altra vegada a la riba del Corb, on no pots deixar de reposar forces prenent un aperitiu al Bar Moretes o esmorzar les seves famoses arengades de la mama , amb pa amb tomàquet. Si t'animes no deixis de comentar-nos-ho al post, ens farà especial il·lusió saber-ho! A uns 2 quilòmetres de Guimerà hi ha les ruïnes del monestir de Vallsanta, que també mereixen una visita.",
          url : foto1
          },
          {
          id : 'aigues',
          titul : 'Aigüestortes',
          id_text : 'ver_aigues',
          text : "El Parc Nacional d´Aigüestortes i Estany de Sant Maurici , és una altra de les meravelles que veure a Lleida i el nostre racó favorit per gaudir de la natura. Aquest espai natural protegit, únic al sud d'Europa, us permet fer rutes de senderisme entre muntanyes de més de 3.000 metres d'alçada, llacs de tot tipus i colors, cascades, rius i una gran diversitat de fauna i flora. El parc disposa de dos accessos principals: el de Boí i el d'Espot, als quals pots arribar amb autobús o cotxe, aquesta última és l'opció més recomanable. Si entreu per Boí podreu observar els paisatges més característics del parc com són els prats i meandres, a més de diversos llacs com el de Llebreta, Llong, Travessani, el Negre o el Monges, i muntanyes com la de Comaloforno, de 3.033 metres d'altitud . Mentre que si entres per Espot podràs veure el famós Llac de Sant Maurici, els dos pics coneguts com Els Encantats , la cascada i el llac de Ratera, i la zona d'Amitges on pots trobar un refugi, un llac i dos pics a forma d'agulla. Tot i que és recomanable fer totes les rutes a peu, a la zona de Sant Maurici disposeu d'un servei de 4×4 que us portarà fins a la zona alta, per la qual cosa us estalviareu una part important de la pujada.",
          url : foto2
          },
          {
          id : 'lleida',
          titul : 'Lleida',
          id_text : 'ver_lleida',
          text : "Lleida, la capital de la província i una desconeguda per al gran públic, és una ciutat perfecta per passar-hi un o dos dies visitant els seus nombrosos edificis històrics i racons amb encant. Entre els seus edificis més importants destaca la Seu Vella, una antiga catedral situada a dalt d'un turó que meravella pel claustre i una alta torre, des d'on observar tota la ciutat i el seu entorn. Si voleu tenir vistes de la Seu Vella amb Lleida de fons, podeu pujar fins al mirador de l'antic Castell del Rei. Altres punts d'interès de la ciutat són la Catedral Nova, el Palau de la Paeria, l'Antic Hospital de Santa Maria i, sobretot, el Castell templer de Gardeny, un dels llocs que visitar a Lleida més interessants . Per conèixer millor la història d'aquest castell us recomanem reservar aquesta visita guiada . A més de conèixer tots aquests atractius turístics, et recomanem recórrer el Carrer Major, un dels carrers comercials més llargs del país, i passejar per la riba del Segre, a més de tastar algun dels plats més típics de la regió com són els cargols ( cargols) a la llauna seguint aquesta llista dels millors restaurants on menjar a Lleida . Si fas nit a la capital pots reservar a l' Hotel Real , al Zenit Lleida o al Ramon Berenguer IV .",
          url : foto3,
          canvi : 'festes',
          canvi_text : 'Les Festes'
          },
          {
          id : 'boi',
          titul : 'Vall Boi',
          id_text : 'ver_boi',
          text : "Una ruta amb cotxe per les Esglésies romàniques de la Vall de Boí , és una altra de les millors coses a fer a la província de Lleida i un dels llocs que visitar a Catalunya més imprescindibles. Aquestes esglésies que comparteixen el mateix estil romànic llombard, van ser construïdes entre els segles XI i XII i declarades Patrimoni de la Humanitat per la Unesco. A més d'estar ubicades en un entorn privilegiat, es caracteritzen per la bona utilització de la pedra, la decoració en arcs cecs i bandes llombardes, les altes torres campanar i la presència de pintures murals en alguna. Tot i que la més famosa és l'església de Santa Maria de Taüll, que tenia al seu interior la valuosa pintura del Pantocrator, val la pena fer la ruta completa que passi per les esglésies de Sant Climent de Taüll , Sant Joan de Boí, Santa Eulàlia 'Erill la Vall, Sant Feliu de Barruera, Nativitat de Durro, Santa Maria de Cardet, l'Assumpció de Cóll i l'ermita de Sant Quirc de Durro. La majoria estan obertes cada dia de 10h a 14h i de 16h a 19h. Un dels nostres consells si visites aquests pobles de la Vall de Boí, és allotjar-te en una casa o hotel rural com el Ratiner , on vam estar nosaltres i vam poder gaudir d'uns deliciosos esmorzars a base d'embotits locals. Si disposes de més temps pots acostar-te a Viella i la bonica Vall d'Aran. Per a més informació podeu consultar aquesta ruta per la Vall de Boí en un cap de setmana . ",
          url : foto4
          },
          {
          id : 'vallbona',
          titul : 'Vallbona',
          id_text : 'ver_vallbona',
          text : "El monestir de Vallbona de les Monges , parada obligada de la coneguda com a Ruta del Cister, que agrupa diversos monestirs cistercencs, és una altra de les meravelles a veure a Lleida (Lleida) . Fundat al segle XII, aquest monestir que ha conservat la seva comunitat femenina durant més de 850 anys i on pots fer nit, destaca pels seus dos cimboris gòtics, el bell claustre en què es barregen l'estil àrab, romànic i gòtic, i la Sala Capitular amb diversos sepulcres d'abadesses del monestir. ",
          url : foto5
          }

];
let matriu = [];

categoria?.addEventListener('click', () => {       
    
    // Amago el menu
    let rect = imagen.getBoundingClientRect();
    if (rect.top > 0) { menu.dispatchEvent(new MouseEvent('click')); }
    //
    home.innerText = '';
    let h1 = document.createElement('h1');
    h1.classList.add('center');
    h1.innerText = 'Categoria';

    let div = document.createElement('div'); 
    let p = document.createElement('p');
    p.innerText = "Aquesta llista dels millors llocs a veure a Lleida i província, ens ajudarà a conèixer aquesta regió plena de meravelles naturals i monuments històrics. Situada al nord-est d'Espanya, a l'interior de Catalunya, ofereix experiències fantàstiques en contacte amb la natura més autèntica i coneixent el seu passat medieval a petits pobles plens d'encant. Per arribar a Lleida disposes del tren d'alta velocitat (AVE) que té parada a la capital o pots volar a Barcelona, ​​a menys de dues hores amb cotxe. Aqui tens una llista plena de llocs a visitar a Lleida imprescindibles. Comencem!";
    div.classList.add('container');
    let butons = document.createElement('div');
    butons.classList.add('menu_categories');

    // Menu Botons
    botons.map(boto => {
        let d = document.createElement('div');
        let but = document.createElement('button');
        but.classList.add('boto_categories');
        but.innerHTML = boto.titul;
        but.id = boto.id;
        but.addEventListener('click', () => {     
            ver_funcio(boto.id_text);    
        });
        d.appendChild(but);
        butons.appendChild(d);             
    });

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(butons);

    // Explicacio per boto
    botons.map(boto => {
        let d1 = document.createElement('div');
        d1.classList.add('d-none');
        d1.id = boto.id_text;
        matriu.push(boto.id_text)   
        let b = document.createElement('b');
        b.innerText = boto.titul;
        d1.appendChild(b);
        let p = document.createElement('p');
        p.innerText = boto.text;
        d1.appendChild(p)
        let d2 = document.createElement('div');       
        d2.classList.add('center');
        let img = document.createElement('img');    
        img.classList.add('foto');        
        img.setAttribute('src', boto.url);

        d2.appendChild(img);
        d1.appendChild(d2);
        if (boto.canvi != undefined) {
            let d3 = document.createElement('div');
            d3.classList.add('center');
            let bt = document.createElement('button');
            bt.classList.add('boto_categories');
            bt.id = boto.canvi;
            bt.innerText = boto.canvi_text;
            //
            bt.addEventListener('click', () => {   
                lesFestes();
            });
            d3.appendChild(bt);
            d1.appendChild(d3);      
        }        
        div.appendChild(d1);
    });    
    home.appendChild(div);

})
