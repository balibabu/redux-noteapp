import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../../features/noteapp/noteappThunks';

export default function NoteItem({ note }) {
    const app = useSelector((store) => store.noteapp);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onItemClick = () => {
        navigate(`/editor/${note.id}`);
    }
    return (
        <div style={{...app.views.noteapp.renderer.noteItem.containerStyle, backgroundColor: note.color }}>

            <div onClick={onItemClick}
                style={app.views.noteapp.renderer.noteItem.descriptionStyle}>
                {note.description}
            </div>

            <button style={app.views.noteapp.renderer.noteItem.deleteButton.style}
                onClick={() => dispatch(deleteNote(note.id))}>
                del
            </button>
            
        </div>
    )
}
