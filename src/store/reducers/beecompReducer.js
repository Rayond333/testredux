const initState = {
    bienenhaeuser: [
        {id: '1', name: 'Neues Bienenhaus', location: 'Frankfurt'},
        {id: '2', name: 'Mein Bienenhaus', location: 'Darmstadt'},
        {id: '3', name: 'Kleines Bienenhaus', location: 'Hanau'}
    ]
}

const beecompReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BIENENHAUS': 
            console.log('created bienenhaus', action.bienenhaus)
    }
    return state
}

export default beecompReducer