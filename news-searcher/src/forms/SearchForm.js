import { useState, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { Card, Button, Spinner, Alert } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function SearchForm(props){
    const [ url, setUrl ] = useState('');
    const { data: datos, loading, error, total } = useFetch(url);
    const [searchEnable, setSearchEnable] = useState(false);
 //   const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    console.log('total ' + total);

    const search = useRef();

    const cargarMas = (e) => {
        e.preventDefault()
        setPage(page + 1)
      }

    const send = (e) =>{
        setUrl(`https://newsapi.org/v2/everything?q=${search.current?.value}&apiKey=5187417e7c2e44d6bc7cb2137944623d&page=1&pageSize=10`)
        console.log(search.current?.value);
    }

    const checkLength = (e) =>{
        e.target.value.length > 2 ? setSearchEnable(true) : setSearchEnable(false);
//        setSearch(e.target.value);
    }


    return(
        <>
            <div className='container'>
                <h1>Buscador:</h1>
                <input
                    type="text"
                    placeholder="Ingrese busqueda" 
                    ref={search}
                    onChange={checkLength}
                />
            </div>
            <button type="submit" onClick={send} disabled={!searchEnable}>Buscar</button>
{/*             <div className="py-5">
        <div className="container">
        <div className="row hidden-md-up"> */}

        <div>{total && (<div><h3>Estás viendo 10 noticias de {total} resultados</h3></div>)}</div>
        
        {datos && datos.length > 0 ? (
            datos.map((item) => {
            return(
                    <Card>
                            <Card.Body>
                                <Container>
                                <Row>
                                    <Col xl={8}>
                                        <Card.Title>Título: {item.title}</Card.Title>
                                        <Card.Text>Descripción: {item.description}</Card.Text>
                                    </Col>
                                    <Col xl={4}>
                                        <Card.Img variant="right" src={item.urlToImage} style={{ height: "100px", minWidth: "150px", maxWidth: "150px"}}/>
                                    </Col>
                                </Row>
                                </Container>
                            </Card.Body>
                    </Card>
                )
            }
            )
            ) : (<Alert>No hay datos que mostrar </Alert>)
        }
{/*         </div>
        <Button variant="succes" onClick={cargarMas}>Cargar Más</Button>
        </div>
        </div> */}
        </>
    )
}

export default SearchForm;