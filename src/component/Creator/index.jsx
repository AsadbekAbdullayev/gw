import React from 'react';
import { Wrapper, Card } from './style';
import { useStyledContex } from '../../context/useContext';
import { useParams } from 'react-router-dom';
import { useRequest } from '../../hooks';

import { GenericLoading } from '../extra-component';
// https://rawg.io/api/games?creators=gabe-newell&ordering=-released&comments=true&ordering=-added&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af
// https://rawg.io/api/creators/gabe-newell?key=c542e67aec3a4340908f9de9e86038af
const Creator = () => {
  const [{ darkmode }] = useStyledContex();
  let { name } = useParams();
  const { response, isLoading } = useRequest(
    'GET',
    `https://api.rawg.io/api/creators/${name?.slice(
      1
    )}?key=c542e67aec3a4340908f9de9e86038af`
  );

  const { response: games, isLoadingGames } = useRequest(
    'GET',
    `https://api.rawg.io/api/games?creators=${name?.slice(
      1
    )}&ordering=-released&key=c542e67aec3a4340908f9de9e86038af`
  );

  // function removeTags(str) {
  //   var regex = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  //   return str.replace(regex, '');
  // }

  function convertToHTML(htmlString) {
    var tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;

    var htmlElements = Array.from(tempElement.childNodes)
      .map((node, index) => {
        if (node.nodeType === Node.TEXT_NODE) {
          return node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          var childElement = React.createElement(
            node.tagName.toLowerCase(),
            { key: index },
            convertToHTML(node.innerHTML)
          );
          return childElement;
        } else {
          return null;
        }
      })
      .filter(Boolean);

    return htmlElements;
  }
  var htmlElement = convertToHTML(response?.description);
  return (
    <Wrapper>
      {isLoading || isLoadingGames ? (
        <GenericLoading />
      ) : (
        <Wrapper>
          <Wrapper.Flex>
            <Wrapper.Image
              src={response?.image}
              style={{ border: '2px solid #a4a4a4' }}
            />
          </Wrapper.Flex>

          <Wrapper.Column darkmode={darkmode === true ? 'true' : undefined}>
            {htmlElement.map((element, index) => (
              <React.Fragment key={index}>{element}</React.Fragment>
            ))}

            <Wrapper.FlexCard>
              {games?.results?.map(
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
                    // onClick={() => clickCard(name, slug)}
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
            </Wrapper.FlexCard>
          </Wrapper.Column>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default Creator;
