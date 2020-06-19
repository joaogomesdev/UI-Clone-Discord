import React , {useRef, useEffect} from 'react';

import ChannelMessage, {Mention} from '../ChannelMessage';


import { Container , Messages , InputWrapper ,Input, InputIcon } from './styles';



const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div){    
        div.scrollTop = div.scrollHeight;
    }

  }, [messagesRef]);
  return (
      <Container>

       
      <Messages ref={messagesRef}>
       
      {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Jovirone"
            date="21/06/2020"
            content="Xesquedele!"
          />
        ))}
        

          <ChannelMessage
              author="Jovirone"
              date="15/02/2021"
              content={
                <>
                    dale dele dele doli, me come <Mention>@Jovirone</Mention> 😊

                </>
              }
              hasMention
              isBot
            /> 
          

        </Messages>

        <InputWrapper>
              <Input type="text" placeholder="Conversar em #chat-livre" />
              <InputIcon />
          </InputWrapper>

      </Container>

      

  );
}

export default ChannelData;