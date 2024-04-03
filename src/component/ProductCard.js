import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`product/${item.id}`)
  }

  return (
    <div className='item-card' onClick={showDetail}>
      <div className='item-img'>
        <img src={item?.img}/>
      </div>
      <div className='item-text-box'>
        <div className='item-text-font'>{item?.title}</div>
        <div>{item?.price}원</div>
        <div className='best-item'>{item?.choice===true?"BEST":""}</div>
        <div className='best-item'>{item?.new===true?"NEW":""}</div>
      </div>
    </div>
  )
}

export default ProductCard
