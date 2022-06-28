import React from 'react'
import styles from './Card.module.css'
import SetaDesce from '../images/soma.svg'

const Card = (props) => {

  return (
    <div className={styles.card}>
        <p>{props.nome}</p>

        <img className={styles.img} src={props.imageSRC} alt={props.descricao} />

        <p>{props.preco}</p>

        <details>
        <summary><img className={styles.card_img} src={SetaDesce}/>Ingredientes</summary>
        <p>{props.ingredientes}</p>
        
        </details>
    </div>
  )
}

export default Card;