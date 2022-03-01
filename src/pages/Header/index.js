import React from 'react';
import {Link} from 'react-router-dom';
import {Head,NavLink} from './styles';
import git from'../img/git2.png';


export default function Index(){
    return(
        <Head>

            <h1>GIT</h1>
            <NavLink to={'/'}>Home</NavLink>

            <NavLink to={'/repositorio'}>Repositorio</NavLink>

            <img src={git}/>

        </Head>

    )
}