import { ActionCreators } from "../redux/notesReducer";
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1/student',
})

export const GetNotes = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setNotes(data));
    } catch {
        console.log('Error!');
    }
}

export const DeleteNote = async (dispatch, note) => {
    console.log("ht");
    try {
        await axiosInstance.delete(`/${note.id}`);
        dispatch(ActionCreators.deleteNote(note));
    } catch {
        console.log('Error!');
    }
}