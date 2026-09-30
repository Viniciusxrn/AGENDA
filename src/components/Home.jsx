import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home()
{
    const navigate = useNavigate();


    const handleClick1 = () =>
    {
        navigate('/Humano');
    }

    const handleClick2 = () =>{
        navigate('/App');
    }

    return(
        <>
            <br />
            <header className="x2"> AGENDA UNI-JORGE</header>
            <br /><br />
            <div className="nav">
                <button>HOME</button>
                <button onClick={ handleClick1 }>HUMANO </button>
                <button onClick={ handleClick2 }>REGISTRO</button>
            </div>
        </>
    )
}

export default Home;

