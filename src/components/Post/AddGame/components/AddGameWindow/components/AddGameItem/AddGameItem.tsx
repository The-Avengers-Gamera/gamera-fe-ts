import styled from 'styled-components';
import AddedGame from '../../../AddedGame';

const AddGameItemContainer = styled.div`
  width: 100%;
  height: 8rem;
  border-bottom: 1px solid #585858;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddGameButtonContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #6ddb03;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 2rem;
  color: #2c2f3b;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const AddedGameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 6rem;
`;

type Props = {
  MockGame: {
    name: string;
    genre: string;
    platform: [];
    img: string;
  };
  changeIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
};

export const AddGameItem = ({ MockGame, changeIsAdd, closeModal }: Props) => {
  return (
    <AddGameItemContainer>
      <AddedGameContainer>
        <AddedGame
          MockGame={MockGame}
          useWindowStyle
        />
      </AddedGameContainer>
      <AddGameButtonContainer>
        <Button
          type="button"
          onClick={() => {
            changeIsAdd(true);
            closeModal();
          }}
        >
          +
        </Button>
      </AddGameButtonContainer>
    </AddGameItemContainer>
  );
};

export default AddGameItem;
