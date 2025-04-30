let button = document.querySelector('.button');
let confirmButton = document.querySelector('.filter btn_submit');

button.addEventListener('click', ()=>{
    card.classList.add('hidden')
    modal.classList.add('active')
    
    closeButton.addEventListener('click', close)

    container.addEventListener('click', function(event){
        if (!event.target.closest('.modal')){
            close()
        }
    })
    confirmButton.removeAttribute('disabled')
})