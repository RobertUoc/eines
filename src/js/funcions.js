const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();         
        setTimeout(() => {
            window.location = this.href; 
        }, 500); 
    });
});
