const reducer=(state,action)=>{

    switch(action.type){
      case 'CHANGE_NAME': state={
                            ...state,
                            name:action.payload
                          }
                          break;
      case 'INCREMENT':
                            state={
                                ...state,
                                count : state.count + action.payload
                            }
                        break;
      case 'DECREMENT':{ state.count == 0 ? undefined :

                              state=  {
                              ...state,
                              count: state.count - action.payload
                                }
                              }

      default:break;
    }

    return state;
}

export default reducer;
