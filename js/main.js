
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar.");
}
function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
    //alert("Trocar Texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));
//alert(soma(5,9));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/
/*var count;
for(count = 0; count <=5; count++){
    alert(count);
};
*/
/*var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*var idade = prompt("Qual a sua idade?");
//var idade = 18;
if(idade >= 18){
    alert("Maior de Idade.");
} else {
    alert("Menor de Idade.");
};
*/

/*var fruta = {nome:"maçã", cor :"vermelha"};
console.log(fruta);
*/
/*var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra","laranja"];
//lista.push("uva");
//console.log(lista);
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join("-"))
//console.log(lista.toString());
//console.log(lista.reverse());
//console.log(lista.length);
//console.log(lista[1]);
//alert(lista[1]);



//var nome = "Marcel Bezerra";
//var idade = "42";
//var idade2 = "10";
//var frase = "Japão é o melhor time do mundo"
// alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);// * / + - 
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));