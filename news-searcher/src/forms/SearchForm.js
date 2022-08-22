import { useState, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { Card, Button, Spinner, Alert } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InfiniteScroll from 'react-infinite-scroll-component';

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
        setUrl(`https://newsapi.org/v2/everything?q=${search.current?.value}&apiKey=5187417e7c2e44d6bc7cb2137944623d&page=${page}&pageSize=10`)
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
        
{/*         <InfiniteScroll
          dataLength={total}
          next={
            setPage(page + 1),
            send()
          }
          hasMore={true}
          loader={<h4>Loading...</h4>}
        > */}
        {datos && datos.length > 0 ? (
            datos.map((item) => {
            return(
                <Card style={{ marginTop: "10px" }}>
                {/* <Card.Img variant="left" src={item.urlToImage} height="160"/> */}
                <Card.Body>
                  <div style={{ float: 'right', textDecoration: 'none', marginRight: '10px'}}><img className='card-img' src={item.urlToImage} style={{ height: "100px", minWidth: "150px", maxWidth: "150px"}} ></img></div>
                  <Card.Link href={item.url} target='_blank' style={{ textDecoration: 'none'}}>
                    <Card.Title href={item.url}>{item.title}</Card.Title>
                  </Card.Link>
                  <Card.Text>{item.description}<p className='text-muted'>Publicado el: {new Date(item.publishedAt).toLocaleDateString('es-AR')} a las {new Date(item.publishedAt).toLocaleTimeString('es-AR')}</p></Card.Text>
                </Card.Body>
              </Card> 
                )
            }
            )
            ) : (<Alert>No hay datos que mostrar </Alert>)
        }
{/*         </InfiniteScroll> */}

{/*         </div>
        <Button variant="succes" onClick={cargarMas}>Cargar Más</Button>
        </div>
        </div> */}
        </>
    )
}

export default SearchForm;