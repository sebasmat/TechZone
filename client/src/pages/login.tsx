const login = ()=>{
    return (
        <div>
            <p>Esta es la vista de login</p>
            <h2>Login</h2>
            <div>
                <label>Email: </label>
                <input className="border-2 border-blue-300"/>
            </div>
            <div>
                <label>Password: </label>
                <input className="border-2 border-blue-300"/>
            </div>
            <div>
                <button className="bg-[#4404BC] rounded-full text-white w-32">Continue</button>
            </div>
            <div>
                <a>Create an account</a>
            </div>
        </div>
    )
}

export default login;