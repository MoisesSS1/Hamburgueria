import React from 'react'
import style from '../components/Main.module.css'
import ParaComer from '../components/ParaComer'
import BatataFrita from '../images/batata_frita.jpg'
import Hamburguer from '../images/hamburger.jpg'


const Main = () => {

  return (

    <div className={style.main}>
      
      <details>
        <summary className={style.title}>Fritas</summary>
          <div className={style.container}>
              <ParaComer 
              nome="Batata Frita"
              imageSRC= {BatataFrita}
              descricao="Batata Frita"
              preco='R$: 10,99'
              ingredientes="Batata com corte artesanal, cheddar, bacon, queijo prato. Acompanha maionese">
              </ParaComer>

              <ParaComer 
              nome="Batata Frita"
              imageSRC= {BatataFrita}
              descricao="Batata Frita"
              preco='R$: 10,99'
              ingredientes="Batata com corte artesanal, cheddar, bacon, queijo prato. Acompanha maionese">
              </ParaComer>

              <ParaComer 
              nome="Batata Frita"
              imageSRC= {BatataFrita}
              descricao="Batata Frita"
              preco='R$: 10,99'
              ingredientes="Batata com corte artesanal, cheddar, bacon, queijo prato. Acompanha maionese">
              </ParaComer>

              <ParaComer 
              nome="Batata Frita"
              imageSRC= {BatataFrita}
              descricao="Batata Frita"
              preco='R$: 10,99'
              ingredientes="Batata com corte artesanal, cheddar, bacon, queijo prato. Acompanha maionese">
              </ParaComer>
          </div>
      </details>

    <details>
      <summary className={style.title}>Hamburgueres</summary>
      <div className={style.container}>
        <ParaComer 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </ParaComer>

        <ParaComer 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </ParaComer>
        

        <ParaComer 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </ParaComer>

        <ParaComer 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </ParaComer>
        </div>
    </details>

    <details>
      <summary className={style.title}>Pratos</summary>
      <div className={style.container}>
        <ParaComer 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </ParaComer>

        </div>
    </details>

    <details>
      <summary className={style.title}>Fritas</summary>
    </details>

    </div>
  )
}

export default Main