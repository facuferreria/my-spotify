import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDataLayer } from './Hooks/useDataLayer.js';
import '../styles/SideBar.scss';




function SideBar({ spotify }){

    const [{ playlists }, dispatch] = useDataLayer();
    
    return (
        <div className= "side-bar">
            <div className= "side-bar-options">
                <div className= "spotify-logo">
                    <FontAwesomeIcon icon={['fab', 'spotify']} size= "3x"/>
                    <h1 className= "spotify-title">Spotify</h1>
                </div>
                <a className= "option" href= "./Player.js">
                    <FontAwesomeIcon icon={['fas', 'home']} />
                    <p className= "option-title" >Inicio</p>
                </a>
                <a className= "option" href= "./Player.js">
                    <FontAwesomeIcon icon={['fas', 'search']} />
                    <p className= "option-title">Buscar</p>
                </a>
                <a className= "option" href= "./Player.js">
                    <FontAwesomeIcon icon={['fas', 'headphones']} />
                    <p className= "option-title" >Tu Biblioteca</p>
                </a>
            </div>
            <p className= "playlist-title">PLAYLISTS</p>
            
            <div className= "playlists">
                {
                    playlists?.items?.map(
                        (list, index) => 
                        <p className="playlists-option" 
                            key={index}
                        >
                            {list.name}
                        </p>
                    ) 
                }
            </div>
        </div>
    )
}

export default SideBar;
