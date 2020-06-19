import React from 'react';

import { Container , User , Avatar , Role  } from './styles';

interface UserProps {
  nickName: String;
  isBot?: boolean;
}
const UserRow: React.FC<UserProps> = ({
  nickName,
  isBot
}) => {
  return (
      <User>
        <Avatar className={isBot ? 'bot' : ''}/>

  <strong>{nickName}</strong>

        {isBot && <span>Bot</span>}
      </User>
  );
}

const UserList: React.FC = () => {
  return (
      <Container>

        <Role>Disponivel - 1</Role>
        <UserRow nickName="Joao Gomes" />
        <UserRow nickName="Jaqueline Rose da Silva" />

        <Role>Offline - 18 </Role>
        <UserRow nickName="Dara Alves" isBot/>
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
        <UserRow nickName="Fulano" />
      

      </Container>

  );
}

export default UserList;