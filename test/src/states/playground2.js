// action generator
export function setCode(code) {
    return { 
        type: '@CODE/SET_CODE',
        code
    };
}

export function setTemp(temp) {
    return { 
        type: '@TEMP/SET_TEMP',
        temp
    };
}

export function code(state = -1, action) {
    switch(action.type) {
        case '@CODE/SET_CODE' :
            return action.code;
        default:
            return state;
    }
}

export function temp(state = 0, action) {
    switch(action.type) {
        case '@TEMP/SET_TEMP' :
            return action.temp;
        default:
            return state;
    }
}
