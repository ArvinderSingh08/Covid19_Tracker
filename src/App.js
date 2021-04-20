import React from 'react';
import Charts from './Components/Charts/Charts';
import Cards from './Components/Cards/Cards';
import Country from './Components/CountryPicker/Country';
import {Fetchdata} from './Api';
import './App.module.css';
import styles from './App.module.css';
import COVIDimg from './images/COVIDimg.png';



class App extends React.Component{
  
  state={
    data:{},
    country: ''
  }

  
  async componentDidMount(){
    const Fetcheddata= await Fetchdata();
    this.setState({data: Fetcheddata});
        //console.log(data);
  };

  handleCountryChange= async (country)=>{
  
    //console.log(country);
    const Fetcheddata= await Fetchdata(country);
    console.log(Fetcheddata)
    this.setState({data : Fetcheddata, country: country});
  }
  
render(){
   const {data , country} =this.state;
  return (
    <div className={styles.container}>
      
      
      <img className={styles.image} src={COVIDimg} alt="COVID-19" />
      <Cards data={data}/>
      <Country handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country= {country}/>
    </div>
  );
}
}
export default App;
