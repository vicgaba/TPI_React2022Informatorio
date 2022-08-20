import react from 'react';
import NotFound from '../images/NotFound.jpeg';

function Error404(){
    return(
        <>
            <div>
                <h1>Ha ocurrido un error</h1>
                <h2>Recurso no encontrado</h2>
                <img src={NotFound} class="img-fluid" alt="404Reource Not Found"></img>
            </div>
        </>
    )
}

export default Error404