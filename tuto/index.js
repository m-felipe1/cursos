//LONGITUD STRING

//let descripcion = 'hola mundo'
//console.log(descripcion.length);
// console.log(descripcion.split('').length);
// console.log(Array.from(descripcion).length);

// function contarCaracteres(cadena = '') {
//     if(!cadena) {
//         console.warn('no ingresaste nada')
//     }
//     else{
//         console.info(`la cadena ${cadena} tiene ${cadena.length} caracteres`)
//     }
// }
// contarCaracteres('hola mundo')

// const contarCaracteres = (cadena = '') => 
//     (!cadena)
//          ?console.warn('no ingresaste nada') 
//          :console.info(`la cadena ${cadena} tiene ${cadena.length} caracteres`)

// contarCaracteres('hola mundo')

//DEVOLVER X NUMERO DE CARACTERES DE UN STRING

// let descripcion = 'hola mundo'
//console.log(descripcion.substr(0,7));

// const devolverXNumeros = (cadena = '', longitud = undefined) =>
//     (!cadena)
//         ?console.warn('no ingresaste nada')
//         :console.info(cadena.slice(0,longitud))

// devolverXNumeros('hola mundo', 4)

//SEPARAR POR [], UN STRING

// let descripcion2 = 'hola mundo'
// let array = descripcion.split(' ')
// console.log(array);

// const separaString = (cadena = '', separador = undefined) =>
//     (!cadena)
//         ?console.warn('no ingresaste nada') 
//         :(separador === undefined)
//             ?console.warn('no ingresaste el caracter separador')
//             :console.info(cadena.split(separador))

// separaString('hola hola hola hola', ' ') 

//DUPLICAR X NUMERO DE VECES UN STRING



// const duplicarString = (cadena = '', numeroDeVeces = undefined) =>
//     (!cadena)
//         ?console.warn('no ingresaste nada') 
//         :(numeroDeVeces === undefined)
//             ?console.warn('no ingresaste el numero de veces a duplicar')
//             :console.info(cadena.repeat(numeroDeVeces))

// duplicarString('hola mundo', 4)

// const repetirTexto = (cadena = '', veces = undefined) => {
//     if(!cadena) return console.warn('no ingresaste nada')
//     if(veces === undefined) return console.warn('no ingresaste el numero de veces a duplicar')
//     if(Math.sign(veces) === -1) return console.error('el numero de veces no puede ser negativo')

//     for( i=0; i < veces; i++){
//         console.info(`${cadena}, ${i}`)
//     }  
// }

// repetirTexto('hola mundo', 10)

//INVERTIR PALABRAS DE UN STRING

// const invertirPalabras = (cadena = '') =>
//     (!cadena)
//         ?console.warn('no ingresaste nada')
//         //split(arreglo)--reverse(arreglo invertido)--join(une arreglo)
//         :console.info(cadena.split("").reverse().join(""))

// invertirPalabras('hola mundo')

// BUSCAR PALABRAS
// const buscarPalabra = (cadena = '', texto = '') => {
//     if(!cadena) return console.warn('no ingresaste nada')
//     if(!texto) return console.warn('no ingresaste la palabra a buscar')
   
//     let i = 0
//     let contador = 0

//     while(i !== -1) {
//         i = cadena.indexOf(texto,i)
//         if(i !== -1) {
//             i++
//             contador++
//         }
//     }
//     return console.info(`la palabra ${texto} se repite ${contador} veces`)
// }

//buscarPalabra('buenas hola como estas hola que haces hola donde estas hola y hola', 'hola')

//PALINDROMO

// const palindromo = (palabra = '') => {
   
//    if(palabra == palabra.split('').reverse().join('')) {
//         console.info('es un polindromo')
//    }else{
//     console.info('no es un polindromo')
//    }
    
// }   

// palindromo('')

// const palindromo2 = (palabra = '') => {
//     if(!palabra) return console.warn('no ingresaste nada')
//     palabra = palabra.toLowerCase()

//     let alReves = palabra.split('').reverse().join('')
 
//     return (palabra === alReves)
//         ?console.info(`si es palindromo palabra original ${palabra}, palabra al reves ${alReves}`)
//         :console.info(`no es palindromo palabra original ${palabra}, palabra al reves ${alReves}`)

// }

// palindromo2('salas')

//ELIMINAR PATRON

