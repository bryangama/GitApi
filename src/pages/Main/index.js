import React, {useState,useEffect,useCallback} from 'react';
import {Container,Form,SubmitButton} from'./styles';
import {FaGithub,FaPlus,FaSpinner} from 'react-icons/fa';
import api from '../../services/api';

export default function Main(){

    const[newRepository,setNewRepositori]=useState('');
    const [respositorios,setRepositorios]=useState([]);
    const [loading,setLoading]=useState(false);

    function inputChage(event){
        setNewRepositori(event.target.value);//esta salvando os dados o input
    }

    const handleSubmit= useCallback ((event)=>{
        event.preventDefault();//pra nao dar refresh na pagina

        async  function submit(){
            setLoading(true);

            try {
                const response = await api.get(`repos/${newRepository}`);
                const data = {
                    name: response.data.full_name,
                }
                setRepositorios([...respositorios, data]);//pego tudo que tenho na minha lista e add os dados do data.full_name
                setNewRepositori('');//limpo input
            }catch(error){
                console.log(error);
            }finally {
                setLoading(false);
            }
        }

        submit();


    },[newRepository,respositorios]);



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

            <SubmitButton Loading={loading ?1 :0}>
                {loading ?(
                    <FaSpinner color={'white'} size={15}/>
                    ):(
                        <FaPlus color={"white"} size={15}></FaPlus>
                )}

            </SubmitButton>
        </Form>
        </Container>
    )
}