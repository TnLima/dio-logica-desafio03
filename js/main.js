class Heroi {

    nome;
    idade;
    tipo;

    atacar() {

        let ataque = '';
        let tipo = this.tipo

        switch (tipo) {
            case 'Mago':
                ataque = 'magia';
                break;

            case 'Guerreiro':
                ataque = 'espada';
                break;

            case 'Monge':
                ataque = 'artes marciais';
                break;

            case 'Ninja':
                ataque = 'shuriken';
                break;

            default:
                break;
        }

        return `<span class="xpAccent">O ${tipo} atacou<br>usando</span><span class="classAccent">${ataque}</span>`;
    }
}

function popularDropdown() {

    let dropDown = parseInt(document.getElementById('levelDropDown').value);

    let i = 1

    while (i < 100) {
        i++;
        document.getElementById('levelDropDown').innerHTML += `       
            <option id="levelDropDown">${i}</option>                              
       `;
    }

}

function heroInjector() {

    novoHeroi = new Heroi()
    novoHeroi.nome = document.getElementById('heroName').value
    novoHeroi.idade = document.getElementById('levelDropDown').value //pega o atributo do level
    novoHeroi.tipo = document.getElementById('classeDropDown').value //pega atributo da "classe"
    
    document.getElementById('result').innerHTML = novoHeroi.atacar();
}