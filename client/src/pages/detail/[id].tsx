import style from '../../styles/detail.module.css';
import data from '../../data.json'
import ProductInterface from '../../interfaces/productsInterface';
import { useRouter } from 'next/router';
import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDetails } from '@/store/actionCreators/getDetails';
import axios from 'axios';



const detail = ()=>{
    const router = useRouter()
    const {id} = router.query;
    const dispatch = useDispatch()

    const product = useSelector((state)=> state.product)
    console.log(product)
    useEffect(()=>{
        dispatch(getDetails(id))
    },[])
    // var json = await axios.get(`http://localhost:3001/products/${id}`,{method:"GET"})

  
   
    //habria que hacer una action para buscar el producto por id de la bdd, guardarlo un la store y traerlo aca.
    //tambien hay que hacer una action para borrar el estado global de details y no se renderice algo que no queremos al cambiar de card

      
    return (
        <main>
            
            <div className={style.backround}>
                <div className={style.container}>
                <div>
                    <img src={product[0].images} className={style.img}></img>
                </div>
                    <div className={style.details} >
                    <h1 className='font-bold mt-10 text-4xl'>{product[0].name}</h1>
                    <br />
                    <p className='my-10'>{product[0].description}</p>
                    <div className='flex flex-col flex-around'>
                    <h3 className='font-bold text-xl'>Categoria: {product[0].category}</h3>
                    <h3 className='font-bold text-xl'>Marca:{product[0].brand}</h3>
                    <h3 className='font-bold text-3xl text-violet-900 p-5 ' >Precio:${product[0].price}</h3>
                    <button className={style.button}>añadir al carro</button>
                    </div>
                  </div>
                </div>
            </div>
        </main>
    )
}

export default detail

















// ACTIONS:
// export function deleteState(){
//     return function(dispatch){
//     return dispatch({
//       type:'DELETE_PRODUCT',
//       payload: []
//     })}
//   }

// export function getDetail(id){
//     return async function(dispatch){
//       var json= await axios.get(`http://localhost:3001/product/${id}`)
//       return dispatch({
//         type: 'GET_DETAILS',
//         payload: json.data
//       })
//     }
//   }

// EN REDUCER:
// case 'DELETE_PRODUCT':
//             return{
//                 ...state,
//                 detail : []
//             }

// case 'GET_DETAILS':
//             return{
//                 ...state,
//                 detail: action.payload
//             }

// ACA EN DETAIL:
// const dispatch = useDispatch()
//     const myProduct = useSelector((state)=> state.detail)
    
//     useEffect(()=>{
//         dispatch(getDetail(props.match.params.id))
//         return ()=> dispatch(deleteState())
//     },[dispatch])
// pasandole props a la funcion componente
