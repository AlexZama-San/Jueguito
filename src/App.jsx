import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'
import { useForm } from './hooks/useForm'

function App() {
  const [numeros, setnumeros] = useState([
    {id: "1", numero: "1", encontrado: false},
    {id: "2", numero: "2", encontrado: false},
    {id: "3",numero: "3", encontrado: false},
    {id: "4",numero: "4", encontrado: false},
    {id: "5",numero: "5", encontrado: false},
    {id: "6",numero: "6", encontrado: false},
    {id: "7",numero: "7", encontrado: false},
    {id: "8",numero: "8", encontrado: false},
    {id: "9",numero: "9", encontrado: false},
    {id: "10",numero: "10", encontrado: false},
    {id: "11",numero: "11", encontrado: false},
    {id: "12",numero: "12", encontrado: false},
    {id: "13",numero: "13", encontrado: false},
    {id: "14",numero: "14", encontrado: false},
    {id: "15",numero: "15", encontrado: false},
    {id: "16",numero: "16", encontrado: false},
  ])

  useEffect(() => {
    Swal.fire("Bienvenido", "Para iniciar el juego, presiona el boton de iniciar juego, para cambiar los numeros escribe el numero que desees en el cuadro negro y, posteriormente, haz click en el boton que tendra el numero", "success")
  
  }, [])
  

  const [ocultos, setocultos] = useState(false)

  const [intentos, setintentos] = useState(10)

  const {formState, onInputChange, onResetForm}= useForm(
    {
      numero: "0"
    }
  )

  console.log(numeros);

  const iniciarJuego = () => {
    Swal.fire("Juego iniciado", "Tienes 10 intentos para adivinar los numeros, escribe el numero en el cuadro de entrada despues, la casilla en la que crees que puede estar ese numero", "success")
    setocultos(true)
    onResetForm()
  }

  const comprobarNumero = (numero) => {
   let encontrados = 0
    if (numero === formState.numero) {
      Swal.fire("Correcto", "Has acertado el numero", "success")
      let index = numeros.findIndex((num) => num.numero === numero)
      let newNumeros = [...numeros]
      newNumeros[index] = {...newNumeros[index], encontrado: true}
      setnumeros(newNumeros)
      encontrados = numeros.filter((num) => num.encontrado === true).length
      console.log(encontrados)
      if (encontrados === 15) {
        Swal.fire("Has ganado", "Has encontrado todos los numeros", "success")
        setocultos(false)
        newNumeros = [...numeros]
        newNumeros.map((num) => num.encontrado = false)
        setnumeros(newNumeros)
      }
    } else {
      Swal.fire("Incorrecto", "Has fallado y perdiste 1 intento", "error")
      setintentos(intentos - 1)
      if (intentos === 0) {
        Swal.fire("Has perdido", "Has agotado todos tus intentos", "error")
        setocultos(false)
        let newNumeros = [...numeros]
        newNumeros.map((num) => num.encontrado = false)
        setnumeros(newNumeros)
      }
      return false
      }
    }

    const updateNumeros = (numero) => {
      console.log(!!numeros.find((num) => num.numero === formState.numero));
      if (!!numeros.find((num) => num.numero === formState.numero)) {
        Swal.fire("Error", "El numero ya esta en uso", "error")
        return false
      }
      console.log(numero)
      let index = numeros.findIndex((num) => num.numero === numero)
      let newNumeros = [...numeros]
      newNumeros[index] = {...newNumeros[index], numero: formState.numero}
      setnumeros(newNumeros)
    }


  
  return (
  <>
  <h1 style={ocultos? {display: true}:{display: "none"}}>intentos: {intentos}</h1>
  <input type="number" placeholder='introdusca un numero' name='numero' value={formState.numero} onChange={onInputChange}/>
    <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
      <button className="btn btn-primary" disabled={numeros[0].encontrado} onClick={ocultos? () => comprobarNumero(numeros[0].numero) : () => updateNumeros(numeros[0].numero)}>
        {ocultos? "?" : numeros[0].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[1].encontrado} onClick={ocultos? () => comprobarNumero(numeros[1].numero) :() => updateNumeros(numeros[1].numero)}>
        {ocultos? "?" :numeros[1].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[2].encontrado} onClick={ocultos? () => comprobarNumero(numeros[2].numero) :() => updateNumeros(numeros[2].numero)}>
        {ocultos? "?" :numeros[2].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[3].encontrado} onClick={ocultos? () => comprobarNumero(numeros[3].numero) :() => updateNumeros(numeros[3].numero)}>
        {ocultos? "?" :numeros[3].numero}
      </button>
    </div>
  </div>
  <div className="row align-items-center">
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[4].encontrado} onClick={ocultos? () => comprobarNumero(numeros[4].numero) :() => updateNumeros(numeros[4].numero)}>
        {ocultos? "?" :numeros[4].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[5].encontrado} onClick={ocultos? () => comprobarNumero(numeros[5].numero) :() => updateNumeros(numeros[5].numero)}>
        {ocultos? "?" :numeros[5].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[6].encontrado} onClick={ocultos? () => comprobarNumero(numeros[6].numero) :() => updateNumeros(numeros[6].numero)}> 
        {ocultos? "?" :numeros[6].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[7].encontrado} onClick={ocultos? () => comprobarNumero(numeros[7].numero) :() => updateNumeros(numeros[7].numero)}>
        {ocultos? "?" :numeros[7].numero}
      </button>
    </div>
  </div>
  <div className="row align-items-end">
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[8].encontrado} onClick={ocultos? () => comprobarNumero(numeros[8].numero) :() => updateNumeros(numeros[8].numero)}>
        {ocultos? "?" :numeros[8].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[9].encontrado} onClick={ocultos? () => comprobarNumero(numeros[9].numero) :() => updateNumeros(numeros[9].numero)}>
        {ocultos? "?" :numeros[9].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[10].encontrado} onClick={ocultos? () => comprobarNumero(numeros[10].numero) :() => updateNumeros(numeros[10].numero)}>
        {ocultos? "?" :numeros[10].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[11].encontrado} onClick={ocultos? () => comprobarNumero(numeros[11].numero) :() => updateNumeros(numeros[11].numero)}>
        {ocultos? "?" :numeros[11].numero}
      </button>
    </div>
  </div>
  <div className="row align-items-end">
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[12].encontrado} onClick={ocultos? () => comprobarNumero(numeros[12].numero) :() => updateNumeros(numeros[12].numero)}>
        {ocultos? "?" :numeros[12].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[13].encontrado}onClick={ocultos? () => comprobarNumero(numeros[13].numero) :() => updateNumeros(numeros[13].numero)}>
        {ocultos? "?" :numeros[13].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[14].encontrado}onClick={ocultos? () => comprobarNumero(numeros[14].numero) :() => updateNumeros(numeros[14].numero)}>
        {ocultos? "?" :numeros[14].numero}
      </button>
    </div>
    <div className="col">
    <button className="btn btn-primary" disabled={numeros[15].encontrado}onClick={ocultos? () => comprobarNumero(numeros[15].numero) :() => updateNumeros(numeros[15].numero)}>
        {ocultos? "?" :numeros[15].numero}
      </button>
    </div>
  </div>
</div>

    <button className='btn btn-secondary' onClick={iniciarJuego} disabled={ocultos? true : false}>
      Iniciar Juego
    </button>
  </>
  )
}

export default App
