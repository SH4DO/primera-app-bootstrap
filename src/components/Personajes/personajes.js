import TarjetasPersonaje from '../Tarjetas-personaje/tarjetas-personaje';
import { useEffect, useState } from 'react';
import './personajes.css';
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//var btnActive =true;


function Personajes (){

    const [characters,setCharacters]  = useState(null);
    const [page,setPage] = useState(1);
    const [btnActive, setBtnActive] = useState(true);

    useEffect(function getCharacters(){
        fetch('https://rickandmortyapi.com/api/character/?page='+page)
        .then(response =>response.json())
        .then(data=>setCharacters(data.results))
    },[page]);


    if(!characters){return null;}


    const onChange = ()=>{
        setPage(page+1);
        setBtnActive(false);
    }

    const onChangePrev = ()=>{
        setPage(page-1);   
        if(page<3) {setBtnActive(true); return null;}     
    }

   // console.log(character.results.map);

    const listaCharacters = characters.map((character) =>
            <div className='col-12 col-md-6 col-lg-4 mb-4' key={character.id} >
                <TarjetasPersonaje img={character.image} name={character.name} status={character.status} specie={character.species} gender={character.gender} />
            </div>)
    return(
        <div className="container text-center">
            <h1 className='mt-3 mb-3 fw-bold'>Personajes</h1>
            <button type='button' className='btn btn-secondary  mb-3 me-3 fw-bold fs-5' onClick={onChangePrev}  disabled={btnActive} ><FontAwesomeIcon icon={faAngleLeft}/></button>
            <button className='btn btn-secondary mb-3 me-3 fw-bold fs-5' onClick={onChange}> <FontAwesomeIcon icon={faAngleRight}/></button>            
            <div className='row row-cols-3'>
               {listaCharacters}                
            </div>
        </div>
    );
}

export default Personajes;