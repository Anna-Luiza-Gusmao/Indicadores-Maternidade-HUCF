function iniciaPagina(){
    var seletor21 = document.getElementById("ano");
    var seletor22 = document.getElementById("mes");

    /*document.getElementById("gerarIndicadores").click();*/
    if(seletor21.options[seletor21.selectedIndex].value == "" && seletor22.options[seletor22.selectedIndex].value == ""){
        document.getElementById("todas_tabelas").style.display = 'none';
        document.getElementById("touch").click();
        console.log("Executando o carregamento inicial da página pela primeira vez");
    }
}

window.onload = iniciaPagina;