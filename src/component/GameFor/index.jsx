import React, { useEffect, useState } from 'react';
import { Container, Card } from './style';
import { useStyledContex } from '../../context/useContext';
import { GenericLoading } from '../extra-component';
import { useRequest } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const GameFor = () => {
  const [{ darkmode }] = useStyledContex();
  const navigate = useNavigate();

  const [url, setUrl] = useState(
    window?.location?.pathname === '/bestof'
      ? 'games/lists/greatest?discover=true&page_size=40'
      : window?.location?.pathname === '/topgames'
      ? 'games/lists/popular?discover=true&page_size=40'
      : window?.location?.pathname === '/platforms'
      ? 'platforms?page_size=40'
      : window?.location?.pathname === '/creators'
      ? 'creators?page_size=40'
      : window?.location?.pathname === '/genres'
      ? 'genres?page_size=40'
      : 'developers?page_size=40'
  );

  useEffect(
    () =>
      setUrl(
        window?.location?.pathname === '/bestof'
          ? 'games/lists/greatest?discover=true&page_size=40'
          : window?.location?.pathname === '/topgames'
          ? 'games/lists/popular?discover=true&page_size=40'
          : window?.location?.pathname === '/platforms'
          ? 'platforms?page_size=40'
          : window?.location?.pathname === '/creators'
          ? 'creators?page_size=40'
          : window?.location?.pathname === '/genres'
          ? 'genres?page_size=40'
          : 'developers?page_size=40'
      ),
    [window?.location?.pathname]
  );
  /* {window?.location?.pathname?.slice(1)} ====> url*/
  // https://rawg.io/api/games/evil-tonight/screenshots?page=1&page_size=12&with_deleted=false&key=c542e67aec3a4340908f9de9e86038af  ==>screenshotlar
  // https://rawg.io/api/games/evil-tonight?key=c542e67aec3a4340908f9de9e86038af ===> shu uyin haqida umumiy malumot
  // https://rawg.io/api/games/evil-tonight/suggested?page=1&page_size=8&key=c542e67aec3a4340908f9de9e86038af  ====> shunga uxshagan uyinlar
  // https://rawg.io/api/games/evil-tonight/achievements?page=1&page_size=12&key=c542e67aec3a4340908f9de9e86038af buni bilmadim lekin kerak bulib qolar
  const { response, isLoading } = useRequest(
    'GET',
    `https://api.rawg.io/api/${url}&key=c542e67aec3a4340908f9de9e86038af`
  );

  const clickCard = (name, slug, id) => {
    if (window?.location?.pathname === '/creators') {
      navigate(`/creators/:${slug}`);
    } else if (window?.location?.pathname === '/platforms') {
      navigate(`/platforms/:${id}`);
    } else if (window?.location?.pathname === '/genres') {
      navigate(`/genres/:${id}`);
    } else {
      navigate(`/game/:${slug}`);
    }
  };
  // test
  return (
    <Container>
      {isLoading ? (
        <GenericLoading />
      ) : (
        <Container.Flex>
          {response?.results?.map(
            ({ id, background_image, image_background, name, image, slug }) => (
              <Card
                darkmode={darkmode === true ? 'true' : undefined}
                key={id}
                onClick={() => clickCard(name, slug, id)}
              >
                <Card.Image
                  url={image || background_image || image_background}
                  className='cardImage'
                  loading='lazy'
                />
                <Card.Content>
                  <Card.Title darkmode={darkmode === true ? 'true' : undefined}>
                    {name}
                  </Card.Title>
                </Card.Content>
              </Card>
            )
          )}
        </Container.Flex>
      )}
    </Container>
  );
};

export default GameFor;
