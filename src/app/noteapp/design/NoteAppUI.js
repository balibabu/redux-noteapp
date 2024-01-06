import React, { useEffect, useState } from 'react'
import RendererUI from './RendererUI';
import EditorUI from './EditorUI';
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../../features/noteapp/noteappSlice';
import { useMediaQuery } from 'react-responsive';

export default function NoteAppUI() {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    const [, setRanOnce] = useState(false);
	const dispatch = useDispatch();

    useEffect(() => {
        setRanOnce((prev) => {
            if (!prev) {
                dispatch(updateAppState({newValue:containerStyle, hierarchy:'views noteapp containerStyle'}))
                dispatch(updateAppState({newValue:floatingButtonStyle, hierarchy:'views noteapp addButton style'}))
            }
            return true;
        })
    }, [])

    return (
        <>
            <RendererUI isSmallScreen={isSmallScreen} />
            <EditorUI isSmallScreen={isSmallScreen}/>
        </>
    );
}


const containerStyle = {
    height: '100dvh',
    overflow: "auto",
    backgroundColor: "grey",
}

const floatingButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '10px',
    padding: '10px',
    fontSize: "20px",
    fontWeight: "bolder",
    borderRadius: "50px",
    border: "5px groove #0077b6",
    backgroundColor: "#90e0ef",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
    textDecoration: 'none'

}