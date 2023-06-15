import axios from 'axios';
import { useEffect, useState } from 'react';

const SuccesPay = (props: any) => {
    const { id } = props;
    const [arrayProducts, setArrayProducts] = useState<any[]>([]);




    const updateStock = (productos: any[]) => {
        const aux = productos;
        console.log("si entra a la función");
        console.log(aux);
        if(aux.length>0){
            console.log("odio programar");
            
        }
        for(let i=0;i<aux.length; i++){
            console.log("si entra al for");
            
        }
        // productos.forEach((producto) => {
        //     console.log("si entra al foreach");
        //     console.log(producto);
            
        //     // const { data } = await axios.post(`http://localhost:3001/products/${producto.id}`, { quantity: producto.quantity });
        //     // console.log(data);
        // })

    }


    const getInfoPay = async (id: any) => {
        const { data } = await axios.get('http://localhost:3001/pay/checkout-session?id=' + id);
        if (data) {
            if (data.status === "complete") {
                const products: any[] = [];
                data.line_items.data.forEach((productinfo: any) => {
                    const quantity = productinfo.quantity
                    const productId = productinfo.price.product
                    products.push({
                        productId: productId,
                        quantity: quantity,
                    })
                })
                const productFinal: any[] = [];
                products.forEach(async (product) => {
                    const { data } = await axios.post('http://localhost:3001/pay/getName', { idProduct: product.productId })
                    productFinal.push({
                        id: data,
                        quantity: product.quantity
                    })
                })
                // console.log(productFinal);
                // setArrayProducts([...productFinal]);
                // console.log(arrayProducts);

                updateStock(productFinal);
            }
        }
    }


    useEffect(() => {
        if (id) {
            getInfoPay(id)
        }

    }, [id]);



    return (
        <div>
            <h3>Felicidades por su compra</h3>
        </div>
    );
};

export default SuccesPay;