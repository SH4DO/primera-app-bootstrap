import './tarjetas-personaje.css';

function TarjetasPersonaje (props){
    return(
        <div className="card text-light border-dark tarjeta" >
            <img src={props.img} className="card-img-top" alt="profile perfil"/>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text text-secondary">
                        Estado: {props.status}<br/>
                        Especie: {props.specie}<br/>
                        Genero: {props.gender}<br/>
                    </p>
                </div>
        </div>
    );
}

export default TarjetasPersonaje;