console.log("probando")


// imprimirAlgo()

// function imprimirAlgo() {

//   console.log("ejecutando funcion")
//   console.log("patata")

// }

// // imprimirAlgo()

// console.log("tomate")

// imprimirAlgo()



// console.log("esto se ejecuta primero") // 0.2s
// console.log("esto se ejecuta despues") // 0.3s



// JAVASCRIPT ES UN LENGUAJE SINCRONO pero TIENE ALGUNOS COMPORTAMIENTOS ASINCRONOS

// 1. manuales, podemos replicar asincronia en JS
// 2. automaticos, como por ejemplo envio de data (M2)


// setTimeout
// recibe 2 argumentos:
// 1. la funcion a ejecutar en un momento especifico
// 2. el tiempo (en milisegundos) que esperará JS antes de ejecutar la funcion


// window.setTimeout(() => {

// console.log("antes del setTimeout")

// setTimeout(() => { 
//   console.log("han pasado 2 segundos")
// }, 2000)

// setTimeout(() => {
//   console.log("a los 0 segundos")
// }, 0)

// console.log("despues del setTimeout")

// JS ejecuta primero TODAS las operaciones sincronas y luego ejecuta TODAS las operaciones asincronas en el tiempo indicado.

// setInterval

// let control = 0;

// let intervalId = setInterval(() => {
//   control++
//   console.log("patata", control)
//   // buscamos el h1
//   // const h1Node = document.querySelector("#timer")
//   // incrementamos en 1
//   // h1Node.innerText++

//   // if (h1Node.innerText === "5") {
//   //   // en string porque todo lo que recibimos del DOM siempre es un string
//   //   clearInterval(intervalId)
//   // }

//   if (control === 5) {
//     clearInterval(intervalId)
//   }

// }, 1000)

// para detener intervalos tenemos una funcion que se llama clearInterval
// clearInterval(elIdDelIntervalo)

//

// como podriamos hacer un efecto que este intervalo solo ocurrra 5 veces?

// 1. con algun valor que esté siendo alterado dentro del mismo intervalo
// 2. con un setTinmeout para detener el intervalo anterior
// setTimeout(() => {
//   clearInterval(intervalId)
// }, 5000)


// const timeoutId = setTimeout(() => { 
//   console.log("han pasado 2 segundos")
// }, 2000)

// document.querySelector("#btn-stop-timeout").addEventListener("click", () => {
//   console.log("deteniendo el timeout")
//   clearTimeout(timeoutId)
// })


const containerNode = document.querySelector("#container")
containerNode.style.backgroundColor = "darkgray"
containerNode.style.height = "300px"
containerNode.style.position = "relative"

const cosaNode = document.querySelector("#cosa")
cosaNode.style.width = "60px";
cosaNode.style.height = "60px";
cosaNode.style.backgroundColor = "black";
cosaNode.style.position = "absolute";

let posicionCosaY = 20
cosaNode.style.top = `${posicionCosaY}px`;

let posicionCosaX = 20
cosaNode.style.left = `${posicionCosaX}px`;

setInterval(() => {
  console.log("ejecutando intervalo")
  // quiero moverlo hacia la derecha
  // quiero cambiar su posición style.left
  posicionCosaX += 2
  cosaNode.style.left = `${posicionCosaX}px`;

  posicionCosaY += 2
  cosaNode.style.top = `${posicionCosaY}px`;

}, 50)