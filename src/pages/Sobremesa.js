import React from 'react'
import SetaDesce from '../images/setadesce.svg'
import style from './Main.module.css'
import Card from '../components/Card'
import Sorvete from '../images/sorvete.jpg'

const Sobremesa = () => {
  return (
    <div className={style.main}>
      
    <details>
      <summary className={style.title}><img src={SetaDesce}/>Geladas</summary>

        <div className={style.container}>
            <Card 
            nome="Suco x"
            imageSRC= {Sorvete}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>
            <Card 
            nome="Suco x"
            imageSRC= {Sorvete}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>
            <Card 
            nome="Suco x"
            imageSRC= {Sorvete}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>

        </div>
    </details>
      
  </div>
  )
}

export default Sobremesa