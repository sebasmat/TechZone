import axios from 'axios';
import { useTypedSelector } from "@/store/useTypeSelector";
import { ReactElement, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { NextPageWithLayout } from './_app';
import MainLayout from '@/layout/main-layout';




// export default function succes(){
//     const { UserFromDb } = useTypedSelector((state) => state.user);
//     const { CartItems } = useTypedSelector((state) => state.cart);
//     // const dispatch = useDispatch()
//     console.log(CartItems)

// //     useEffect(()=>{
// //        console.log(CartItems)
// //     },[CartItems]

// //     )

//       const mail = async ()=>{


//         console.log("si entra a la funcion");

//          const user:any = [];
//          const productos:any = [];
//         user.push({
//             email: UserFromDb.email,
//             name: UserFromDb.name,
//             direccion : UserFromDb.direction,
//         })


//             CartItems.products.map((item: any)=>{
//                 productos.push({
//                           name:item.name,
//                           cantidad: item.quantity,
//                           price:item.price,
//                           image:item.images[0],
//                         })})
//             console.log("hola entro cart item")




//           const {data} =  await axios.post("http://localhost:3001/confirmacion", {user,productos})
//         window.location.href=data;

//       }
//    useEffect(()=>{
//     if(  CartItems.products.length >0){
//         mail()
//       }
//    },[CartItems])



//     return (
//         <div>
//             <h1>HOLA</h1>
//             <h1>Felicidades por su compra</h1>
//             <h3>{UserFromDb?.name}</h3>
//             <h3>{UserFromDb?.direction}</h3>
//             <div>
//            {CartItems.products?.length > 0 ? (
//             CartItems.products?.map((item: any) => (
//                 <div>
//                     <div className="pl-2">
//                     <p className="font-bold">{item.name}</p>
//                     <p>{item.brand}</p>
//                     <p className="text-violet-950 font-bold text-2xl">
//                       ${item.price}
//                     </p>
//                     <p>cant:{item.quantity}</p>
//                   </div>
//                   </div>
// ))): <h1>no se encontraron productos</h1>}
//            </div>   
//         </div>
//     )
// }

//for (let i = 0; i < CartItems?.products?.length; i++) {
//         //     productos.push(CartItems.products[i].name,CartItems.products[i].price,CartItems.products[i].quantity)
//         //   }
//         //   console.log(productos)

// if(CartItems.products){
//     CartItems.products.map((obj: any)=>{
//     productos.push({
//       name:obj.name,
//       cantidad: obj.quantity,
//       price:obj.price,
//     })
//   })}


// =======
const Succes: NextPageWithLayout = () => {
  const { UserFromDb } = useTypedSelector((state) => state.user);
  const { CartItems } = useTypedSelector((state) => state.cart);
  
  
  //     useEffect(()=>{
  //        console.log(CartItems)
  //     },[CartItems]

  //     )

  const mail = async () => {
    console.log(CartItems)
    const user: any = [];
    const productos: any = [];
    user.push({
      id: UserFromDb.id,
      email: UserFromDb.email,
      name: UserFromDb.name,
      direccion: UserFromDb.direction,
    })
    CartItems.products.map((item: any) => {
      productos.push({
        name: item.name,
        cantidad: item.quantity,
        price: item.price,
        image: item.images[0],
      })
    })
    const request = await axios.post('http://localhost:3001/sales', { //esta ruta me CREA el registro de la venta, relacionadando el usuario y los productos que compro 
      user: user,
      product: CartItems.products //OJO, para crear efectivamente la venta toca mandarle todos los campos del producto, por eso lo mando desde CartItem.products
    });
    
    const updateStock = await axios.put('http://localhost:3001/stock', {products:CartItems.products})//esta ruta actualiza el stock
    
    
    const getSales = await axios.get('http://localhost:3001/sales'); // esta ruta me TRAE todas las ventas realizadas
    
    
    const getSalesByUser = await axios.get('http://localhost:3001/sales/'+user[0].id); //esta ruta me TRAE todas las compras que un usuario realizo, añadir el ID del usuario
    
    
    const { data } = await axios.post("http://localhost:3001/confirmacion", { user, productos })

    window.location.href = data.url;

  }
  useEffect(() => {
    if (CartItems.products.length > 0) {
      mail()
    }
  }, [CartItems])
  return (
    <div>
      <h1>HOLA</h1>
      <h1>Felicidades por su compra</h1>
      <h3>{UserFromDb?.name}</h3>
      <h3>{UserFromDb?.direction}</h3>
      <div>
        {CartItems.products?.length > 0 ? (
          CartItems.products?.map((item: any) => (
            <div>
              <div className="pl-2">
                <p className="font-bold">{item.name}</p>
                <p>{item.brand}</p>
                <p className="text-violet-950 font-bold text-2xl">
                  ${item.price}
                </p>
                <p>cant:{item.quantity}</p>
              </div>
            </div>
          ))) : <h1>no se encontraron productos</h1>}
      </div>
    </div>
  )
}
Succes.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Succes;

