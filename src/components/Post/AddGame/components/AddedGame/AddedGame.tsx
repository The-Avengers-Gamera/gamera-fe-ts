import styled from 'styled-components';
import { IGame } from '@/interfaces/game';

const AddedGameContainer = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const GameImageContainer = styled.div`
  width: 40%;
  height: 80%;
  border-radius: 10px;
  margin-left: 1rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const GameContentContainer = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 0.5rem;
`;

const GameNameAndGenreContainer = styled.div`
  width: 100%;
  height: 80%;
`;

const GameNameContainer = styled.div`
  width: 100%;
  height: 40%;
  font-size: 1.2rem;
  color: #cbcbcb;
  font-weight: 700;
  overflow: hidden;
`;

const GenreContainer = styled.div`
  width: 100%;
  height: 50%;
  max-height: 1rem;
  init-height: 0.9rem;
  font-size: 0.9rem;
  color: #cbcbcb;
  font-weight: 700;
  overflow: hidden;
`;

const PlatformContainer = styled.div`
  width: 150px;
  max-width: 150px;
  max-height: 20px;
  font-size: 15px;
  color: #6ddb03;
  font-weight: 700;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: scroll;
`;

const CloseContainer = styled.div`
  width: 11%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  z-index: 77;
`;

const CloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #d8d8d8;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;

type Props = {
  useWindowStyle: boolean;
  CurrentGame: IGame;
  changeIsAddAsClose: () => void;
};

export const AddedGame = ({ useWindowStyle, CurrentGame, changeIsAddAsClose }: Props) => {
  const AddedGameButtonStyle = {
    backgroundColor: '#303442',
  };

  const AddedGameWindowStyle = {
    backgroundColor: '#2C2F3B',
  };

  const { imgUrl, name, publishers, platform } = CurrentGame;
  const removeSpaces = (str: string) => {
    return str.replace(/\s+/g, '');
  };

  return (
    <AddedGameContainer style={useWindowStyle ? AddedGameWindowStyle : AddedGameButtonStyle}>
      <GameImageContainer>
        <Img
          alt="game"
          src={imgUrl}
        />
      </GameImageContainer>
      <GameContentContainer>
        <GameNameAndGenreContainer>
          <GameNameContainer>{name}</GameNameContainer>
          <GenreContainer>{publishers}</GenreContainer>
        </GameNameAndGenreContainer>
        <PlatformContainer id="scroll-container">{removeSpaces(platform)}</PlatformContainer>
      </GameContentContainer>
      <CloseContainer>
        {!useWindowStyle && <CloseButton onClick={changeIsAddAsClose}>X</CloseButton>}
      </CloseContainer>
    </AddedGameContainer>
  );
};

export default AddedGame;
