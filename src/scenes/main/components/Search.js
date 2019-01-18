import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { changeSearch, search } from '../ducks/actions'

class Search extends Component {
    _handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.props.search(this.props.searchValue, this.props.data);
        }
    }

    render() {
        return (
            <Wrapper>
                <Input 
                    value={ this.props.searchValue }
                    onKeyPress={ this._handleKeyPress }
                    onChange={ e => this.props.changeSearch(e.target.value) }>
                </Input>
                <Button onClick={ e => this.props.search(this.props.searchValue, this.props.data) }>
                    <i className="fa fa-search"></i>
                </Button>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    searchValue: state.appReducer.search,
    data: state.appReducer.data
})

const mapDispatchToProps = {
    search,
    changeSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

const Wrapper = styled.section`
    display: flex;
    padding: 15px;
`

const Input = styled.input`
    width: 95%;
    outline: none;
    font-size: 30px;
    padding: 15px 0;
    text-indent: 15px;
    border-radius: 3px;
    border: 1px solid black;
    border: 2px solid #AAAAAA;
`

const Button = styled.button`
    color: #fff;
    outline: none;
    font-size: 50px;
    margin: 0 0 0 25px;
    background: #23995C;
    transform: scale(-1, 1);
`