import axios from 'axios';
import { useTypedSelector } from "@/store/useTypeSelector";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";




export default function succes(){
    const { UserFromDb } = useTypedSelector((state) => state.user);
    const { CartItems } = useTypedSelector((state) => state.cart);
    // const dispatch = useDispatch()
    console.log(CartItems)

//     useEffect(()=>{
//        console.log(CartItems)
//     },[CartItems]

//     )
   
      const mail = async ()=>{
        console.log(CartItems)
         const user:any = [];
         const productos:any = [];
        user.push({
            email: UserFromDb.email,
            name: UserFromDb.name,
            direccion : UserFromDb.direction,
        })
      
          
            CartItems.products.map((item: any)=>{
                productos.push({
                          name:item.name,
                          cantidad: item.quantity,
                          price:item.price,
                          image:item.images[0],
                        })})
            console.log("hola entro cart item")
          
    
           
       
          const {data} =  await axios.post("http://localhost:3001/confirmacion", {user,productos})
        window.location.href=data;
        
      }
   useEffect(()=>{
    if(  CartItems.products.length >0){
        mail()
      }
   },[CartItems])
   

   
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
))): <h1>no se encontraron productos</h1>}
           </div>   
        </div>
    )
}

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

           
=======
export default function succes() {
  const { UserFromDb } = useTypedSelector((state) => state.user);
  const { CartItems } = useTypedSelector((state) => state.cart);
  // const dispatch = useDispatch()
  console.log(CartItems);
  console.log(UserFromDb);

  
  const prueba = async()=>{
    const {data} = await axios.get('http://localhost:3001/products/24');
    const product1 = data;
    const response = await axios.get('http://localhost:3001/products/35');
    const product2 = response.data;
    const arrayproducts: any[] = [];
    arrayproducts.push(product1)
    arrayproducts.push(product2)
    const email = "sebastian.mateusp@gmail.com"
    const user = await axios.get('http://localhost:3001/users?email='+email);
    const request = await axios.post('http://localhost:3001/sales', { // aqui irian el array de los productos comprados y el objeto del usuario 
      user: user.data,
      product: arrayproducts
    });
    const getSales = await axios.get('http://localhost:3001/sales');
    console.log("este es el id que le paso", user.data.id);
    
    console.log(getSales.data);
    const getSalesByUser = await axios.get('http://localhost:3001/sales/'+user.data.id);
    console.log(getSalesByUser.data);
    
    }



  //     useEffect(()=>{
  //        console.log(CartItems)
  //     },[CartItems]

  //     )

  const mail = async () => {
    console.log(CartItems)
    const user: any = [];
    const productos: any = [];
    user.push({
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
    console.log("hola entro cart item")
    const { data } = await axios.post("http://localhost:3001/confirmacion", { user, productos })
    console.log(data);
    window.location.href = data.url;

  }
  useEffect(() => {
    prueba();
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

