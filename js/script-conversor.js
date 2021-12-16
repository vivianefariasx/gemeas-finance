const valor = document.querySelector('button')

valor.onclick = () => {
var dolar = Number(document.querySelector('input').value.replace('.',','))
  if (dolar < 1) {
      document.querySelector('span').innerHTML = "Valor inválido!"
  } else {
      document.querySelector('span').innerHTML = (dolar * 5.65).toFixed(2) + ' reais'
  }  
}