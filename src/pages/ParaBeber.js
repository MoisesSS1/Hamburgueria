import React from 'react'
import SetaDesce from '../images/setadesce.svg'
import style from './Main.module.css'
import Card from '../components/Card'
import Bebida from '../images/bebida2.jpg'


const ParaBeber = () => {
  return (
    <div className={style.main}>
      
    <details>
      <summary className={style.title}><img src={SetaDesce}/>Não alcoólicas</summary>

        <div className={style.container}>
            <Card 
            nome="Suco x"
            imageSRC= {Bebida}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>
            <Card 
            nome="Suco x"
            imageSRC= {Bebida}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>
            <Card 
            nome="Suco x"
            imageSRC= {Bebida}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>

        </div>
    </details>

    <details>
      <summary className={style.title}><img src={SetaDesce}/>Alcoólicas</summary>

        <div className={style.container}>
            <Card 
            nome="Suco x"
            imageSRC= {Bebida}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>
            <Card 
            nome="Suco x"
            imageSRC= {Bebida}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>
            <Card 
            nome="Suco x"
            imageSRC= {Bebida}
            descricao="Bebida aleatória"
            preco='R$: 15,59'
            ingredientes="Limão, gelo, laranja">
            </Card>

        </div>
    </details>

  </div>
  )
}

export default ParaBeber