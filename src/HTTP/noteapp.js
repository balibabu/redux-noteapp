import axios from 'axios';

// const BASE_URL = 'http://127.0.0.1:8000/api/notes/';
const BASE_URL = 'https://babu1.pythonanywhere.com/api/notes/';

export const getAllNotes = async () => {
	try {
		const response = await axios.get(BASE_URL);
		return response.data;
	} catch (error) {
		console.error('Error fetching notes:', error);
		throw error;
	}
};

export const addNoteApi = async (noteData) => {
	try {
		const response = await axios.post(BASE_URL, noteData);
		return response.data;
	} catch (error) {
		console.error('Error adding note:', error);
		throw error;
	}
};

export const updateNoteApi = async (noteData) => {
	try {
		const response = await axios.put(`${BASE_URL}${noteData.id}/`, noteData);
		if (response.status === 200) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.error('Error updating note:', error);
		return false;
	}
};

export const deleteNoteApi = async (noteId) => {
	try {
		const response = await axios.delete(`${BASE_URL}${noteId}/`);
		if (response.status === 204) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.error('Error deleting note:', error);
		throw error;
	}
};

