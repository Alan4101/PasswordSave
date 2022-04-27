import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface AuthUser{
    id: string;
    accessToken: string;
    email: string;
    password: string;
    name: string;
}

const initialState: AuthUser = {
    id: '',
    name:'',
    email: '',
    password: '',
    accessToken: ''
} 
const emptyState: AuthUser = {
    id: '',
    name:'',
    email: '',
    password: '',
    accessToken: ''
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser(state, action:PayloadAction<AuthUser>){
           state.accessToken = action.payload.accessToken;
           state.id = action.payload.id;
           state.name = action.payload.name;
           state.email = action.payload.email;

        },
        reset:()=> emptyState
    }
    
});
export const {setUser, reset} = authSlice.actions;
export default authSlice.reducer;
