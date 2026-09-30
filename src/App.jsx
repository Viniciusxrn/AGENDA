import './App.css'
import { useState } from 'react'
import Home from './components/Home';
function App() {

  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [telefone,setTelefone] = useState();


  const [mensagem, setMensagem] = useState();


  const handleChange = (event) =>
  {
    setCpf(event.target.value);
  }

  const handleChange1 = (event) =>
  {
    setRg(event.target.value);
  }

  const handleChange2 = (event) =>
  {
    setTelefone(event.target.value);
  }


  const handleClick = () =>
  {
    if((cpf.length == 11 ) && (rg.length >= 7 && rg.length <= 10) && (telefone.length == 11) )
    {
      setMensagem("TUDO CERTO !");
    }
    else
    {
      setMensagem("ALGUMA COISA ESTÁ ERRADA, OLHE O CAMPO CPF, RG OU TELEFONE");
    }
  }
  

  return (
    <div className="container">
      <br />
      <h2 className="x3"> REGISTRO </h2>
      <br />
      <div className="section"> 
        <br />
        <input  className="e1" placeholder="NOME COMPLETO" type="text" />
        <br />
        <input className="e1" placeholder="NOME DO PAI" type="text" />
        <br />
        <input className="e1"  placeholder="NOME DA MÃE " type="text" />
        <br />
       <input className="e1" placeholder="PAIS DE ORIGEM" type="text"  />
        <br />
        <input className="e1" type="text"  placeholder="UF DE ORIGEM" />
        <br />
        <input className="e1" type="text" placeholder="CIDADE DE ORIGEM" />
        <br />
        <input onChange={ handleChange }   className="e1" type="number"  placeholder="CPF, SEM PONTUAÇAO"/>
        <br />
        <input  onChange={ handleChange1 } className="e1" type="number" placeholder="RG, SEM PONTUAÇÃO" />
        <br />
        <input onChange={ handleChange2 }  className="e1"  type="number" placeholder="TELEFONE" />
        <br />
        <input  className="e1"  placeholder="EMAIL" type="email" required />
        <br />
        <input className="e1" type="text" placeholder="ESCREVA SUA HOME PAGE" />
        <br />
        <p className="p1"> MENSAGEM : { mensagem }</p>
        <br />
        <button onClick={ handleClick }  className="ok1">CONFIRMAR </button>
      </div>  
      <br /><br />
      <button className="ok2">ENVIAR</button>  
      <br />
    </div>
  )
}

export default App
