import React, { Component } from 'react';
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


const App = (props) => {
  let history = useHistory();
  if (!props.account.loggedIn) {
    history.push("/");
  }

  return (
    props.account.loggedIn ? <Home /> : <AuthForm />
  )
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps, null)(App);