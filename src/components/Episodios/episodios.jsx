import { useState, useEffect} from "react";
import RMSearch from '../../assets/RickandMortySearch.png';
import TarjetasEpisode from "../TarjetasEpisode/tarjetas-episode";
import './episodios.css';

function Episodios (){

    const [episodes, setEpisodes] = useState(null);
    const [value, setValue] = useState('');
    const [validar, setValidar] = useState(false);
    const [itemBuscado, setItemBuscado] = useState([]); 

    const [lista2, setLista2] = useState([]);

    useEffect(function getEpisodes() {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(response => response.json())
            .then(data => setEpisodes(data.results))
    }, []);
    if(!episodes){return null;}

    const onChange = (event)=>{
        setValue(event.target.value);
    }

    const onSearch = (searchTerm)=>{
        setValue(searchTerm);
        console.log('search ',searchTerm);
    }

    const onShow = (search)=>{
        setValue('');
        const show = episodes.filter(respuesta =>
            {
            if(    
            respuesta.name.toLowerCase()===search.toLowerCase()
            ) {setItemBuscado(respuesta); llenarLista(respuesta.characters)} return true;
            }
        ); 
        setValidar(show);
    }

    
    function llenarLista(respuesta){
        var listapersonajes = [];        
        for(let i = 0; i<6;i++){
            listapersonajes[i] = respuesta[i];
        }
        setLista2(listapersonajes);
       // console.log('prueba de control: '.);
    }
    
    const imprimirLista = lista2.map((character)=><div key={lista2.indexOf(character)} className="col-4 col-lg-3 mb-4"><TarjetasEpisode link={character}/></div>)

    /*
    const filtrar = (terminobusqueda)=>{
        var resultado = episodes.filter((element)=>{
            if( element.name.toLowerCase()===terminobusqueda.toLowerCase() ){
                return element;
            }
        });
        setItemBuscado(resultado);
    }
    */

    /* se puede trabajar asi, pero es mas usado crear una const y añadirle una funcion anonima como arriba    
    function testito (event){
        console.log({value: event.target.value});
    }
    */    
    return (
        <div className="container text-center">
            <h1 className="fw-bold">Episodios</h1>
    
                <div className="row justify-content-center mt-4 mb-4" action="">

                    <div className="col-12 col-lg-4">
                        <label htmlFor="inputSearch" className="visually-hidden">InputSearch</label>
                        <input type="text" className="form-control" id="inputSearch" placeholder="Busqueda" onChange={onChange} 
                               aria-describedby="searchHelp" value={value} autoComplete="off"/>
                        <div className="text-start bg-light text-dark dropdownBox">
                            {
                               episodes.filter(item=>{
                                const searchTerm = value.toLowerCase();
                                const nameC = item.name.toLowerCase();
                                return searchTerm && nameC.startsWith(searchTerm) && nameC !== searchTerm;
                                }).map((values) =>
                                    <div onClick={()=>onSearch(values.name)} key={values.id} className="dropdownItem">{values.name}</div>
                                )
                             }
                        </div>
                        <div id="searchHelp" className="form-text text-start">Ingrese el nombre o el numero del capitulo</div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-secondary mb-3" onClick={()=>onShow(value)} >Buscar</button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {
                        validar && itemBuscado!==null ?
                            <div className="container">
                                <h3> {itemBuscado.name} </h3>
                                <p>
                                    Fecha de emision: {itemBuscado.air_date} <br/>                                                                    
                                </p>
                                <h3 className="mb-4">Personajes Principales</h3>
                            </div>
                             : 
                            <div className="col-8 col-lg-6">
                                <img src={RMSearch} className="d-block w-100" alt="RickandMSearch" />
                            </div>
                    }                    
                </div>
                {
                    validar &&
                    <div className="row">                                   
                                    {imprimirLista}
                    </div>
                }
          
        </div>
    );
}

export default Episodios;