

function ver_funcio(boton) {    
    matriu.map(ciutat => {
        document.getElementById(ciutat).classList.add('d-none')
    });        
    document.getElementById(boton).classList.remove('d-none');    
}

export {ver_funcio}