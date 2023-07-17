import React from "react";
import { useDrag } from "react-dnd";
const style = {
  backgroundColor: 'red',
  padding: '5px',
  margin: '10px',
  cursor: 'move',
}
export default function Card({ text }) {
  // 提供一种将组件作为拖动源连接到React DND系统中
  useDrag({

  })
  return (
    <div style={style}>
      {text}
    </div>
  )
}