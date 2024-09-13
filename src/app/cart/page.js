'use client'
import { DelkaroProducts } from '@/store/productSlice'
import { meraStore } from '@/store/store'
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  return (
    <Provider store={meraStore}>
        <ShowCart/>
    </Provider>
  )
}

const ShowCart = () => {
  let dispatch = useDispatch()
  let Total = 0
  let CartData = useSelector((store) =>{
    return store.cart
  })

  console.log(CartData)
  return (
    <div>

      <table className='w-full'>
        <thead>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
          <th>QTY</th>
          <th></th>
          <th></th>

        </thead>
        {
          CartData.length != 0
          ?
          CartData.map((data,index) => {
            Total+=data.price
           return  <tr className='mt-10' key={index}>
              <td className='text-center'><img src={data.image} width={150} height={150} alt="" /></td>
              <td className='text-center'>{data.title}</td>
              <td className='text-center'>{data.price}</td>
              <td><button className='w-10 h-10 bg-slate-600 text-white' >-</button></td>
              <td className='text-center'>1</td>
              <td><button className='w-10 h-10 bg-slate-600 text-white' >+</button></td>
              <td><button className='w-10 h-10 bg-slate-600 text-white' onClick={()=>{
                dispatch(DelkaroProducts(index))
              }}>X</button></td>

            </tr>
          })
          :
          <div className='text-4xl'>You need to buy first</div>
        }
        </table>
        <p className='text-center text-4xl'>Total: {Total}</p>
    </div>
  )
}

export default Cart