import leia from "readline-sync"

var valor_compra = leia.questionFloat("Informe o valor do produto: ");

if (valor_compra < 20){
console.log("O valor de venda do produto será: R$"+ (valor_compra*1.45));

}else{
    console.log("O valor de venda do produto será: R$"+ (valor_compra*1.30));
}