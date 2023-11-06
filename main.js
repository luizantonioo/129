function setup(){
canvas  = createCanvas(280,280);
canvas.center();
background("white")
canvas.mouseReleased(classifyCanvas); /*função acionada quando o usuario clica na tela e libera*/
synth = window.speechSynthesis;//conversão do texto em fala
}


function limpar(){
    background("white");
}
function draw(){
strokeWeight(5);//espessura do traço dentro do canvas

stroke(0);//traço na cor preta
if (mouseIsPressed){
   line(pmouseX, pmouseY, mouseX, mouseY);
   //posição anterior do mouse x , y, posição atual do mouse x e y
}
}
 function preaload(){
classifier = ml5.imageClassifier('DoodleNet');
 }
 function classifyCanvas() {
    classifier.classify(canvas, gotResult);
 }
function gotResult(error, results){
if (error){
console.error(error);
}
else{
    console.log(results)
     var result = results[0].label.replace('_', ' ');//replace = substituir
document.getElementById("label").innerHTML = 'Nome: ' +
results;
document.getElementById("confidence").innerHTML = 'precisão: ' +
 Math.round(results[0].confidence * 100) + '%';


}

}

















