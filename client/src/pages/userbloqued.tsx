import React from "react";
import Link from "next/link";
import s from "@/styles/info.module.css"
import axios from "axios";
import { useState } from "react";

const Userbloqued = () => {
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
    alert('Mensaje Enviado')
    setInput({
      name:"",
      email:"",
      subject:"",
      message:"",
    })
}
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-col h-screen justify-center items-center">
        <h1>Usuario bloqueado, por favor contacte al administrador!</h1>
        <div className={s.container}>
        <form className={s.contactForm} onSubmit={e=>handleSubmit(e)}>
          <input className={s.textarea} type="text" name="name" value={input.name} placeholder="Nombre Completo" onChange={e=>handleInput(e)} />
          <input className={s.textarea} type="email" name="email" value={input.email} placeholder="Email" onChange={e=>handleInput(e)} />
          <input className={s.textarea} type="test" name="subject" value={input.subject} placeholder="Asunto" onChange={e=>handleInput(e)} />
          <textarea className={s.textarea}  name="message" value={input.message} placeholder="message" cols={30} rows={10} onChange={e=>handleInput(e)}></textarea>
          <button className={s.submit} type="submit">Enviar Mensaje</button>
        </form>
      </div>
        <Link href={"/api/auth/logout"}>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Userbloqued;