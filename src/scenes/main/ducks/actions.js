import types from './types'

export const search = (value, data) => {
    if (!value.length) {
        return { type: '' }
    }

    return async dispatch => {
        dispatch({ type: types.IS_LOADING })

        try {
            if (!data.length) {
                data = await fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000').then(response => {
                    return response.json()
                })

                data = await handleData(data)
                
                dispatch({ type: types.ADD_DATA, payload: data })
            }

            const result = await findByKeyword(value, data)

            dispatch({ type: types.ADD_HANDLED_DATA, payload: result })
        } catch(err) {
            console.log(err)
        }

    }
}

const findByKeyword = async (value, data) => {
    const result = data.filter(item => item.keywords.includes(value))
    return result
}

const handleData = async (data) => {
    const handledData = data.map((item, i) => {
        item.favourite = false
        item.position = i
        return item
     })

     return handledData
}

export const changeSearch = value => {
    return dispatch => {
        dispatch({ type: types.CHANGE_SEARCH, payload: value })

        if (!value.length) {
            dispatch({ type: types.ADD_HANDLED_DATA, payload: [] })
        }
    }
}

export const addFavouritres = (item, favourites, data, handledData) => {
    return dispatch => {
        item.favourite = true
        data[item.position].favourite = true
        favourites.push(item)

        /*
        * Set item as favourite in handled data.
        */
        const handleData = handledData.map(i => {
            if (i.position === item.position) {
                i.favourite = true
            }

            return i
        })

        dispatch({ type: types.ADD_FAVOURITES, payload: favourites })
        dispatch({ type: types.ADD_DATA, payload: data })
        dispatch({ type: types.ADD_HANDLED_DATA, payload: handleData })
    }
}

export const removeFavourites = (item, favourites, data, handledData) => {
    return dispatch => {
        data[item.position].favourite = false
        
        /* 
        * Remove item of favourites list.
        */
        const handledFavourites = favourites.filter(i => {
            return i.position !== item.position
        })

        /*
        * Remove favourite item in handled data.
        */
       const handleData = handledData.map(i => {
            if (i.position === item.position) {
                i.favourite = false
            }

            return i
        })

        dispatch({ type: types.ADD_DATA, payload: data })
        dispatch({ type: types.ADD_FAVOURITES, payload: handledFavourites })
        dispatch({ type: types.ADD_HANDLED_DATA, payload: handleData })
    }
}