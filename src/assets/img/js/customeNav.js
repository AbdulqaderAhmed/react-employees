let nav = document.querySelector('.custom');

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 100){
        nav.classList.add('bg-dark', 'shadow')
    }else{
        nav.classList.add('bg-dark', 'shadow')
    }
})