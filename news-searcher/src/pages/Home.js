import { useState } from 'react'
import SearchForm from "../forms/SearchForm";


function Home(props){

    const [ search, setSearch ] = useState('')
    return(
        <>
            <SearchForm ></SearchForm>
        </>
    )
}

export default Home;