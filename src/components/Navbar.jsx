import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo2 from "../img/Logo2.png";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  text-decoration: none;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 60%;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <Image src={Logo2} />
            </Logo>
          </Link>
          <Menu>
            <Link to="/contacto">
              <MenuItem>Contacto</MenuItem>
            </Link>
          </Menu>
        </Left>
        <Button>Autentificar</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
