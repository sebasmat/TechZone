// import { loadStripe } from "@stripe/stripe-js"

// const stripePromise = loadStripe('pk_test_51NGLywL5P8zIQxPGujsaooDQJnByTEExEcwR422IEDpwFO0qcXBekOJxAOFhbUFUz6N8EzKPxMVuX8j54H79JgZS00im1qgTke')
// console.log(typeof(stripePromise))



// export default function Checkout(){
// const handleClick = async ()=>{
//     const {sessionId} = await fetch('/api/checkout/session',{
//         method: 'POST',
//         headers:{
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({quantity: 1})
//     }).then(res=> res.json())
//     const stripe= await stripePromise;
//     const {error} = await stripe?.redirectToCheckout({
//         sessionId
//     })
// }

//     return(
//         <div>
//             <h1>checkout</h1>
//             <button role="link" onClick={handleClick}>
//             checkout
//             </button>
//         </div>
//     )
// }