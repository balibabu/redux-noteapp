import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './architecture';
import { addNote, deleteNote, fetchAllNotes, updateNote } from "./noteappThunks";


const noteappSlice = createSlice({
    name: 'noteapp',
    initialState,
    reducers: {
        // addNote: (state, action) => {
        //     const newNote = action.payload;
        //     state.modal.notes = [...state.modal.notes, newNote];
        // },
        // deleteNote: (state, action) => {
        //     const id = action.payload;
        //     state.modal.notes = state.modal.notes.filter((note) => note.id !== id);
        // },
        // updateNote: (state, action) => {
        //     const updatedNote = action.payload;
        //     state.modal.notes = state.modal.notes.map((note) =>
        //         note.id === updatedNote.id ? updatedNote : note
        //     );
        // },
        updateAppState: (state, action) => {
            const newValue = action.payload.newValue;
            const hierarchy = action.payload.hierarchy;
            const steps = hierarchy.split(' ');
            let current = state;
            for (let i = 0; i < steps.length - 1; i++) {
                const key = steps[i];
                if (current.hasOwnProperty(key)) {
                    current = current[key];
                } else {
                    console.log('Please provide correct hierarchy');
                }
            }
            const lastKey = steps[steps.length - 1];
            current[lastKey] = newValue;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllNotes.fulfilled, (state, action) => {
                state.modal.notes = action.payload;
            })
            .addCase(addNote.fulfilled, (state, action) => {
                const newNote = action.payload;
                state.modal.notes = [newNote,...state.modal.notes];
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                const id = action.payload;
                state.modal.notes = state.modal.notes.filter((note) => note.id !== id);
            })
            .addCase(updateNote.fulfilled, (state, action) => {
                const updatedNote = action.payload;
                state.modal.notes = state.modal.notes.map((note) =>
                    note.id === updatedNote.id ? updatedNote : note
                );
            })
    },
});

export const { updateAppState } = noteappSlice.actions;
export default noteappSlice.reducer;