import React, { useState, useEffect, useContext, Fragment } from 'react';

import { PlaylistContext } from '../../../providers/playlist';

import { Country, State, City }  from 'country-state-city';

import http from '../../../http';

import {
  Tab
} from "react-bootstrap";

import {
  SearchPlaylistContainer,
  TabsStyled
} from './styles';

import Input from '../../controllers/Input';
import Button from "../../controllers/Button";
import Select from "../../controllers/Select";

const SearchPlaylist = () => {
  const { setPlaylist, setTemperature } = useContext(PlaylistContext)

  const [searchBy, setSearchBy] = useState('city');

  const [isLoading, setIsLoading] = useState(false);

  const [countries] = useState([{name: 'Selecione um país'}, ...Country.getAllCountries()]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [country, setCountry] = useState(0);
  const [state, setState] = useState(0);
  const [city, setCity] = useState(0);
  
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (country) {
      setState(0);
      setCity(0);
      setStates([{name: 'Selecione um estado'}, ...State.getStatesOfCountry(countries[country].isoCode)]);
    }
  }, [country]);

  useEffect(() => {
    if (state) {
      setCity(0);
      setCities([{name: 'Selecione uma cidade'}, ...City.getCitiesOfState(countries[country].isoCode, states[state].isoCode)]);
    }
  }, [state]);

  const validateCSCFields = () => {
    if (!Number(country)) {
      alert('País obrigatório');
      return false;
    }
    if (!Number(state)) {
      alert('Estado obrigatório');
      return false;
    }
    if (!Number(city)) {
      alert('Cidade obrigatória');
      return false;
    }
    return true;
  }

  const validateCoordinatesFields = () => {
    if (!latitude) {
      alert('Latitude obrigatória');
      return false;
    }
    if (!longitude) {
      alert('Longitude obrigatória');
      return false;
    }
    return true;
  }

  const getMusic4WeatherBy = async () => {
    try {
      if (searchBy === 'city') {
        if (validateCSCFields()) {
          setIsLoading(true);
          setLatitude(cities[city].latitude);
          setLongitude(cities[city].longitude);
          const result = await http.get(
            `music4weather/${cities[city].latitude}/${cities[city].longitude}`
          );
          setPlaylist(result.data.playlist);
          setTemperature(result.data.temperature);
        }
      } else {
        if (validateCoordinatesFields()) {
          setIsLoading(true);
          const result = await http.get(
            `music4weather/${latitude}/${longitude}`
          );
          setPlaylist(result.data.playlist);
          setTemperature(result.data.temperature);
        }
      }
    } catch (e) {
      console.error(e);
      alert('Falha ao buscar sua playlist. Tente novamente!');
      throw e;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SearchPlaylistContainer>
      <TabsStyled 
        defaultActiveKey="city" 
        variant="pills"
        onSelect={value => setSearchBy(value)}
      >
        <Tab eventKey="city" title="Cidade">
          <Select 
            label="País:"
            items={countries}
            itemsLabel="name"
            itemsValue="isoCode"
            onChange={(event) => setCountry(event.target.value)}
            value={country}
          />
          <Select
            label="Estado:"
            items={states}
            itemsLabel="name"
            itemsValue="isoCode"
            onChange={(event) => setState(event.target.value)}
            value={state}
          />
          <Select
            label="Cidade:"
            items={cities}
            itemsLabel="name"
            itemsValue="isoCode"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
          <datalist />
        </Tab>
        <Tab 
          eventKey="coordinates"
          title="Coordenadas"
        >
          <Fragment>
            <Input 
              label="Latitude:"
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
            />
            <Input 
              label="Longitude:"
              value={longitude}
              onChange={(event) => setLongitude(event.target.value)}
            />
          </Fragment>
        </Tab>
      </TabsStyled>
      <Button
        isLoading={isLoading}
        title="Buscar playlist"
        onClick={() => getMusic4WeatherBy()}
      />
    </SearchPlaylistContainer>
  );
}

export default SearchPlaylist;