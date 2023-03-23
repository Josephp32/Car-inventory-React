import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Owner name",
        make: 'Make',
        model: "Model",
        year: "Year",
        price: "Price",
        description: "Description"

    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseName: (state, action) => { state.name = action.payload }, // All we're doing is setting the input to the state.name
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseMake, chooseModel, chooseYear, chooseDescription, choosePrice } = rootSlice.actions