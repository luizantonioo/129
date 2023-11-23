quickDrawDataset=["porta-aviões","avião","despertador","ambulância","anjo","migração animal","formiga","bigorna","maçã","braço","aspargos",
                      "machado","mochila","banana","bandagem","celeiro","beisebol","taco de beisebol","cesta","basquete","morcego","banheira","praia"," urso",
                      "barba","cama","abelha","cinto","banco","bicicleta","binóculos","pássaro","bolo de aniversário","amora","mirtilo","livro"," bumerangue",
                      "tampa de garrafa","gravata borboleta","pulseira","cérebro","pão","ponte","brócolis","vassoura","balde","escavadeira","ônibus","arbusto","borboleta ",
                      "cacto","bolo","calculadora","calendário","camelo","câmera","camuflagem","fogueira","vela","canhão","canoa","carro","cenoura ",
                      "castelo","gato","ventilador de teto","violoncelo","celular","cadeira","lustre","igreja","círculo","clarinete","relógio","nuvem", "xícara de café",
                      "bússola","computador","biscoito","cooler","sofá","vaca","caranguejo","giz de cera","crocodilo","coroa","navio de cruzeiro","copo"," diamante","máquina de lavar louça",
                      "prancha de mergulho","cachorro","golfinho","rosquinha","porta","dragão","cômoda","broca","bateria","pato","haltere","orelha", " cotovelo","elefante",
                      "envelope","borracha","olho","óculos","rosto","ventilador","pena","cerca","dedo","hidrante","lareira","caminhão de bombeiros"," peixe",
                      "flamingo","lanterna","chinelos","abajur","flor","disco voador","pé","garfo","sapo","frigideira","jardim","jardim mangueira",
                      "girafa","cavanhaque","clube de golfe","uvas","grama","guitarra","hambúrguer","martelo","mão","harpa","chapéu","fones de ouvido"," ouriço","helicóptero",
                      "capacete","hexagonal","disco de hóquei","taco de hóquei","cavalo","hospital","balão de ar quente","cachorro-quente","banheira de hidromassagem","ampulheta","casa",
                      "planta de casa","furacão","sorvete","jaqueta","prisão","canguru","chave","teclado","joelho","faca","escada","lanterna", "computador portátil",
                      "folha","perna","lâmpada","isqueiro","farol","relâmpago","linha","leão","batom","lagosta","pirulito","caixa de correio"," mapa","marcador",
                      "fósforos","megafone","sereia","microfone","microondas","macaco","lua","mosquito","moto","montanha","rato","bigode","boca ",
                      "caneca","cogumelo","prego","colar","nariz","oceano","octógono","polvo","cebola","forno","coruja","pincel","pintura pode","palmeira","panda",
                      "calça","clipe de papel","pára-quedas","papagaio","passaporte","amendoim","pêra","ervilhas","lápis","pinguim","piano","caminhão", "porta-retratos",
                      "porco","travesseiro","abacaxi","pizza","alicate","carro de polícia","lago","piscina","picolé","cartão postal","batata","tomada", "bolsa", "coelho",
                      "guaxinim","rádio","chuva","arco-íris","ancinho","controle remoto","rinoceronte","rifle","rio","montanha-russa","patins","veleiro",
                      "sanduíche","serra","saxofone","ônibus escolar","tesoura","escorpião","chave de fenda","tartaruga marinha","serra","tubarão","ovelha","sapato" ,"shorts",
                      "pá","pia","skate","caveira","arranha-céu","saco de dormir","carinha sorridente","caracol","cobra","snorkel","floco de neve","boneco de neve",
                      "bola de futebol","meia","lancha","aranha","colher","planilha","quadrado","rabisco","esquilo","escadas","estrela","bife"," estéreo",
                      "estetoscópio","pontos","sinal de parada","fogão","morango","streetlight","feijão","submarino","mala","sol","cisne","suéter",
                      "balanço","espada","seringa","mesa","bule","ursinho de pelúcia","telefone","televisão","raquete de tênis","tenda","Torre Eiffel",
                      "A Grande Muralha da China","A Mona Lisa","tigre","torradeira","dedo do pé","banheiro","dente","escova de dentes","pasta de dente","tornado","trator",
                      "semáforo","trem","árvore","triângulo","trombone","caminhão","trompete","camiseta","guarda-chuva","roupa íntima","van","vaso"," violino",
                      "máquina de lavar","melancia","toboágua","baleia","roda","moinho de vento","garrafa de vinho","copo de vinho","relógio de pulso","ioga","zebra","ziguezague" ]
randomNumber = Math.floor((Math.random()*quickDrawDataset.length)+1);
console.log(quickDrawDataset[randomNumber]);
sketch = quickDrawDataset[randomNumber];
document.getElementById('sketchName').innerHTML = 'Esboço a ser desenhado: ' + sketch;
timerCounter = 0;
timerCheck = "";
drawnSketch = "";
answerHolder = "";
score = 0;
function updateCanvas() {
    background("white");
    randomNumber = Math.floor((Math.random() * quickDrawDataset.length) + 1);
    console.log(quickDrawDataset[randomNumber]);
    sketch = quickDrawDataset[randomNumber];
    document.getElementById('sketchName').innerHTML = 'Esboço a ser desenhado: ' + sketch;
  }
  function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
  }
  function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("gray");
    canvas.mouseReleased(classifyCanvas);
  }
  function draw() {
    strokeWeight(10);
    stroke(0);
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
checkSketch() 
if(drawnSketch == "set"){
answerHolder = "set"
score++;
document.getElementById('score').innerHTML = 'pontos :' + score;
}
  }
function classifyCanvas() {
classifier.classify(canvas, gotResult);
}
function gotResult(error, results) {
 if (error) {
 console.error(error);
 }
console.log(results);
drawnSketch = results[0].label;
document.getElementById('label').innerHTML = 'esboço: ' + drawnSketch.replace("_", " ");
document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(results[0].confidence * 100) + '%';
 }
    function checkSketch(){
timerCounter++;
document.getElementById('time').innerHTML = 'tempo restante:' + timerCounter; 
console.log(timerCounter)
if(timerCounter > 900){
timerCounter = 0;
timerCheck = "completed"
}
if(timerCheck =="completed" || answerHolder == "set"){
timerCheck = "";
answerHolder = "";
updateCanvas();
}}
//Feito por Luiz:)))
//Feito a mão sem copiar .....juro:<
//:)byee..