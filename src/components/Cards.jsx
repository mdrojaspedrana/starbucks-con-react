import React from 'react'
import card1 from '../images/card-1.png'
import card2 from '../images/card-2.png'
import card3 from '../images/card-3.png'
import card4 from '../images/card-4.png'
import Card from '../subComponents/Card'


const Cards = () => {
  return (
    <section className="cards">
        <Card img={card1} estado={true} circle={'5%'} textContentBtn={'Pruebelo'} title={'Aplicacion de'} description={'Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer pedido nunca ha sido tan facil.'} textContentBtn={'Pruebelo'} circle={'5%'}/>
        <Card img={card2} estado={true} circle={'10%'} textContentBtn={'Entrega por UberEat'} title={'Delivery'} description={'Starbuks entrega su comida y bebida favorita en la puerta de su casa.'}/>
        <Card img={card3} estado={false} textContentBtn={'Mas información'} title={'Novedades'} description={'Mantengase informado de nuestras ultimas novedades y actualizaciones.'}/>
        <Card img={card4} estado={false} textContentBtn={'Mas información'} title={'Historias de'} description={'Descrubra nuestra empresa y nuestra historia.'}/>
    </section>
  )
}

export default Cards