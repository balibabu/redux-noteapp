import React, { useEffect, useState } from 'react'
import Renderer from './Renderer';
import { Link } from 'react-router-dom';
import NoteAppUI from './design/NoteAppUI';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNotes } from '../../features/noteapp/noteappThunks';

export default function NoteApp() {
    const app = useSelector((store) => store.noteapp);
    const dispatch = useDispatch();
    const [ranOnce, setRanOnce] = useState(false);

    useEffect(() => {
        setRanOnce((prev) => {
            if (!prev) {
                dispatch(fetchAllNotes());
            }
            return true;
        })
    }, [])

    return (
        <div style={app.views.noteapp.containerStyle}>
            <NoteAppUI />
            <Renderer />
            <Link to='/editor/x' type="button"
                style={app.views.noteapp.addButton.style}
            >{app.views.noteapp.addButton.title}</Link>
        </div>
    )
}
