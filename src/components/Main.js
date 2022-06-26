import React from 'react'
import style from '../components/Main.module.css'
import ParaComer from '../components/ParaComer'
import BatataFrita from '../images/batata_frita.jpg'
import Hamburguer from '../images/hamburger.jpg'
import File_frango from '../images/file_frango.jpg'


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
        nome="File de frago"
        imageSRC= {File_frango}
        descricao="File de frango"
        preco='R$: 50,00'
        ingredientes="Acompanha arroz, vinagrete, farofa e fritas">
        </ParaComer>

        <ParaComer 
        nome="File de frago"
        imageSRC= {File_frango}
        descricao="File de frango"
        preco='R$: 50,00'
        ingredientes="Acompanha arroz, vinagrete, farofa e fritas">
        </ParaComer>

        <ParaComer 
        nome="File de frago"
        imageSRC= {File_frango}
        descricao="File de frango"
        preco='R$: 50,00'
        ingredientes="Acompanha arroz, vinagrete, farofa e fritas">
        </ParaComer>

        <ParaComer 
        nome="File de frago"
        imageSRC= {File_frango}
        descricao="File de frango"
        preco='R$: 50,00'
        ingredientes="Acompanha arroz, vinagrete, farofa e fritas">
        </ParaComer>
        </div>
    </details>

    </div>
  )
}

export default Main