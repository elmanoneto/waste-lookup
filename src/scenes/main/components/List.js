import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import BlockUi from 'react-block-ui'
import decode from 'decode-html'
import 'react-block-ui/style.css'

import { addFavouritres, removeFavourites } from '../ducks/actions'

class List extends Component {
    _showResult() {        
        const result = this.props.handledData.map((item, i) => (
            <Wrapper key={ i }>
                <Result theme={ item.favourite ? '#23995C' : '#AAAAAA' }>
                    <i
                        className="fa fa-star" 
                        onClick={ e => !item.favourite ? this.props.addFavouritres(item, this.props.favourites, this.props.data, this.props.handledData) : this.props.removeFavourites(item, this.props.favourites, this.props.data, this.props.handledData) }>
                    </i>
                    <h2>{ item.title }</h2>
                </Result>
                <Result dangerouslySetInnerHTML={{ __html: decode(item.body) }}></Result>
            </Wrapper>
        ))

        return result
    }

    render() {
        return (
            <BlockUi blocking={ this.props.isLoading }>
                { this._showResult() }
            </BlockUi>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.appReducer.isLoading,
    handledData: state.appReducer.handledData,
    favourites: state.appReducer.favourites,
    data: state.appReducer.data
})

const mapDispatchToProps = {
    addFavouritres,
    removeFavourites
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

const Wrapper = styled.section`
    display: flex;
    padding: 30px 15px;
`
const Result = styled.div`
    display: flex;
    width: 50%;
    font-size: 26px;
    & > h2 {
        font-weight: normal;
        font-size: 32px;
        line-height: 37px;
        padding: 0 16px;
        width: 80%;
    }
    & > ul, h2 {
        margin-top: 0; 
        margin-bottom: 0;
    }
    & > i {
        top: 6px;
        height: 25px;
        cursor: pointer;
        position: relative;
        ${({ theme }) => `color: ${ theme }`}
`