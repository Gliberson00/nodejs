//CLEAR INTERVAL  Cancelar intervalo


const timeOut = 1000
const checking = () => console.log('checking!')

let inetrval = setInterval(checking, timeOut)


setTimeout( () => clearInterval(interval), 4000)

