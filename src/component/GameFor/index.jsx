import React from 'react';
import { Container, Card } from './style';
import { useStyledContex } from '../../context/useContext';

const GameFor = () => {
  const [{ darkmode }] = useStyledContex();

  return (
    <Container>
      {/* {window?.location?.pathname?.slice(1)} */}
      <Container.Flex>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            God of war
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Grand Theft Auto V Grand Theft Auto V Grand Theft Auto V Grand Theft
            Auto V Grand Theft Auto V Grand Theft Auto V
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Red Dead Redemption 2
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Grand Theft Auto: San Andreas
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            God of war
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Grand Theft Auto V Grand Theft Auto V Grand Theft Auto V Grand Theft
            Auto V Grand Theft Auto V Grand Theft Auto V
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Red Dead Redemption 2
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Grand Theft Auto: San Andreas
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            God of war
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Grand Theft Auto V Grand Theft Auto V Grand Theft Auto V Grand Theft
            Auto V Grand Theft Auto V Grand Theft Auto V
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Red Dead Redemption 2
          </Card.Content>
        </Card>
        <Card darkmode={darkmode === true ? 'true' : undefined}>
          <Card.Image url='../../assets/img/user.png' className='cardImage' />
          <Card.Content darkmode={darkmode === true ? 'true' : undefined}>
            Grand Theft Auto: San Andreas
          </Card.Content>
        </Card>
      </Container.Flex>
    </Container>
  );
};

export default GameFor;
