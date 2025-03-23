// criação de uma timeline do GSAP com animações com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //depuração

    },
});

tl.to(
    '#fanta',
    {
        top: '120%',//Move o elemento com o ID fanta para 120% do topo
        left: '0%',
    },
    'orange'
); //Nomeando este trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%',//Move o elemento com o ID fanta para 120% do topo
        left: '23%', // Mova para a esquerda 23%
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width: '15%',//Reduz a largura do elemento com o id 'laranja' para 15%
        top: '160%',//Move o elemento com o ID fanta para 120% do topo
        right: '10%',// Move o elemento para a direita 10%
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha',
    {
        top: '110%',//Move o elemento com o ID fanta para 110% do topo
        rotate: '500deg',//Rotaciona o elemento em 500 graus
        left: '70%',// Move o elemento para a esquerda em 70%
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha2',
    {
        top: '110%',//Move o elemento com o ID fanta para 110% do topo
        rotate: '530deg',//Rotaciona o elemento em 530 graus
        left: '0%',// Move o elemento para a esquerda em 0%
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

//Criando outra timeline

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', // fim da animação quando estiver com 50% da altura e quando estiver 
        // 20% da sessão seguinte
        scrub: true,
        markers: true,
    },
    });

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', // inicia o elemento com classe lemon1 rotacionando
        left: '-100%', //inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', // inicia o elemento com classe lemon1 rotacionando
        left: '-100%', //inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '-90deg', // inicia o elemento com classe lemon1 rotacionando
        left: '-100%', //inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '-90deg', // inicia o elemento com classe lemon1 rotacionando
        left: '-100%', //inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '17%', //Aumenta o elemento em 18%
        left: '42%', //move para esquerda 42%
        top: '206%', // move para o topo 204
    },
    'ca'
);


tl2.to(
    '#fanta',
    {
        width: '30%', //Aumenta o elemento em 18%
        left: '35.5%', //move para esquerda 42%
        top: '218%', // move para o topo 204
    },
    'ca'
);

