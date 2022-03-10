import { MainContainer, InputContainer, ButtonContainer, LogoContainer }  from "./style";
import LoginButton from "../../LoginButton"
import { TextInput, Pane } from "evergreen-ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import logo from '../../../assets/logo.png'

export const Login = () => {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogin = () => {
          navigate("/home");
  };

  return (
    <>
      <MainContainer>
        <LogoContainer>
          <img src={logo} alt="logo"/>
          <strong>ALS Security</strong>
        </LogoContainer>
        <InputContainer>
          <TextInput 
            value={email}
            type="email"
            name="inputEmail" 
            placeholder="E-Mail"
            onChange={(e) => setEmail(e.target.value)}
            />
          <TextInput 
          value={password}
          type="password"
          name="inputPassword"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <LoginButton click = {() => handleClickLogin()} text="Login"/>
          <Pane height={40}/>
        </ButtonContainer>
      </MainContainer>
    </>
  )
}