// const eliminarPatron = (texto = '', patron = '') =>
//     (!texto)
//         ?console.warn('no ingresaste nada')
//         :(!patron)
//             ?console.warn('no ingresaste el patron a retirar')
//             :console.info(texto.replace(new RegExp(patron, 'ig'), ''))

// eliminarPatron('xyz1, xyz2, xyz3, xyz4, xyz5', 'xyz')

//NUMERO ALEATORIO

// const numeroAleatorio = (numeroMax, numeroMin) => 
//    console.log(Math.round(Math.random()*(numeroMax-numeroMin)+numeroMin))   

// numeroAleatorio(600, 501)

//NUMERO IGUAL EN LOS SENTIDOS

// const comparar = (num) => { 
// let numInv = (String(num).split('').reverse().map((num)=>{
//     return Number(num)
//   }))  
//   console.log(numInv);
//   let namber = numInv.join('')
//   if(!num)return console.warn('escribe un numero')
//   if(typeof num !== 'number') return console.error(`el valor '${num}' ingresado NO es un numero`)
//   if(num == namber)return console.info(`Si, si es igual el numero ${num} y el numero ${namber}`) 
//   if(num !== namber) return console.info(`No, no es igual el numero ${num} y el numero ${namber}`)
// }
//  comparar(1234567654321)

//  const comparar2 = (num) => { 
//     if(!num)return console.warn('escribe un numero')
//     if(typeof num !== 'number') return console.error(`el valor '${num}' ingresado NO es un numero`)
    
//     num = num.toString()
//     let numInv = num.split('').reverse().join('')

//     return (num === numInv)
//       ?console.info(`Si, si es igual el numero ${num} y el numero ${numInv}`) 
//       :console.info(`No, no es igual el numero ${num} y el numero ${numInv}`)
//   }
//    comparar2(1234567654321)

 //CALCULAR FACTORIAL

//const factorial = (numero) => {
//   if(!numero) return console.warn('escribe un numero')
//   if(typeof numero !== 'number') return console.error(`el valor '${numero}' ingresado NO es un numero`)
//   if(numero === 0) return console.error(`el numero '${numero}' no puede ser 0`)
//   if(Math.sign(numero) === -1) return console.error(`el numero '${numero}' no puede ser negativo`)

/*   let factorial = 1
  for(let i = numero; i > 1; i--) {
    factorial *= i
  }
  return console.info(`el factorial de ${numero} es ${factorial}`)

}  
console.time('r')
factorial(100)
console.timeEnd('r') */

  //NUMERO PRIMO

//const primos = (numero) => {
//   if(!numero) return console.warn('ingresa un numero')
//   if(typeof numero !== 'number') return console.error(`el valor ingresado ${numero} no es un numero`)
//   if(Math.sign(numero) === -1) return console.error(`el valor ingresado ${numero} no puede ser negativo`)
/*   if (numero === 0 || numero === 1 || numero === 4)
    return console.info(`el numero ${numero} no es un numero primo`)
    for (let i = 2; i < numero/2; i++) {
      if (numero % i == 0) return console.info(`el numero ${numero} no es un numero primo`)
    }
    return console.info(`el numero ${numero} es un numero primo`)
}
 primos(97) */

  // NUMERO PAR O IMPAR

// const parOImpar = (numero) => {
//   if(!numero) return console.warn('ingresa un numero')
//   if(typeof numero !== 'number') return console.error(`el valor ingresado ${numero} no es un numero`)
//   return ((numero %2) === 0)
//     ?console.info(`el numero ${numero} es un numero par`)
//     :console.info(`el numero ${numero} no es un numero par`)
// }
//  parOImpar(88)

  //CONVERTIR GRADOS

// const convertirGrados = (grados, unidad) => {
//   if(!grados) return console.warn('ingresa un grado a convertir')
//   if(typeof grados !== 'number') return console.warn(`el valor ingresado ${grados} no es un numero`)
//   if(!unidad) return console.warn('no ingresaste el tipo de unidad a convertir')
//   if(typeof unidad !== 'string') return console.warn(`el valor ingresado '${unidad}' no es un valor de unidad`)
//   if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn(`el valor ingresado '${unidad}' no es un valor de unidad valido`)

//   if(unidad === 'C') { 
//     let gradosF = Math.round(((grados)*(9/5))+32)
//     console.info(`${grados}° celcius equivalen a ${gradosF}° grados Fahrenheit`)
//   }else if(unidad === 'F') {
//     let gradosC = Math.round((grados-32)*(5/9))
//     console.info((`${grados}° Fahrenheit equivalen a ${gradosC}° grados celcius`))
//   }
  
