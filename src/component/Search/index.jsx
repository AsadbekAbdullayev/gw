import React from 'react';
import { Wrapper, Card } from './style';
import { useStyledContex } from '../../context/useContext';
import { useParams } from 'react-router-dom';
import { useRequest } from '../../hooks';
import { useNavigate } from 'react-router-dom';

import { GenericLoading } from '../extra-component';
const Search = () => {
  const [{ darkmode }] = useStyledContex();
  let { name } = useParams();
  const navigate = useNavigate();

  const { response, isLoading } = useRequest(
    'GET',
    `https://rawg.io/api/search?search=${name?.slice(
      1
    )}&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af`
  );

  const clickCard = (name, slug, id) => {
    navigate(`/game/:${slug}`);
  };
  return (
    <Wrapper>
      {isLoading ? (
        <GenericLoading />
      ) : (
        <Wrapper>
          <Wrapper.Column darkmode={darkmode === true ? 'true' : undefined}>
            <Wrapper.FlexCard>
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
            </Wrapper.FlexCard>
          </Wrapper.Column>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default Search;
