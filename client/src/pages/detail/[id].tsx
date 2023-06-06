import style from '../../styles/detail.module.css';
import data from '../../data.json'
import ProductInterface from '../../interfaces/productsInterface';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from "react-redux";
import { getDetails } from '@/store/actionCreators/getDetails';
import { deleteDetails } from '@/store/actionCreators/deleteDetails';


const detail = ()=>{
    const router = useRouter()
    const {id} = router.query;
    const dispatch = useDispatch();
    //habria que hacer una action para buscar el producto por id de la bdd, guardarlo un la store y traerlo aca.
    //tambien hay que hacer una action para borrar el estado global de details y no se renderice algo que no queremos al cambiar de card

      
    return (
        <main>
            
            <div className={style.backround}>
                <div className={style.container}>
                <div>
                    <img src={product.imageDetail} className={style.img}></img>
                </div>
                <div className={style.details} >
                 <h1>{product.name}</h1>
                  <h3>Marca:{product.brand}</h3>
                <h3>Precio:${product.price}</h3>
                  <h4>Stock:{product.stock}</h4>
                  <button className={style.button}>añadir al carro</button>
                  <br />
                  <p>{product.description}</p>
                  </div>
                  </div>
            </div>
        </main>
    )
}

export default detail

const product : ProductInterface = {
    "id": "1",
    "category": "Placas Madre",
    "brand": "MSI",
    "name": "MSI Placa base B550-A PRO ProSeries",
    "imageDetail": "https://i.ibb.co/MgX6Whn/MSI-B550-A-PRO-Detail.png",
    "imageCard": "https://i.ibb.co/JR17rgq/MSI-B550-A-PRO-Card.png",
    "description": "Soporta procesadores 3ra Gen AMD Ryzen™ y procesadores AMD Ryzen™ futuros con actualización de BIOS. Soporta memoria DDR4 hasta 4400(OC) MHz. Juego ultrarrápido: PCIe 4.0, Lightning Gen4 x4 M.2 con M.2 Shield Frozr, AMD Turbo USB 3.2 Gen 2. Solución Térmica Premium: Diseño de Disipador Extendido y M.2 Shield Frozr para un alto desempeño de sistema y una experiencia de uso sin pausa. Diseño poderoso: Core Boost, Digital PWM IC, PCB con capa de cobre gruesa de 2oz, Creator Genie, DDR4 Boost. Audio Boost: Reward your ears with studio grade sound quality. Multi-GPU: Slots PCI-E con Steel armor. Soporta tecnología de 2 vías AMD Crossfire™. Dragon Center: Nuevo software que integra todas las herramientas exclusivas de MSI en una interfaz fácil de usar.",
    "price": 140,
    "available": true,
    "stock": 1
}















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
