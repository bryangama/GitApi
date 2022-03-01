import React, {useState,useEffect} from 'react';
import {Container,Form,SubmitButton} from'./styles';
import {FaGithub,FaPlus} from 'react-icons/fa';

export default function Main(){

    const[newRepository,setNewRepositori]=useState('')

    function inputChage(event){
        setNewRepositori(event.target.value);//esta salvando os dados o input
    }

    function handleSubmit(event){
        event.preventDefault();//pra nao dar refresh na pagina
        console.log(newRepository);

    }

    return(
        <Container>
            <h1>
            <FaGithub size={35}/>
            Meu Repositorio
            </h1>


        <Form onSubmit={handleSubmit}>
            <input type={"text"} placeholder={"Adicionar Repositorio"}
            value={newRepository}
                   onChange={inputChage}

            />

            <SubmitButton>
                <FaPlus color={"white"} size={15}></FaPlus>
            </SubmitButton>
        </Form>
        </Container>
    )
}