import React from 'react';
import { Container, Card } from './style';
import { useStyledContex } from '../../context/useContext';
import { GenericLoading } from '../extra-component';
import { useRequest } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const GameFor = () => {
  const [{ darkmode }] = useStyledContex();
  const navigate = useNavigate();
  let { name } = useParams();

  const { response, isLoading } = useRequest(
    'GET',
    `https://api.rawg.io/api/games?platforms=${name?.slice(
      1
    )}&key=c542e67aec3a4340908f9de9e86038af`
  );

  const { response: resP, isLoadingP } = useRequest(
    'GET',
    `https://api.rawg.io/api/platforms/${name?.slice(
      1
    )}?key=c542e67aec3a4340908f9de9e86038af`
  );
  console.log(resP, 'resP');
  const clickCard = (name, slug) => {
    navigate(`/game/:${slug}`);
  };

  function convertToReactComponents(htmlString) {
    var tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;

    var htmlElements = Array.from(tempElement.childNodes)
      .map((node, index) => {
        if (node.nodeType === Node.TEXT_NODE) {
          return node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName.toLowerCase() === 'br') {
            return React.createElement('br', { key: index });
          } else {
            var childElement = React.createElement(
              node.tagName.toLowerCase(),
              { key: index },
              ...convertToReactComponents(node.innerHTML)
            );
            return childElement;
          }
        } else {
          return null;
        }
      })
      .filter(Boolean);

    return htmlElements;
  }
  var htmlElement = convertToReactComponents(resP?.description);

  return (
    <Container>
      {isLoading || isLoadingP ? (
        <GenericLoading />
      ) : (
        <Container.Column darkmode={darkmode === true ? 'true' : undefined}>
          <Container.Title darkmode={darkmode === true ? 'true' : undefined}>
            Game for {resP?.name}
          </Container.Title>
          {resP?.description &&
            htmlElement.map((element, index) => (
              <React.Fragment key={index}>{element}</React.Fragment>
            ))}
          <Container.Flex>
            {response?.results?.map(
              ({
                id,
                background_image,
                image_background,
                name,
                image,
                slug,
              }) => (
                <Card
                  darkmode={darkmode === true ? 'true' : undefined}
                  key={id}
                  onClick={() => clickCard(name, slug)}
                >
                  <Card.Image
                    url={image || background_image || image_background}
                    className='cardImage'
                    loading='lazy'
                  />
                  <Card.Content>
                    <Card.Title
                      darkmode={darkmode === true ? 'true' : undefined}
                    >
                      {name}
                    </Card.Title>
                  </Card.Content>
                </Card>
              )
            )}
          </Container.Flex>
        </Container.Column>
      )}
    </Container>
  );
};

export default GameFor;
