document.getElementById('calcular').addEventListener('click', () =>{
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    const op = document.getElementById('op').value
    let resultados = num1+op+num2
    resultados = eval(resultados)

    document.getElementById('result').innerHTML = resultados
})




