let x = $(document);
x.ready(inicializarEventos);
function inicializarEventos(){
    valoresIniciales();
    let imp = $("input[name=enfermedad]");
    imp.click(clickEnfermedad);
    let y = $("input[name=contagiosa]");
    y.click(clickContagiosa);
}
function valoresIniciales(){
    $("#opcional1").hide();
    $("#opcional2").hide();
}
function clickEnfermedad(){
    let x = $("#opcional1");
    if($(this).val()=="si"){
        x.show("fast");
    }else{
        x.hide("slow");
    }
}
function clickContagiosa(){
    let x = $("#opcional2");
    if($(this).val()=="si"){
        x.show("fast");
    }else{
        x.hide("slow");
    }
}
