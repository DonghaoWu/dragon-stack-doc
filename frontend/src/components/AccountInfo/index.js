import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { fetchAccountInfo } from '../../redux/actions/accountInfoActions';
import { createDragon } from '../../redux/actions/dragonActions';
import './styles.css';

class AccountInfo extends Component {

    componentDidMount() {
        this.props.fetchAccountInfo();
    }

    render() {
        return (
            <div className='accountInfo-container'>
                <div>
                    <h2>Account Info:</h2>
                    <div>Username: {this.props.accountInfo.content.username}</div>
                    <div>Balance: {this.props.accountInfo.content.balance}</div>
                    <br />
                    <Button onClick={this.props.createDragon}>Create a new dragon in current generation</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accountInfo: state.accountInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAccountInfo: () => dispatch(fetchAccountInfo),
        createDragon: () => dispatch(createDragon)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);