// }

// convertirGrados(9,'C')


  //CONVERTIR BINARIO

// const convertirBunarioDecimal = (numero,base) => {
//   if(base === 2) {
//     console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
//   }else if(base === 10) {
//     console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`)
//   }else{
//     console.error('el tipo de base a convertir no es valido')
//   }
// }

// convertirBunarioDecimal(114,10)

  //DESCUENTO

// const descuento = (porcentaje, numero) => { 
//   resultado = (numero*porcentaje)/100
//   console.info(`el ${porcentaje}% de ${numero} es ${resultado} `)
// }

// descuento(35.5, 187)


  //CONTAR ANIOS

// const aniosPasados = (fecha) => {
//   if(!fecha) console.warn('ingresa una fecha')
//   if(!(fecha instanceof Date)) console.warn(`el valo q ingresaste '${fecha}' no es una fecha valida`)

//   let hoyMenosFecha = new Date().getTime()-fecha.getTime()
//   let aniosEnMs = 1000*60*60*24*364
//   let aniosLegibles = Math.floor(hoyMenosFecha/aniosEnMs)
  
//   return (Math.sign(aniosLegibles)=== -1)
//     ?console.info(`faltan ${Math.abs(aniosLegibles)} años para el ${fecha.getFullYear()}`)
//     :(Math.sign(aniosLegibles)=== 1)
//       ?console.info(`han pasado ${aniosLegibles} años desde ${fecha.getFullYear()}`)
//       :console.info(`estamos en el año actual ${fecha.getFullYear()}`)
// }

// aniosPasados(new Date(1996,3,29))

  //BUSCAR VOCALES Y CONSONANTES

// const contarCaracteres = (cadena) => { 
// let vocales = cadena.match(/[aeiou]/g).length
// let consonantes = cadena.match(/[qwrtypsdfghjklzxcvbnm]/g).length
    
//    console.info(`el texto '${cadena}' tiene ${vocales} vocales y ${consonantes} consonantes`)
// }

// contarCaracteres('hola mundo')

// const buscarCaracteres = (cadena) => {
//   let vocales = 0
//   let consonantes = 0
//   cadena = cadena.toLowerCase()
//   for(let letra of cadena) {
//     if(/[aeiou]/.test(letra)) {
//       vocales++
//     }
//     if(/[qwrtypsdfghjklzxcvbnm]/.test(letra)) {
//       consonantes++
//     }
//   }
//   return console.info({
//     cadena,
//     vocales,
//     consonantes
//   })
// }

// buscarCaracteres('hola mundo')

//   //NOMBRE VALIDO

// const nombreValido = (nombre) => {
//   if (!nombre)return console.warn('no ingresaste un nombre')
//   if(typeof nombre !== 'string')return console.error(`lo que ingresaste '${nombre}' no es un nombre`)

//   let expReg = /^[A-Za-zÑñáéíóúÁÉÍÓÚÜü\s]+$/g.test(nombre)

//   return (expReg)
//   ?console.info(`'${nombre}' es un nombre valido`)
//   :console.warn(`'${nombre}' NO es un nombre valido`)
// }

// nombreValido()

  //VALIDA CORREO


  // const validarCorreo = (correo) => {
  //   if (!correo)return console.warn('no ingresaste un email')
  //   if(typeof correo !== 'string')return console.error(`lo que ingresaste '${correo}' no es un correo`)
  
  //   let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo)
  
  //   return (expReg)
  //   ?console.info(`'${correo}' es un email valido`)
  //   :console.warn(`'${correo}' NO es un email valido`)
  // }
  
  // validarCorreo('pipe.radoom@gmail.com')

   //VALIDAR CIERTO PATRON


//   const validarPatron = (cadena = '', patron = undefined) => {
//     if (!cadena)return console.warn('no ingresaste un texto a evaluar')
//     if(typeof cadena !== 'string')return console.error(`lo que ingresaste '${cadena}' no es un texto que se pueda evaluar`)
//     if(patron === undefined) return console.warn('no ingresaste un valor a evaluar')
//     if(!(patron instanceof RegExp)) return console.error(`el valor '${patron}' ingresado no es una expresion regular`)
    
//     let expReg = patron.test(cadena)
  
