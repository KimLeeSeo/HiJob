import React from "react";
import styled from "styled-components";
import logo_login from "../APP/logo_login.png";

export default function login() {
  return (
    <Container>
      <Logo>
        <img src={logo_login} alt="React" />
      </Logo>
      <LoginContainer>
        <form>
          <Login_input_warp>
            <div>
              <input placeholder="Enter email i'd" type="text" />
            </div>
          </Login_input_warp>
          <Login_input_warp>
            <div>
              <input
                placeholder="Enter password"
                type="password"
                autoComplete="off"
              />
            </div>
          </Login_input_warp>
        </form>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 390px;
  height: 853px;
  margin: 0 auto;
  background-color: white;
  border: 1px solid black;
`;

const Logo = styled.div`
  height: 45%;
  position: relative;
  display: block;
  align-items: center;

  img {
    padding: 60% 0 0 0;
    width: 80%;
    margin: auto;
    display: block;
  }
`;

const LoginContainer = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  width: 90%;
`;

const Login_input_warp = styled.div`
  &:first-of-type {
    margin-bottom: 5px;
  }
  padding-bottom: 5px;

  input {
    height: 40px;
    font-size: 16px;
    width: 90%;
  }
`;
