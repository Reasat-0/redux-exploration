
const {createStore} = require("redux")

const Demo = () => {

    const counter = {
        count : 0
    };


        const   INCREMENT = 'INCREMENT_COUNTER',
                DECREMENT = 'DECREMENT_COUNTER',
                ADD_USER = 'ADD_USER';

        // ACTION -----------

        const incrementCounter = () => {
            return {
                type: INCREMENT
            }
        }
        const decrementCounter = () => {
            return {
                type: DECREMENT
            }
        }
        const add_user = (data) => {
            return {
                type: ADD_USER,
                payload: data
            }
        }

        // Reducer ---------

        const counterReducer = (state = counter, action) => {
            switch(action.type){
                case INCREMENT : 
                    return {
                        ...state,
                        count : state.count + 1
                    }

                case DECREMENT : 
                    return {
                        ...state,
                        count: state.count - 1 
                    }

                default: 
                    return state;
            }
        }



        const store = createStore(counterReducer)
        
        store.subscribe(()=>{
            console.log(store.getState())
        })
        
        store.dispatch((incrementCounter()))
        
        return (
            <h5> Hello From Demo </h5>
            )
    }
        
        export default Demo;
