import { usePassSelector } from "../store";

export const useAyuth = () => {
    const {id, email, accessToken, name} = usePassSelector(state=> state.auth);
    return{
        isAuth: !!email,
        email, accessToken, id, name
    }
} 