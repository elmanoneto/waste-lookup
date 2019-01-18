import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import decode from 'decode-html'

import { removeFavourites } from '../ducks/actions'

class Favourites extends Component {
    _showResult() {
        if (this.props.favourites.length <= 1) {
            return (
                <div>
                </div>
            )
        }

        const result = 
            <Wrapper>
                <Title>Favourites</Title>
                { this.props.favourites.map((item, i) =>  (  
                <WrapperResult key={ i }>
                    <Result>
                        <i className="fa fa-star" 
                            onClick={ e => this.props.removeFavourites(item, this.props.favourites, this.props.data, this.props.handledData) }>
                        </i> 
                        <h2>{ item.title }</h2>
                    </Result>
                    <Result dangerouslySetInnerHTML={{ __html: decode(item.body) }}></Result>
                </WrapperResult>
                )) }
            </Wrapper>

        return result
    }
    
    render() {
        return (
            <div>
                { this._showResult() }
            </div>
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
    removeFavourites
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)

const Wrapper = styled.section`
    padding: 15px;
    background-color: #F7FEFA;
`

const WrapperResult = styled.div`
    display: flex;
    padding: 10px 5px;
`

const Title = styled.h1`
    margin: 0;
    color: #23995C;
    display: block;
    font-size: 40px;
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
        margin-bottom: 0
    }
    & > i {
        top: 6px;
        height: 25px;
        color: #23995C;
        cursor: pointer;
        position: relative;
    }
`