const { configureStore } = require('@reduxjs/toolkit');
const cakeReducer = require('../app/features/cake/cakeSlice')
const icecreamReducer = require('./features/icecream/icecreamSlice')


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
})

module.exports  = store;