import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [status, setStatus] = useState(false);
    let loggedIn = true;

    return (
        <aside className='navbar'>
            
            <div className="logo">
                <h1>/NRDL TASKS</h1>
            </div>

            { loggedIn ? 

                <nav>
                    <Link to={'/tasks'}>Tasks</Link>
                    <Link to={'/about'}>About</Link>
                </nav> :  

                null    

            }

            {
                loggedIn ? 

                    <div>
                        <Link to={'/profile'} className="session-hanlder logged-out">
                            <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Avatar" />
                                Usuario prueba
                        </Link> 
                    </div>:

                    <div>
                        <div className="session-hanlder">
                            <Link to={'/sign-up'}> 
                                <button className='contained-button'>Sign up</button>
                            </Link>
                        </div>  
                    </div>


                   
            }

        </aside>
    );
}

export default NavBar;
