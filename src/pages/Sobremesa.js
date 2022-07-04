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
            nome="Sorvete x"
            imageSRC= {Sorvete}
            descricao="Sorvete aleatória"
            preco='R$: 15,59'
            ingredientes="Chocolate, gelo, calda">
            </Card>
            <Card 
            nome="Sorvete x"
            imageSRC= {Sorvete}
            descricao="Sorvete aleatória"
            preco='R$: 15,59'
            ingredientes="Chocolate, gelo, calda">
            </Card>
            <Card 
            nome="Sorvete x"
            imageSRC= {Sorvete}
            descricao="Sorvete aleatória"
            preco='R$: 15,59'
            ingredientes="Chocolate, gelo, calda">
            </Card>
            <Card 
            nome="Sorvete x"
            imageSRC= {Sorvete}
            descricao="Sorvete aleatória"
            preco='R$: 15,59'
            ingredientes="Chocolate, gelo, calda">
            </Card>

        </div>
    </details>
      
  </div>
  )
}

export default Sobremesa