import React from 'react'
import style from './Main.module.css'
import Card from '../components/Card'
import BatataFrita from '../images/batata_frita.jpg'
import Hamburguer from '../images/hamburger.jpg'
import File_frango from '../images/file_frango.jpg'
import SetaDesce from '../images/setadesce.svg'


const ParaComer = () => {

  return (

    <div className={style.main}>
      
      <details>
        <summary className={style.title}><img src={SetaDesce}/>Fritas</summary>

          <div className={style.container}>
              <Card 
              nome="Batata Frita"
              imageSRC= {BatataFrita}
              descricao="Batata Frita"
              preco='R$: 10,99'
              ingredientes="Batata com corte artesanal, cheddar, bacon, queijo prato. Acompanha maionese">
              </Card>

              <Card 
              nome="Batata Frita"
              imageSRC= {BatataFrita}
              descricao="Batata Frita"
              preco='R$: 10,99'
              ingredientes="Batata com corte artesanal, cheddar, bacon, queijo prato. Acompanha maionese">
              </Card>

              <Card 
              nome="Batata Frita"
              imageSRC= {BatataFrita}
              descricao="Batata Frita"
              preco='R$: 10,99'
              ingredientes="Batata com corte artesanal, cheddar, bacon, queijo prato. Acompanha maionese">
              </Card>

              <Card 
              nome="Batata Frita"
              imageSRC= {BatataFrita}
              descricao="Batata Frita"
              preco='R$: 10,99'
              ingredientes="Batata com corte artesanal, cheddar, bacon, queijo prato. Acompanha maionese">
              </Card>
          </div>
      </details>

    <details>
      <summary className={style.title}><img src={SetaDesce}/>Hamburgueres</summary>
      <div className={style.container}>
        <Card 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </Card>

        <Card 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </Card>
        

        <Card 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </Card>

        <Card 
        nome="Hamburguer x"
        imageSRC= {Hamburguer}
        descricao="Hamburguer x"
        preco='R$: 30,00'
        ingredientes="Queijo, farofa de bacon, creme de ceblo e maionese.">
        </Card>
        </div>
    </details>

    <details>
      <summary className={style.title}><img src={SetaDesce}/>Pratos</summary>
      <div className={style.container}>
        <Card 
        nome="File de frago"
        imageSRC= {File_frango}
        descricao="File de frango"
        preco='R$: 50,00'
        ingredientes="Acompanha arroz, vinagrete, farofa e fritas">
        </Card>

        <Card 
        nome="File de frago"
        imageSRC= {File_frango}
        descricao="File de frango"
        preco='R$: 50,00'
        ingredientes="Acompanha arroz, vinagrete, farofa e fritas">
        </Card>

        <Card 
        nome="File de frago"
        imageSRC= {File_frango}
        descricao="File de frango"
        preco='R$: 50,00'
        ingredientes="Acompanha arroz, vinagrete, farofa e fritas">
        </Card>

        <Card 
        nome="File de frago"
        imageSRC= {File_frango}
        descricao="File de frango"
        preco='R$: 50,00'
        ingredientes="Acompanha arroz, vinagrete, farofa e fritas">
        </Card>
        </div>
    </details>

    </div>
  )
}

export default ParaComer