
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Login() {


const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        user: '',
        pass: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const autentificacion = () => {
 
        if (credentials.user === ''|| credentials.pass === '') {
        
            Swal.fire({
                title: "",
                text: "Ingrese sus Credenciales",
                icon: "info"
            });
        } else {
if(credentials.user === 'rich' && credentials.pass === '2025'){
 navigate('/principal'); 
}else{
 Swal.fire({
                title: "",
                text: "Credenciales Incirrerctas",
                icon: "info"
            });
}

             
        }

    }

    return (
        <>
            <form id='f_login' className='login-body'>
                <div className="w-full h-screen flex items-center justify-center ">
                    <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
                        <img src="/logo.png" alt="logo" className="w-12 md:w-14" />
                        <h1 className="text-lg md:text-xl font-semibold text-white ">Video Game </h1>
                       
                        <p className="text-xs md:text-sm text-gray-500 text-center">
                            <span className="text-white"></span>
                        </p>
                        <div className="w-full flex flex-col gap-3">
                            <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
                                <input type="text" placeholder="usuario" id='user' name='user' value={credentials.user} onChange={handleInputChange}
                                    className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white" />
                            </div>
                            <div className="w-full flex items-center gap-2 bg-gray-800 p-2 rounded-xl relative">
                                <input
                                    type="password" id='pass' name='pass'
                                    placeholder="Contraseña" value={credentials.pass} onChange={handleInputChange}
                                    className="bg-transparent border-0 w-full outline-none text-sm md:text-base text-white" />
                            </div>
                            <button type='button' className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm md:text-base" onClick={autentificacion}>
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login
