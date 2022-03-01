import styled from 'styled-components';


export const Container = styled.div`
  padding: 30px;
  background: #f3f0f0;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  max-width:700px;
  border-radius:4px ;
  margin: 80px auto;


  h1 {
  font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: row;
    svg{
      margin-right: 10px;
    }
  }

`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  
  input{
    flex:1;
    border: 1px solid #DDD;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }
`;
export const SubmitButton = styled.button.attrs({type:'submit'})`
  border: 1px solid #DDD;
  padding: 10px 15px;
  font-size: 15px;
  background: #630ea1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 5px 15px;
  transition-delay: 0.2ms;

  &:active {
    background: white;
  }
;

`;

