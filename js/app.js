function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagemJogo = gameClicado.querySelector('.dashboard__item__img');
    let botaoJogo = gameClicado.querySelector('.dashboard__item__button');

    if (imagemJogo.classList.contains('dashboard__item__img--rented')){
        imagemJogo.classList.remove('dashboard__item__img--rented');
        botaoJogo.classList.remove('dashboard__item__button--return');
        botaoJogo.textContent = 'Alugar'
    }else{
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return');
        botaoJogo.textContent = 'Devolver'

    }
}


