const intitialState = {
    value : 10
}

export default (state = intitialState,action) => {
   switch(action.type){
       case 'DISPLAY_COUNT_FILTER':
       const ItemsLimit = {value : action.payload}
       return Object.assign({},ItemsLimit)

       default:
       return state

   }
   
}