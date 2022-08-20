import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url){
  
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [total, setTotal] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        setError(null)
        axios
          .get(url)
          .then((response) => {
            response.data && setData(response.data.articles) 
            response.data && setTotal(response.data.totalResults)
            setLoading(false)
          })
          .catch((error) => {
            setLoading(false)
            setError(error)
          })
      }, [url])

      return{data, loading, error, total}

}

export default useFetch;