import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import 'font-awesome/css/font-awesome.min.css';

import reducers from './scenes/main/ducks/reducers'
import List from './scenes/main/components/List'
import Header from './scenes/main/components/Header'
import Search from './scenes/main/components/Search'
import Favourites from './scenes/main/components/Favourites'

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk))) }>
			<Header></Header>
			<Search></Search>
			<List></List>
			<Favourites></Favourites>
	  </Provider>
    )
  }
}
