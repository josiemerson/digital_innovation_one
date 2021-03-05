function start() {

    $("#inicio").hide();

    const personagens = [
        {type: 'jogador', class: 'anima1'}, 
        {type: 'inimigo1', class: 'anima2'}, 
        {type: 'amigo', class: 'anima3'},
        {type: 'inimigo2', class: undefined}
    ];

    personagens.forEach(personagem => {
        let actionPersonagem = `<div id='${personagem.type}'`;
        if (personagem.class) actionPersonagem += ` class='${personagem.class}'`

        actionPersonagem +=`></div>`;

        $("#fundoGame").append(actionPersonagem);
    });

    var jogo = {};

    jogo.timer = setInterval(loop, 30);//milisegundos

    function loop() {
        moveFundo();
    }

    function moveFundo() {
        const esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css('background-position', esquerda - 1);
    }
}