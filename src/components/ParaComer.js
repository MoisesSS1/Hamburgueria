import React from 'react'
import styles from './ParaComer.module.css'
import BatataFrita from '../images/batata_frita.jpg'

const ParaComer = () => {
  return (
    <div className={styles.card}>
        <p>Batata Frita</p>
        <img src={BatataFrita} alt="" />
        <p>R$: 10,99</p>
        <details open='open'>
        <summary>Composição</summary>
            <p>- Corte artesanal</p>
            <p>- Cheddar</p>
            <p>- Bacon</p>
            <p>- Queijo prato</p>
            <p>- Maionese</p>
        </details>
    </div>
  )
}

export default ParaComer;