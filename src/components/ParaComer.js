import React from 'react'
import styles from './ParaComer.module.css'

const ParaComer = (props) => {

  return (
    <div className={styles.card}>
        <p>{props.nome}</p>

        <img src={props.imageSRC} alt={props.descricao} />

        <p>{props.preco}</p>

        <details>
        <summary>Composição</summary>
        <p>{props.ingredientes}</p>
        
        </details>
    </div>
  )
}

export default ParaComer;