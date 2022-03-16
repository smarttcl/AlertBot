import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Stop from "../img/Stop.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.4)
    ),
    url(${Stop}) center;
  background-size: cover;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 25%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  margin-top: 10px;
  width: 50%;
  heigth:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  padding: 8px 20px;
  background-color: #0b556a;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const BotContainer = () => {
  var BOT_ID = "8f0ec833-518e-41b6-bd5a-d9714dd4d293"; 
  var theURL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=" + BOT_ID;
  const styleOptions = {
    // Add styleOptions to customize web chat canvas
    hideUploadButton: true,
    //suggestedActionLayout: 'stacked'
   // botAvatarInitials: 'BT',
     accent: '#003087',
     botAvatarBackgroundColor: "#FFFFFF",
     overflow:"hidden",
     height:"700px",
     botAvatarImage: 'https://image.flaticon.com/icons/png/128/265/265668.png',
     userAvatarInitials: 'BT',
     accent: '#003087',
     userAvatarBackgroundColor: "#FFFFFF",
     userAvatarImage: 'https://image.flaticon.com/icons/png/128/4776/4776976.png',
     hideUploadButton: true,
     suggestedActionLayout: 'stacked',
     suggestedActionDisabledBorder: null,
     suggestedActionDisabledBorderColor: '#E6E6E6',
     suggestedActionDisabledBorderStyle: 'solid',
     suggestedActionDisabledBorderWidth: 2,
     suggestedActionsStackedLayoutButtonTextWrap: true,
     emojiSet: true,
    
 };
 useEffect(()=>{ 
  fetch(theURL)
  .then(response => response.json())
  .then(conversationInfo => {
      window.WebChat.renderWebChat(
          {
              directLine: window.WebChat.createDirectLine({
                  token: conversationInfo.token,
              }),
              styleOptions
          },
          document.getElementById('webchat')
      );
  })
  .catch(err => console.error("An error occurred: " + err));
 },[])
   const url =
    "https://web.powerva.microsoft.com/environments/Default-2a93da70-5830-43bf-9c96-43da036b3273/bots/new_bot_8f0ec833518e41b6bd5ad9714dd4d293/webchat";
  return (
    <Container>
      <Left></Left>
      <Right>
        <Title>
          <h5>AlertBot</h5>
        </Title>
        
       <div id="webchat" role="main" style={styleOptions}></div>
        <Link to="/">
          <Button>Volver</Button>
        </Link>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default BotContainer;
