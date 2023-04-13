const { configureStore } = require('@reduxjs/toolkit');
const cakeReducer = require('../app/features/cake/cakeSlice')


const store = configureStore({
    reducer: {
        cake: cakeReducer,
    },
})

module.exports  = store;