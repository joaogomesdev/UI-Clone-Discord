import React from 'react';

import { Container , Category , AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';



const ServerName: React.FC = () => {
  return (
      <Container>
          <Category>

            <span>Canal de texto</span>
            <AddCategoryIcon />

          </Category>

           <ChannelButton channelName="Quem entrar e gay"/>
          <ChannelButton channelName="dele"/>
          <ChannelButton channelName="dale"/>
          <ChannelButton channelName="doli"/> 
         
       

      </Container>

  );
}

export default ServerName;