//     return (expReg)
//     ?console.info(`'${cadena}' cumple con el patron ingresado`)
//     :console.warn(`'${cadena}' NO cumple con el patron ingresado`)
//   }
// validarPatron('pipe.radoom@gmail.com', /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i)


    //ARRAY DEVUELVE ELEVADO AL 2

// const elevarAlCuadrado = (numeros = undefined) =>{
//   if(numeros === undefined) return console.warn('no ingresate el arreglo')
//   if(!(numeros instanceof Array)) return console.error('el valor ingresado no es un arreglo')
//   if(numeros.length === 0) return console.error('el arreglo esta vacio')

//   for (const num of numeros) {
//     if(typeof num !== 'number') return console.error(`el valor '${num}' ingresado, NO es un numero`)
//   }

//   const nuevo = numeros.map(el => el*el)
//   return console.info(`arreglo original: ${numeros},\narreglo elevado al cuadrado ${nuevo}`)
    
// }

// elevarAlCuadrado([1,2,3,4,5,6,10,])

    //NUMERO MAYOR Y NUMERO MENOR

// const evaluarNumeros = (numeros) =>{
//   console.log(`el numero menor es '${Math.min(...numeros)}'\ny el mayor es '${Math.max(...numeros)}'`);
// }

// evaluarNumeros([1, 4, 5, 99, -60, -120, 1699])

    //SEPARAR ARREGLO EN PAR O IMPAR

// const paresEImpares = (numeros) =>{
//   let pares = []
//   let impares = []
//   numeros.forEach(element => {
//     if((element %2) === 0){
//       pares.push(element)
//     }
//     else{
//       impares.push(element)
//     }
//     console.log(impares);
//   });
// }

// paresEImpares([1,2,3,4,5,6,7,8,9,0])

// const paresEImpares = (numeros) =>{
//   impares = numeros.filter(num => num % 2 === 1)
//   pares = numeros.filter(num => num % 2 === 0)
//   console.info({
//     pares,
//     impares
//   })
// }

// paresEImpares([1,2,3,4,5,6,7,8,9,0])

    //OREDEN ASCENDENNTE Y DESCENDENTE

// const ordenarAscendeteDescendente = (numeros) =>{
//   menorAMayor = numeros.map(el => el).sort()
//   mayorAMenor = numeros.map(el => el).sort().reverse()

// console.info({
//  menorAMayor,
//  mayorAMenor
// })
// }

// ordenarAscendeteDescendente([1,7, 5,7,8,6])

    //ELIMINAR VALORE DUPLICADOS

// const eliminarDuplicados = (valores) =>{

//   if(valores === undefined) return console.warn('no ingresate el arreglo')
//   if(!(valores instanceof Array)) return console.error('el valor ingresado no es un arreglo')
//   if(valores.length === 0) return console.error('el arreglo esta vacio')
//   if(valores.length === 1) return console.warn('el arreglo debe tener almenos 2 elementos')

  // resultado = valores.filter((item,index)=>{
  //   return valores.indexOf(item) === index;
  // })

  // resultado = valores.filter((value, index, self) => self.indexOf(value) === index)

  // resultado = [...new Set(valores)]

  //  console.info(resultado);
// }

// eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])

    //PROMEDIO DE UN ARREGLO NUMERICO

// const promediar = (numeros) =>{
//   resultado = eval(numeros.join('+'))/numeros.length
//   console.info(resultado);
// }

// promediar([9,8,7,6,5,4,3,2,1,0])

// const promediar = (numeros) =>{
//   resultado = numeros.reduce((total, num, index, numeros) =>{
//     total += num
//     if(index === numeros.length-1){
//       return console.info(`el promedio de ${numeros.join('+')} es ${total/numeros.length}`)
//     }else{
//       return total
//     }
//   })
  
// }

// promediar([9,8,7,6,5,4,3,2,1,0])


 //    CLASE

// class Pelicula {
//   constructor({id, titulo, director, estreno, pais, generos, calificacion}){
//     this.id = id,
//     this.titulo = titulo,
//     this.director = director,
//     this.estreno = estreno,
//     this.pais = pais,
//     this.generos = generos,
//     this.calificacion = calificacion

//     this.validarIMDB(id)
//     this.validarTitulo(titulo)
//     this.validarDirector(director)
//     this.validarEstreno(estreno)
//     this.validarPais(pais)
//     this.validarGeneros(generos)
//     this.validarCalificacion(calificacion)
//   }

