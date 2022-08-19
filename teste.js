function retiraTabelas(){
    document.getElementById("todas_tabelas").style.display = 'none';
}

function regulaTamanho(){
    let tamanho = document.getElementById("todas_tabelas");
    getComputedStyle(document.documentElement).getPropertyValue('--tamanho');
    /*alert(tamanho.offsetHeight);*/

    if(tamanho.offsetHeight == 1166){
        document.documentElement.style.setProperty('--tamanho', '1166px'); /*1920x1080*/
    }else if(tamanho.offsetHeight == 1166){
        document.documentElement.style.setProperty('--tamanho', '1166px'); /*1280x720 e 1366x768*/
    }else if(tamanho.offsetHeight == 1698){
        document.documentElement.style.setProperty('--tamanho', '1698px'); /*1600x1200*/
    }else if(tamanho.offsetHeight == 1698){
        document.documentElement.style.setProperty('--tamanho', '1698px'); /*1440x900*/
    }else if(tamanho.offsetHeight == 2312){
        document.documentElement.style.setProperty('--tamanho', '2312px'); /*1024x768*/
    }
}

function valorSelecionado(){
    var seletorAno = document.getElementById("ano");
    var seletorMes = document.getElementById("mes");

    if(seletorAno.options[seletorAno.selectedIndex].value == "" && seletorMes.options[seletorMes.selectedIndex].value == ""){
        retiraTabelas();
        /*
        if(seletorAno.options[seletorAno.selectedIndex].value == "" && seletorMes.options[seletorMes.selectedIndex].value == ""){
            $("#alerta_vazio").dialog(); 
        }*/
    }else if(seletorAno.options[seletorAno.selectedIndex].value != "" && seletorMes.options[seletorMes.selectedIndex].value != ""){
        //Ano 2019
        if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Janeiro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Fevereiro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Março"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Abril"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Maio"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Junho"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Julho"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Agosto"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Setembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Outubro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Novembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2019" && seletorMes.options[seletorMes.selectedIndex].value == "Dezembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        //Ano 2020
        if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Janeiro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Fevereiro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Março"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Abril"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Maio"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Junho"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Julho"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Agosto"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Setembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Outubro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Novembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2020" && seletorMes.options[seletorMes.selectedIndex].value == "Dezembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        //Ano 2021
        if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Janeiro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Fevereiro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Março"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Abril"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Maio"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Junho"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Julho"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Agosto"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Setembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Outubro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Novembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2021" && seletorMes.options[seletorMes.selectedIndex].value == "Dezembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        //Ano 2022
        if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Janeiro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Fevereiro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Março"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Abril"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Maio"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Junho"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Julho"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Agosto"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Setembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Outubro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Novembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
        else if (seletorAno.options[seletorAno.selectedIndex].value == "2022" && seletorMes.options[seletorMes.selectedIndex].value == "Dezembro"){
            $("#todas_tabelas").fadeOut("1900");
            $("#todas_tabelas").fadeIn("2000");
            regulaTamanho();
        }
    }else if(seletorAno.options[seletorAno.selectedIndex].value == "" && seletorMes.options[seletorMes.selectedIndex].value != ""){
        $("#alerta_ano").dialog();
    }else if(seletorAno.options[seletorAno.selectedIndex].value != "" && seletorMes.options[seletorMes.selectedIndex].value == ""){
        $("#alerta_mes").dialog();
    }
}