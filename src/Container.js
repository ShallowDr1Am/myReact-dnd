import React, { useState } from "react";
import Card from "./Card";
const style = {
  width: '300px'
}
export default function Container() {
  const [cards, setCards] = useState([
    { id: 'card1', text: '卡片1' },
    { id: 'card2', text: '卡片2' },
    { id: 'card3', text: '卡片3' }
  ])

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex]
    let cloneCards = [...cards]
    cloneCards.splice(dragIndex, 1)
    cloneCards.splice(hoverIndex, 0, dragCard)
    setCards(cloneCards)
  }
  return (
    <div style={style}>
      {cards.map((item, index) => {
        return (
          <Card
            key={item.id}
            text={item.text}
            id={item.id}
            index={index}
            moveCard={moveCard}
          />
        )
      })}
    </div>
  )
}