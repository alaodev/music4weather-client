import React, { Fragment } from 'react';

import { Row, Col, Container } from 'react-bootstrap';

import Topbar from '../../layouts/Topbar';
import SearchPlaylist from '../../forms/SearchPlaylist';
import Playlist from '../../layouts/Playlist';

import { 
  HomeContainer
} from "./styles"; 
 
const Home = () => {
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
      </HomeContainer>
    </Fragment>
  );
}

export default Home;