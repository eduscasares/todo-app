import React from 'react';

// Importing components
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import Dashboard from '../pages/dashboard/Dashboard';
import NotFound from '../pages/404/NotFound';
import SignupPage from '../pages/auth/SignupPage';
import ProfilePage from '../pages/profile/ProfilePage';
import NavBar from '../components/containers/NavBar';
import AboutPage from '../pages/about/AboutPage';

// Importing Route system
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import TasksPage from '../pages/tasks/TasksPage';

const MainRoutes = () => {

    let loggedIn = true;
    let signedIn = false;

    return (
        <main>
            <Router>

                <NavBar></NavBar>

                <Routes className='navigation'>
                
                    <Route exact path='/' element={
                        loggedIn ? 
                            ( <Navigate replace to={'/dashboard'} /> ) :
                            ( <Navigate replace to={'/login'} /> )
                    } /> 

                    <Route exact path='/login' element={ 
                        loggedIn ?
                            ( <Navigate replace to={'/profile'} /> ) :
                            ( <LoginPage /> )
                    } /> 
                    <Route exact path='/sign-up' element={ 
                        !signedIn ? 
                            ( <SignupPage /> ) :
                            ( <Navigate replace to={'/login'} /> )
                    } /> 

                    <Route exact path='/dashboard' element={
                        loggedIn ? 
                            ( <Dashboard /> ) : 
                            ( <Navigate replace to={'/login'} /> )
                    } />

                    <Route exact path='/profile' element={
                        loggedIn ?
                            ( <ProfilePage /> ) :
                            ( <Navigate replace to={'/login'} /> )
                    } />

                    <Route exact path='/tasks' element={
                        loggedIn ?
                            ( <TasksPage /> ) :
                            ( <Navigate replace to='/login' /> )
                    } />

                    <Route path='/about' element={< AboutPage />} />

                    <Route path='*' element={ <NotFound /> } />

                </Routes>

            </Router>
        </main>
    );
}

export default MainRoutes;
