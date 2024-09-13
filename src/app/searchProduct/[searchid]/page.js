'use client'
import { cartKiproductLao } from '@/store/productSlice'
import { meraStore } from '@/store/store'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Search = () => {
  return (
    <Provider store={meraStore}>
      <ShowSearch />
    </Provider>
  )
}

const ShowSearch = () => {
  let dispatch = useDispatch()
  let params = useParams()
  let SearchProducts = useSelector((store) => {
    return store.products
  })

  let filterABleProduct = SearchProducts.filter((data) => {
    if (data.title.toLowerCase().includes(params.searchid.toLowerCase())) {
      return true
    }
  })


  return (
    <div className="flex justify-around flex-wrap">
      {
        filterABleProduct.map((data,i) => {
          return <div key={i} className=" relative w-[320px] h-[400px] mt-7" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
            <Link href={'/productDetial/' + data.id}>
              <img src={data.image} alt="Product" className="w-3/4 h-[200px] m-auto" />
              <h1 className="text-center text-xl">{data.title}</h1>
              <p className="text-center">{data.price}</p>
            </Link>
            <button className="w-4/5 absolute bottom-5 left-10  bg-slate-600 text-white h-16" onClick={() => {
              dispatch(cartKiproductLao(data))
              toast.success("Product Added Successfully")
            }}>Add to Cart</button>
          </div>
        })
      }
    </div>
  )
}

export default Search