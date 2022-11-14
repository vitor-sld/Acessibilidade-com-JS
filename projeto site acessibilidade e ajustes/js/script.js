var fontPSize = 12, fontH1Size = 25, fontH23Size = 18; maxPSize = 18; minPsize = 12;
var pItem = document.getElementsByTagName("p");
var divTxt = document.getElementById("espaco-conteudo-central");

var selection

console.log(pItem);
console.log(fontPSize);

var aumentarTxt = document.getElementById("aumentar").addEventListener('click',aumentar);
var diminuirTxt = document.getElementById("diminuir").addEventListener('click',diminuir);
var corTxt = document.getElementById("cor").addEventListener('click',cor);
var bold = document.getElementById("bold").addEventListener('click',bold);
var body = document.getElementById("espaco-conteudo-central");

 function aumentar(){
    if(fontPSize<maxPSize){
        fontPSize++;
    for(var i=0; i<pItem.length;i++){
        pItem[i].style.fontSize =`${fontPSize}pt`;
    }}else{}

 }

 function diminuir(){
    if(fontPSize>minPsize){
        fontPSize--;
    for(var i=0; i<pItem.length;i++){
        pItem[i].style.fontSize =`${fontPSize}pt`;
    }}else{}

 }

    function cor(){
        if(body.classList.contains("backgroundBlack")){
            body.classList.remove("backgroundBlack");
        }else{
            body.classList.add("backgroundBlack");
        }
}

    function bold(){
        if(divTxt.classList.contains("bold")){
            divTxt.classList.remove("bold");
        }else{
            divTxt.classList.add("bold");
        }
    }