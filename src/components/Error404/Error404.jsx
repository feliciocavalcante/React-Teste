import React, { useEffect } from 'react';
import styles from '../Error404/Error404.module.css';
import logoNike from '../../assets/img/logoNike.png';
import logoNikeBranca from '../../assets/img/logoNikeBranca.png';
import { Link } from 'react-router-dom';

const Error404 = () => {
    useEffect(() => {
        document.title = 'Error 404';
    }, []);

    return (
        <div className={styles.container}>
            <img src={logoNike} alt="Logo Nike" />
            
            <h1>404</h1>
            <p>Página não encontrada</p>
            
            <Link to="/"><button className={styles.button}>Voltar para a página inicial</button></Link>
        </div>
    );
};

export default Error404;