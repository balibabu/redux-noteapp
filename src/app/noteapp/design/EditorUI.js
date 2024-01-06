import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../../features/noteapp/noteappSlice';

export default function EditorUI() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateAppState({ newValue: containerStyle, hierarchy: 'views noteapp editor containerStyle' }));
        dispatch(updateAppState({ newValue: headerContainerStyle, hierarchy: 'views noteapp editor header containerStyle' }));
        dispatch(updateAppState({ newValue: colorPickerStyle, hierarchy: 'views noteapp editor header colorpicker style' }));
        dispatch(updateAppState({ newValue: titleStyle, hierarchy: 'views noteapp editor header titleStyle' }));
        dispatch(updateAppState({ newValue: descriptionStyle, hierarchy: 'views noteapp editor descriptionStyle' }));
        dispatch(updateAppState({ newValue: floatingButtonStyle, hierarchy: 'views noteapp editor button style' }));

    }, [])
    return (<></>);
}


const containerStyle = {
    background: '#219ebc',
    margin: '0px',
    padding: '0px',
    height: '100dvh',
}
const headerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: "10px"
}

const colorPickerStyle = {
    height: 'auto',

}
const descriptionStyle = {
    width: '90dvw',
    height: '78%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    padding: '5px',
    padding: '10px',
    backgroundColor: '#8ecae6',
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '10px',
};

const floatingButtonStyle = {
    position: 'fixed',
    bottom: '20px', // Adjust as needed
    right: '10px', // Adjust as needed
    padding: '10px',
    fontSize: "20px",
    fontWeight: "bolder",
    borderRadius: "50px",
    border: "5px groove #0077b6",
    backgroundColor: "#90e0ef",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
}

const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginRight: 'auto',
    border: 'none',
    outline: 'none',
    padding: '0.4rem',
    marginLeft: '2vw',
    backgroundColor: "transparent"
}