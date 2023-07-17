import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import * as ItemTypes from './ItemType'
const style = {
  backgroundColor: 'red',
  padding: '5px',
  margin: '10px',
  cursor: 'move',
}
// useDrag 对应的项目--拖动源     useDrop对应的项目--放置目标
export default function Card({ text, index, id, moveCard }) {
  let ref = useRef()// div生成真实DOM后，回将DOM赋给ref.current

  let [, drop] = useDrop({
    // 只会对指定类型的拖动源发生反应
    accept: ItemTypes.CARD,
    collect: () => ({}),
    hover(item, monitor) {
      // 获取被拖动卡牌呢的索引
      const dragIndex = item.index
      // 当前正在hover卡片的索引
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const { top, bottom } = ref.current.getBoundingClientRect()
      const halfOfHoverHeight = (bottom - top) / 2
      const { y } = monitor.getClientOffset()
      const hoverClientY = y - top
      if ((dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight)
        || (dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight)
      ) {
        moveCard(dragIndex, hoverIndex)
        item.index = hoverIndex
      }
    },
  })

  // 提供一种将组件作为拖动源连接到React DND系统中
  let [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD, // 用来标识拖动源的类型
    item: () => ({ id, index }), // 用来标识拖动源的JS对象或者函数
    collect: (monitor) => ({ // 收集功能，用来收集属性，放回一个JS对象
      // monitor存放的拖放的状态，当发生改变时会刷新组件
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0.1 : 1
  drag(ref)// DragSource Ref 拖动源的连接器，将真实DOM注册在DND系统
  drop(ref)
  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {text}
    </div>
  )
}