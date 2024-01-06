const modal = {
    notes: [
        { id: 0, description: "dasf", color: "#96ffff" },
        { id: 1, description: "sadf", color: "#96ffff" },
    ]
}

export const initialState = {
    modal,
    views: {
        noteapp: {
            containerStyle: {},
            editor: {
                containerStyle: {},
                header: {
                    containerStyle: {

                    },
                    titleStyle: { overflow: "hidden", whiteSpace: "nowrap" },
                    colorpicker: {
                        style: {}
                    },
                },
                descriptionStyle: { height: "300px" },
                button: {
                    title: "insert",
                    style: {},
                    onClick: null,
                    create: null,
                    update: null
                }
            },
            renderer: {
                containerStyle: {},
                noteItem: {
                    containerStyle: {},
                    descriptionStyle: {},
                    timestampStyle: {},
                    deleteButton: {
                        title: "x",
                        style: {},
                        onClick: null,
                    },
                    onClick: null,

                }
            },
            addButton: {
                title: "+",
                style: {},
                onClick: null
            }
        }
    }
}