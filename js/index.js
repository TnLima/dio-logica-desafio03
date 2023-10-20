function printMessage() {
    //let heroName = document.getElementById('idName').value;
    // let quantXp = parseInt(document.getElementById('quantXp').value);
    let quantVt = parseInt(document.getElementById('quantVt').value);
    let quantDr = parseInt(document.getElementById('quantDr').value);
    let heroClass = "";
    let saldoVitorias = quantVt - quantDr;

    //TODO: Otimizar código

    if (saldoVitorias < 10) {
        heroClass = "Sem Ranking";
    }

    if (saldoVitorias == 10) {
        heroClass = "Ferro";
    }

    if (saldoVitorias > 10 && saldoVitorias < 21) {
        heroClass = "Bronze";
    }

    if (saldoVitorias > 20 && saldoVitorias < 51) {
        heroClass = "Prata";
    }

    if (saldoVitorias > 50 && saldoVitorias < 81) {
        heroClass = "Ouro";
    }

    if (saldoVitorias > 80 && saldoVitorias < 91) {
        heroClass = "Diamante";
    }

    if (saldoVitorias > 90 && saldoVitorias < 101) {
        heroClass = "Lendário";
    }

    if (saldoVitorias >= 101) {
        heroClass = "Imortal";
    }

    // código antigo{

    //     if (quantXp <= 1000) {
    //         heroClass = "Ferro";
    //     }

    //     if (quantXp > 1000 && quantXp < 2001) {
    //         heroClass = "Bronze";
    //     }

    //     if (quantXp > 2000 && quantXp < 6001) {
    //         heroClass = "Prata";
    //     }

    //     if (quantXp > 6000 && quantXp < 7001) {
    //         heroClass = "Ouro";
    //     }

    //     if (quantXp > 7000 && quantXp < 8001) {
    //         heroClass = "Platina";
    //     }

    //     if (quantXp > 8000 && quantXp < 9001) {
    //         heroClass = "Ascendente";
    //     }

    //     if (quantXp > 9000 && quantXp < 10001) {
    //         heroClass = "Imortal";
    //     }

    //     if (quantXp >= 10001) {
    //         heroClass = "Radiante";
    //     } 
    // }



    document.getElementById('result').innerHTML =
        `<span class="scriptText">O Herói tem 
        <span id="xpAccent">${saldoVitorias}</span>vitórias <br> e seu nível é
        <span id="classAccent">${heroClass}</span></span>`;

    // document.getElementById('espaco').innerHTML = `<div class='blankSpace'></div>`;
    console.log(saldoVitorias);

}