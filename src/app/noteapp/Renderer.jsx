import React from 'react'
import { useSelector } from 'react-redux'
import NoteItem from './NoteItem';

export default function Renderer() {
	const app = useSelector((store) => store.noteapp);

	return (
		<div style={app.views.noteapp.renderer.containerStyle}>
			{app.modal.notes.map((note,index) => {
				return <NoteItem key={index} note={note}/>
			})}
		</div>
	)
}