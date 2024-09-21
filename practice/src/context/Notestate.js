import { memo, useMemo } from "react";
import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const state = useMemo(()=>({
        "name":"Harry",
        "class":"5th"
    }))
return (
    <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;