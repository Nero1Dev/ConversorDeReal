function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorConvertidoEmReal = valor * 5.24;
    var valorArredondado = valorConvertidoEmReal.toFixed(2);
    //var valorArredondadoEmNumero = parseFloat(valorArredondado);
    //console.log(valorArredondadoEmNumero);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado  em real é R$ " + valorConvertidoEmReal;
    elementoValorConvertido.innerHTML = valorArredondado;
  }