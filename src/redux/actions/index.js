export const UpdateCount = () => {
    console.log("Called the action !!")
    return{
        type : 'UPDATE_COUNT',
        payload : 1
    }
}


export const SelectRow = (row_id,state) => {
console.log(row_id)
console.log(state)

return {
    type : 'SELECT_ROW',
    payload : {row_id : row_id , status : state}
}
}


export const DisplayCountFilter = (limit) => {
    console.log("Show only  " +limit+ "  Items")
    return{
        type : 'DISPLAY_COUNT_FILTER',
        payload : limit
    }
}