//   static get listaGeneros(){
//     return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
//   }

//   static generosAceptados(){
//     return console.info(`los generos aceptados son: ${Pelicula.listaGeneros.join(',')}`)
//   }

//   validarCadena(propiedad, valor){
//     if(!valor) return console.warn(`${propiedad} '${valor}' esta vacio`)
//     if(typeof valor !== 'string') return console.error(`${propiedad} '${valor}' ingresado, NO es una cadena de texto`)

//     return true
//   }

//   validarLongitudCadena(propiedad, valor, longitud){
//     if(valor.length > longitud) return console.error(`${propiedad} '${valor}' excede el numero de caracteres permitidos (${longitud})`)
//     return true
//   }

//   validarNumero(propiedad, valor){
//     if(!valor) return console.warn(`${propiedad} '${valor}' esta vacio`)
//     if(typeof valor !== 'number') return console.error(`${propiedad} '${valor}' ingresado NO es un numero`)

//     return true
//   }

//   validarArreglo(propiedad, valor){
//     if(!valor) return console.warn(`${propiedad} '${valor}' esta vacio`)
//     if(!(valor instanceof Array)) return console.error(`${propiedad} '${valor}' ingresado NO es un arreglo`)
//     if(valor.length === 0) return console.error(`${propiedad} '${valor}' no tiene datos`)

//     for(let cadena of valor){
//       if(typeof cadena !== 'string') return console.error(`el valor '${cadena}' ingresado, NO es una cadena de texto`)
//     }

//     return true
//   }

//   validarIMDB(id){
//     if(this.validarCadena('IMDB id', id)){
//       if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
//         return console.error(`IMDB id '${id}' no es valido debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`)
//       }
//     }
//   }

//   validarTitulo(titulo){
//     if(this.validarCadena('Titulo', titulo)){
//       this.validarLongitudCadena('Titulo', titulo, 100)
//     }
//   }
  
//   validarDirector(director){
//     if(this.validarCadena('Director', director)){
//       this.validarLongitudCadena('Director', director, 50)
//     }
//   }
  
//   validarEstreno(estreno){
//     if(this.validarNumero('Año de estreno', estreno)){
//       if(!(/^([0-9]){4}$/.test(estreno))){
//         return console.error(`Año de estreno '${estreno}' no es valido, debe tener un numero de 4 digitos`)
//       }
//     }
    
//   }

//   validarPais(pais){
//     this.validarArreglo('Pais', pais)
//   }

//   validarGeneros(generos){
//     if(this.validarArreglo('Generos', generos)){
//       for (const genero of generos) {
//         if(!Pelicula.listaGeneros.includes(genero)){
//           console.error(`Genero(s) incorrectos '${generos.join(',')}'`)
//           Pelicula.generosAceptados()
//         }
//       }
//     }
//   }

//   validarCalificacion(calificacion){
//     if(this.validarNumero('Calificacion', calificacion))
//       return (calificacion < 0 || calificacion > 10)
//         ?console.error(`La calificacion tiene que estar en unrango entre 0 y 10`)
//         :this.calificacion = calificacion.toFixed(1)
//   }

//   fichaTecnica(){
//     console.info(`FICHA TECNICA:\nTitulo: '${this.titulo}'\nDirector: '${this.director}'\nEtreno: '${this.estreno}'\nPais: '${this.pais.join('-')}'\nGeneros: '${this.generos.join(',')}'\nCalificacion: '${this.calificacion}'\nId: '${this.id}'`)
//   }

// }

// const misPelis = [
//   {
//     id:'tt9114286',
//   titulo: 'titulo de la pelicula',
//   director: 'director de la pelicula',
//   estreno: 2022,
//   pais: ['colombia'],
//   generos: ['Action'],
//   calificacion: 8.678
//   },
//   {
//     id:'tt9114286',
//   titulo: 'Wakanda Forever',
//   director: 'director de la pelicula',
//   estreno: 2022,
//   pais: ['colombia'],
//   generos: ['Action'],
//   calificacion: 8.678
//   },
//   {
//     id:'tt9114286',
//   titulo: 'titulo de la pelicula',
//   director: 'director de la pelicula',
//   estreno: 2022,
//   pais: ['colombia'],
//   generos: ['Action'],
//   calificacion: 8.678
//   }
// ]
// misPelis.forEach(el => new Pelicula(el).fichaTecnica())


 




