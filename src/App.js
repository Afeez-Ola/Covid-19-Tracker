import React, {Component} from 'react';

import {Charts, Cards, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api';


import coronaImage from './images/image.jpg';




class App extends Component {

  state = {
    data: {},
    country: '',
  }

async componentDidMount(){


  const fetchedData =  await fetchData();

  this.setState({data:fetchedData})
}

handleCountryChange = async(country) => {
  console.log(country)
  const fetchedData =  await fetchData(country);
  console.log(fetchedData)

  this.setState({data:fetchedData, country:country})
  
}


  render(){
    const {data, country} = this.state
    return (
    <div className={styles.container}>
      <img className= {styles.image} src= {coronaImage} alt= 'COVID-19' />
      <Cards data = {data} />
      <CountryPicker handleCountryChange = {this.handleCountryChange}/>
      <Charts data = {data} country = {country}/>
    </div>
  );
}
  
}

export default App;
