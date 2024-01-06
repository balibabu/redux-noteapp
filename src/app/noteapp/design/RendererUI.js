import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../../features/noteapp/noteappSlice';

export default function RendererUI({ isSmallScreen }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateAppState({ newValue: { ...noteContainerStyle, width: isSmallScreen ? "80%" : "20%" }, hierarchy: 'views noteapp renderer noteItem containerStyle' }));
        dispatch(updateAppState({ newValue: noteDescriptionStyle, hierarchy: 'views noteapp renderer noteItem descriptionStyle' }));
        dispatch(updateAppState({ newValue: noteDeleteButtonStyle, hierarchy: 'views noteapp renderer noteItem deleteButton style' }));

    }, [isSmallScreen])

    return (<></>);
}


const noteContainerStyle = {
    display: "inline-block",
    margin: "5px 0px",
    marginLeft: "15px",
    padding: "20px",
    border: "1px solid rgb(100, 100, 100)",
    borderRadius: "10px",
    backgroundColor: '#bde0fe',
};

const noteDescriptionStyle = {
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    width: "90%",
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
}

const noteDeleteButtonStyle = {
    backgroundColor: '#f08080',
    // border: 'none',
    border: "3px groove red",
    borderRadius: "10px",
    cursor: 'pointer',

};