import React, { useState } from "react";
import Card from "./Card";
const style = {
  width: '300px'
}
export default function Container() {
  const [cards] = useState([
    { id: 'card1', text: '卡片1' },
    { id: 'card2', text: '卡片2' },
    { id: 'card3', text: '卡片3' }
  ])

  return (
    <div style={style}>
      {cards.map((item, index) => {
        return (
          <Card key={item.id} text={item.text} />
        )
      })}
    </div>
  )
}