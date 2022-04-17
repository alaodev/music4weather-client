import React, { useContext, Fragment } from 'react';

import { PlaylistContext } from '../../providers/playlist';

import { Row, Col, Container } from 'react-bootstrap';

import Topbar from '../../components/layouts/Topbar';
import SearchPlaylist from '../../components/forms/SearchPlaylist';
import Playlist from '../../components/layouts/Playlist';

import { 
  HomeContainer,
  TemperatureContainer,
  TemperatureContent
} from "./styles"; 
 
const Home = () => {
  const { temperature } = useContext(PlaylistContext);

  return (
    <Fragment>
      <Topbar />
      <HomeContainer>
        <Row>
          <Col className="d-flex justify-content-center">
            <SearchPlaylist />
          </Col>
          <Col className="d-flex justify-content-center">
            <Playlist />
          </Col>
        </Row>
        <TemperatureContainer>
          <TemperatureContent>
            {temperature ? `Temperatura: ${temperature} ºC` : ''}
          </TemperatureContent>
        </TemperatureContainer>
      </HomeContainer>
    </Fragment>
  );
}

export default Home;