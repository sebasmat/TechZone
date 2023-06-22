import React, { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import MainLayout from "@/layout/main-layout";
import s from "@/styles/info.module.css"
import { useState, useEffect } from "react"; 
import axios from "axios";

// export async function getStaticProps() {
//   return {
//     props: {
//       pageId: "infoPage",
//     },
//   };
// }

const Info: NextPageWithLayout = () => {

  const [input,setInput]= useState({
    name:"",
    email:"",
    subject:"",
    message:"",
    })

  function handleInput(e:any){
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name] : e.target.value 
  }) }
  
  
 async function handleSubmit(e:any){
    e.preventDefault()
    console.log(input)
    await axios.post("http://localhost:3001/contact",{input})
    alert('Mensaje Enviado Exitosamente')
    setInput({
      name:"",
      email:"",
      subject:"",
      message:"",
    })
}



  return( 
      <div className={s.container}>
        <form className={s.contactForm} onSubmit={e=>handleSubmit(e)}>
          <h2 className={s.h2}>CONTACTANOS!</h2>
          <input className={s.textarea} type="text" name="name" value={input.name} placeholder="Nombre Completo" onChange={e=>handleInput(e)} />
          <input className={s.textarea} type="email" name="email" value={input.email} placeholder="Email" onChange={e=>handleInput(e)} />
          <input className={s.textarea} type="test" name="subject" value={input.subject} placeholder="Asunto" onChange={e=>handleInput(e)} />
          <textarea className={s.textarea}  name="message" value={input.message} placeholder="message" cols={30} rows={10} onChange={e=>handleInput(e)}></textarea>
          <button className={s.submit} type="submit">Enviar Mensaje</button>
        </form>
      </div>
    )
};
Info.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Info;
