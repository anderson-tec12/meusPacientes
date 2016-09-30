function percorreArray(trsPacientes, comportamento){
  for(var posicaoAtual = 0;posicaoAtual <= trsPacientes.length -1; posicaoAtual++){
    var pacienteTrAtual = trsPacientes[posicaoAtual]
    //console.log(pacienteTrAtual)
    comportamento(pacienteTrAtual)
  }
}

function pacienteDados(pacienteTr){
  var tdNome = pacienteTr.getElementsByClassName('info-nome')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
  var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
  var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
  var tdImc= pacienteTr.getElementsByClassName('info-imc')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
  var pacienteAtual = {
    nome: tdNome.textContent,
    peso: tdPeso.textContent,
    altura: tdAltura.textContent,
    pegaImc: function(){
      if(this.altura != 0){
        var imc = this.peso/(this.altura*this.altura);
         return imc
      }else{
        console.log("não é possivel calcular pois a atua é zero");
      }
    }}

    return pacienteAtual
}

//peso / altura * altura
// var tdAltura = document.getElementById('altura-2');
// var tdPeso = document.getElementById('peso-2');
// var peso2 = tdPeso.textContent
// var altura2 = tdAltura.textContent
//
// var paciente2= {peso: peso2, altura:altura2}
//
// var tdAltura = document.getElementById('altura-1');
// var tdPeso = document.getElementById('peso-1');
// var peso1 = tdPeso.textContent
// var altura1 = tdAltura.textContent
//
// var paciente1= {peso: peso1, altura:altura1}
// var pacientes = [paciente1, paciente2]



//var ehDiferenteDeZero = (altura2 != 0);



    //não uso mais
   //percorreArray(trsPacientes, function(pacienteTr){
    //  var tdNome = pacienteTr.getElementsByClassName('info-nome')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
    //  var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
    //  var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
    //  var tdImc= pacienteTr.getElementsByClassName('info-imc')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
    //  var pacienteAtual = {
    //    nome: tdNome.textContent,
    //    peso: tdPeso.textContent,
    //    altura: tdAltura.textContent,
    //    pegaImc: function(){
    //      if(this.altura != 0){
    //        var imc = this.peso/(this.altura*this.altura);
    //        return imc
    //      }else{
    //        console.log("não é possivel calcular pois a atua é zero");
    //      }
    //    }}
     //
    //    var imc = pacienteAtual.pegaImc()
    //    tdImc.textContent = imc
    //    console.log(imc)
   //})
//}

var btn = document.getElementById('calcula-imcs')
btn.addEventListener("click", function(){
  var trsPacientes = document.getElementsByClassName('paciente')
    percorreArray(trsPacientes, function(trAtual){
      var pacienteCadastro = pacienteDados(trAtual)
      var trImc = trAtual.getElementsByClassName('info-imc')[0]
      trImc.textContent = pacienteCadastro.pegaImc()
    })})

var trsPacientes = document.getElementsByClassName('paciente');

//percorreArray(trsPacientes, imprimeNome)

percorreArray(trsPacientes, function(pacienteTr){
  var pacienteCadastro = pacienteDados(pacienteTr);
  console.log(pacienteCadastro.nome)
})

//não uso mais esssa função
function imprimeNome(pacienteTr){
  var tdNome = pacienteTr.getElementsByClassName('info-nome')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
  var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
  var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
  var tdImc= pacienteTr.getElementsByClassName('info-imc')[0] // o getElementByClassName sempre retorna um array mesmo que exista somente um elemento
  var pacienteAtual = {
    nome: tdNome.textContent,
    peso: tdPeso.textContent,
    altura: tdAltura.textContent,
    pegaImc: function(){
      if(this.altura != 0){
        var imc = this.peso/(this.altura*this.altura);
        return imc
      }else{
        console.log("não é possivel calcular pois a atua é zero");
      }
    }}


}

 var trs = document.getElementsByTagName('tr')

percorreArray(trs,function(tr){
  tr.addEventListener("mouseover", function(){
    this.setAttribute("bgcolor", "grey")
  })
})


var btn = document.querySelector('#adicionar-paciente')

btn.addEventListener('click', function(event){
  event.preventDefault() //impede a pagina de ser carregada

  var campoNome = document.querySelector("#campo-nome")
  var campoPeso = document.querySelector("#campo-peso")
  var campoAltura = document.querySelector("#campo-altura")

  var pacienteNovo = "<tr class='paciente'>"+
                        "<td class='info-nome'>"+campoNome.value+"</td>"+
                        "<td class='info-peso' id='peso-2'>"+campoPeso.value+"</td>"+
                        "<td class='info-altura' id='altura-2'>"+campoAltura.value+"</td>"+
                        "<td class='info-imc' id='imc-2'></td>"+
                    "</tr>"

  // var tabela = document.getElementsByNameTag('table')[0]
  // var table = document.querySelectorAll('table')[0] retorna um array mas pega todos os elemento ou por class tag ou id
  var tabela = document.querySelector('table') // seleciona por tag class e id pega somente o primeiro

  // .innerHTML assim como o textContent pega os valores mas esse pega os codigos html tambem

  tabela.innerHTML = tabela.innerHTML + pacienteNovo

  campoNome.value = ""
  campoPeso.value = ""
  campoAltura.value = ""
})
