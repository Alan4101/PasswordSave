import { FC } from "react";
import {Outlet} from 'react-router-dom';
import { MainContainer, MainWrapper } from "../../styles/commonStyles";
import { Header } from "../Header/Header";

export const Layout: FC = () => {
    return (
        <MainContainer>
            <Header></Header>
            <MainWrapper>
                <Outlet/>
            </MainWrapper>
        </MainContainer>
    )
}