
function ver(categoria) {
    document.getElementById('ver_guimera').classList.add('d-none');
    document.getElementById('ver_aigues').classList.add('d-none');
    document.getElementById('ver_lleida').classList.add('d-none');
    document.getElementById('ver_boi').classList.add('d-none');
    document.getElementById('ver_vallbona').classList.add('d-none');
    
    let ver = 'ver_'.concat(categoria);    
    document.getElementById(ver).classList.remove('d-none');    
}
