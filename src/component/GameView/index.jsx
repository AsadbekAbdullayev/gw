import React, { useEffect, useState } from 'react';
import { Container, Card } from './style';
import { useParams } from 'react-router-dom';
import { useRequest } from '../../hooks';
import { GenericLoading } from '../extra-component';
import { useStyledContex } from '../../context/useContext';
import FbImageLibrary from 'react-fb-image-grid';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const GameFor = () => {
  const [{ darkmode }] = useStyledContex();
  let { name } = useParams();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };
  const { response, isLoading } = useRequest(
    'GET',
    `https://api.rawg.io/api/games/${name?.slice(
      1
    )}?key=c542e67aec3a4340908f9de9e86038af`
  );
  const { response: imagesData, isLoadingImages } = useRequest(
    'GET',
    `https://api.rawg.io/api/games/${name?.slice(
      1
    )}/screenshots?page=1&page_size=12&with_deleted=false&key=c542e67aec3a4340908f9de9e86038af`
  );

  const { response: suggesData, isLoadingSugges } = useRequest(
    'GET',
    `https://api.rawg.io/api/games/${name?.slice(
      1
    )}/suggested?page=1&page_size=8&key=c542e67aec3a4340908f9de9e86038af`
  );

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
  var htmlElement = convertToReactComponents(response?.description);
  useEffect(() => {
    setImages(imagesData?.results?.map((v) => v?.image));
  }, [imagesData]);

  const clickCard = (name, slug, id) => {
    navigate(`/game/:${slug}`);
  };
  return (
    <Container>
      {isLoading || isLoadingImages || isLoadingSugges ? (
        <GenericLoading />
      ) : (
        <Container darkmode={darkmode === true ? 'true' : undefined}>
          {isOpen && images?.length ? (
            <Lightbox
              mainSrc={images[photoIndex] && `${images[photoIndex]}`}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          ) : (
            ''
          )}

          <Container.Title darkmode={darkmode === true ? 'true' : undefined}>
            {response?.name}
          </Container.Title>
          <Container.Media>
            {response?.clip?.clip && (
              <ReactPlayer
                url={response?.clip?.clip}
                controls
                width='100%'
                height={'-1px'}
              />
            )}
          </Container.Media>
          {images && (
            <FbImageLibrary
              images={images}
              width={10}
              countFrom={4}
              onClickEach={({ src, index }) => {
                openLightbox(index);
              }}
            />
          )}
          {htmlElement.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
          <Container.Line darkmode={darkmode === true ? 'true' : undefined} />
          <div
            style={{
              width: '100%',
              color: darkmode ? '#2874ba' : '#86b64e',
              fontWeight: '600',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              alignItems: 'center',
              fontSize: '16px',
            }}
          >
            Platforms:{' '}
            {response?.parent_platforms?.map(({ platform }, i) => (
              <Container.Desc
                darkmode={darkmode === true ? 'true' : undefined}
                onClick={() => navigate(`/platforms/:${platform?.id}`)}
              >
                {platform?.name}
                {response?.platforms?.length - 1 !== i && ','}
              </Container.Desc>
            ))}
          </div>

          <Container.Line darkmode={darkmode === true ? 'true' : undefined} />
          <div
            style={{
              width: '100%',
              color: darkmode ? '#2874ba' : '#86b64e',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '5px',
              fontSize: '16px',
            }}
          >
            Metascore :{' '}
            <Container.Meta>{response?.metacritic || 34}</Container.Meta>
          </div>

          <Container.Line darkmode={darkmode === true ? 'true' : undefined} />
          <div
            style={{
              width: '100%',
              color: darkmode ? '#2874ba' : '#86b64e',
              fontWeight: '600',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              alignItems: 'center',
              fontSize: '16px',
            }}
          >
            Genres:{' '}
            {response?.genres?.map(({ name, id }, i) => (
              <Container.Desc
                darkmode={darkmode === true ? 'true' : undefined}
                onClick={() => navigate(`/genres/:${id}`)}
              >
                {name}
                {response?.genres?.length - 1 !== i && ','}
              </Container.Desc>
            ))}
          </div>
          <Container.Line darkmode={darkmode === true ? 'true' : undefined} />

          <div
            style={{
              width: '100%',
              color: darkmode ? '#2874ba' : '#86b64e',
              fontWeight: '600',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              alignItems: 'center',
              fontSize: '16px',
            }}
          >
            Developer:{' '}
            {response?.developers?.map(({ name, id, slug }, i) => (
              <Container.Desc
                darkmode={darkmode === true ? 'true' : undefined}
                onClick={() => navigate(`/developers/:${slug}`)}
              >
                {name}
                {response?.developers?.length - 1 !== i && ','}
              </Container.Desc>
            ))}
          </div>
          <Container.Line darkmode={darkmode === true ? 'true' : undefined} />

          {response?.website && (
            <>
              <div
                style={{
                  width: '100%',
                  color: darkmode ? '#2874ba' : '#86b64e',
                  fontWeight: '600',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '5px',
                  alignItems: 'center',
                  fontSize: '16px',
                }}
              >
                Website:{' '}
                <Container.Link
                  darkmode={darkmode === true ? 'true' : undefined}
                  href={response?.website}
                  target='_blank'
                >
                  {response?.website}
                </Container.Link>
              </div>
              <Container.Line
                darkmode={darkmode === true ? 'true' : undefined}
              />
            </>
          )}

          <div style={{ widht: '100%', textAlign: 'center' }}>
            <Container.Title darkmode={darkmode === true ? 'true' : undefined}>
              Games like {response?.name}
            </Container.Title>
          </div>

          <Container.Flex>
            {suggesData?.results?.map(
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
                  onClick={() => clickCard(name, slug, id)}
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
        </Container>
      )}
    </Container>
  );
};

export default GameFor;
