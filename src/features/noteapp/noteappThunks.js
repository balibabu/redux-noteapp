import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNoteApi, deleteNoteApi, getAllNotes, updateNoteApi } from "../../HTTP/noteapp";

export const fetchAllNotes = createAsyncThunk('noteapp/fetchAllNotes', async () => {
    const notes = await getAllNotes();
    return notes;
});

export const addNote = createAsyncThunk('noteapp/addNote', async (noteData) => {
    const newNote = await addNoteApi(noteData);
    return newNote;
});

export const deleteNote = createAsyncThunk('noteapp/deleteNote', async (id) => {
    const status = await deleteNoteApi(id);
    if (status) {
        return id;
    }
    return null;
})

export const updateNote=createAsyncThunk('noteapp/updateNote',async (note)=>{
    const updatedNote=await updateNoteApi(note);
    return updatedNote;
})