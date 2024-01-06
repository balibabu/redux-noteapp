import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import currentDateToColor from './utils/RandomColor';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, updateNote } from '../../features/noteapp/noteappThunks';


const dummyDetails = { description: "", color: currentDateToColor() };
export default function Editor() {
	const { noteId } = useParams();
	const [formDetails, setFormDetails] = useState(dummyDetails);
	const [, setInitialFetch] = useState(false);
	const navigate = useNavigate();
	const app = useSelector((store) => store.noteapp);
	const dispatch = useDispatch();


	useEffect(() => {
		setInitialFetch((prev) => {
			if (!prev) {
				if (!isNaN(noteId)) {
					const foundNote = app.modal.notes.find((note) => note.id === parseInt(noteId));
					setFormDetails(foundNote);
				}
			}
			return true;
		})
		// eslint-disable-next-line
	}, [])

	const onFromDetailsChange = (e) => {
		const { name, value } = e.target;
		setFormDetails((prev) => ({ ...prev, [name]: value }));
	}

	const onSaveClick = async () => {
		const id = app.modal.notes.length;
		if (isNaN(noteId)) {
			dispatch(addNote({ ...formDetails, id: id }));
		} else {
			dispatch(updateNote(formDetails));
		}
		setFormDetails(dummyDetails);
		navigate(-1);
	}

	return (
		<div style={app.views.noteapp.editor.containerStyle}>
			<div style={app.views.noteapp.editor.header.containerStyle}>
				<input disabled placeholder='Title'
					value={formDetails.description}
					style={app.views.noteapp.editor.header.titleStyle}/>

				<input type="color" name='color'
					value={formDetails.color}
					onChange={onFromDetailsChange}
					style={app.views.noteapp.editor.header.colorpicker.style} />
			</div>
			
			<textarea
				name='description'
				value={formDetails.description}
				onChange={onFromDetailsChange}
				style={app.views.noteapp.editor.descriptionStyle}/>

			<button
				onClick={onSaveClick}
				style={app.views.noteapp.editor.button.style}>
				{app.views.noteapp.editor.button.title}
			</button>
		</div>
	)
}
