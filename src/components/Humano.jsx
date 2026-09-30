import './Humano.css'

function Humano()
{
    class Humano{
        nome;
        curso;
        email;
        
        constructor(nome, curso, email)
        {
            this.nome = nome;
            this.curso = curso;
            this.email = email;
        }
    }


    const Humano1 = new Humano("Ana", "Engenharia de Software", "Ana@gmail.com");

    return(
        
        <div className="container">
            <h1 className="x1"> DISCENTES  </h1>
            <div className="caixa">
                <p>  NOME :  { Humano1.nome } </p>
                <br />
                <p> CURSO : {Humano1.curso }  </p>
                <br />
                <p> EMAIL :  {Humano1.email } </p>
            </div>

        </div>
    )
}

export default Humano;
