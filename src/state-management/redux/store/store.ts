import {configureStore} from "@reduxjs/toolkit";

export const store =configureStore({
    reducer:{
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( )//later handle
})


export type AppStore = typeof store //they will follow store type....
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']