const globalState = {
    NorthSouth: "Green",
    CarWaiting: false,
    WaitTime: 30,
};

function reducer(state, action) {
    switch(action.type) {
        case ("Car Waiting"): {
            return {
                ...state,
                CarWaiting: true,
                WaitTime: action.payload.WaitTime
            }
        }
        case ("finish waiting"): {
            return {
                ...state,
                NorthSouth: "yellow"
            }
        }
        default: {
            return state;
        }
    }
}

console.log(globalState);
const newState1 = reducer(globalState, {
    type: "car waiting",
    payload: {
        WaitTime: 5
    }
});
console.log(newState1);

const newState2 = reducer(newState1, {
    type: "finish waiting"
})
console.log(newState2);