export const ADD_USER = 'ADD_USER'
export const PRI_ROUTE = 'PRI_ROUTE'

export const addUser = (data) => {
        return (
        {
            type: ADD_USER,
            payload: data
        }
    )
}

