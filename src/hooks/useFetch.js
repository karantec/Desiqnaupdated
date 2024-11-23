import axios from 'axios';


const useFetch= async (url)=>{
    const reponse  = await axios.get(url);
    const {data} =  await reponse;

    return {data}

}



export default useFetch;