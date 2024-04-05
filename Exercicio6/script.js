function adicionaPessoa(x){
    let pessoa = prompt("Digite um nome:");
    var nome = document.createElement('div');
    nome.className = "name";
    nome.textContent = pessoa;

    if(x>0){
        var divData = document.getElementById('dataA'); 
        var divBtn = document.getElementById('btnA');
    }

    else{
        var divData = document.getElementById('dataP');
        var divBtn = document.getElementById('btnP');
    }

    divData.insertBefore(nome, divBtn);
}

function selecTela(x){
    console.log(x);
    const screenP = document.getElementById('screenP');
    const screenA = document.getElementById('screenA');

    if(x>0){
        screenA.style.display = 'flex';
        screenP.style.display = 'none';
    }

    else{
        screenA.style.display = 'none';
        screenP.style.display = 'flex';
    }
}
