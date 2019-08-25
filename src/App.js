import React, { Component } from 'react';
import _ from 'lodash';
import { randomPhoneNumbers } from './helpers/phoneNumberGenerator'
import './App.css';
import NavBar from './components/NavBar'
import NumbersTable from './components/NumbersTable'
import SubNav from './components/SubNav'

class App extends Component {
  constructor (args) {
    super(args)
    this.state = {
      phoneNumbers: [],
      sortOrder: 'asc',
      sortArrowActive: true 
    }
  }

  componentDidMount() {
      randomPhoneNumbers(phoneNumbers=>{
      this.setState({
        phoneNumbers: _.sortBy(phoneNumbers) ,
    })
    })

  }

 generateNumbers = ()=>{
   randomPhoneNumbers(phoneNumbers=>{
      this.setState({
        phoneNumbers: _.sortBy(phoneNumbers) ,
    })
   })
 }

 sortNumbers = ()  => {
  const {phoneNumbers, sortOrder} = this.state;
    this.setState({
      phoneNumbers:sortOrder === 'asc' ? phoneNumbers.reverse() : _.sortBy(phoneNumbers) ,
      sortOrder: sortOrder === 'asc' ? 'desc' : 'asc',
    })
  }


  render() {
    const { phoneNumbers, sortOrder, sortArrowActive } = this.state
    const data = phoneNumbers.map(phoneNumber =>({number:`07${phoneNumber}`}))
    const max = `07${_.max(phoneNumbers)}`
    const min =  `07${_.min(phoneNumbers)}`
    const total = phoneNumbers.length

    return (
      <div>
        <NavBar generateNumbers={this.generateNumbers} data={data}></NavBar>
        <SubNav max={max} min={min} total={total}> </SubNav>
        <NumbersTable 
          phoneNumbers={phoneNumbers}
          sortOrder={sortOrder}
          sortNumbers={this.sortNumbers}
          sortArrowActive={sortArrowActive}
        >
        </NumbersTable>
      </div>
    );
  }
}

export default App;