import styled from 'styled-components';

interface ContainerProps {
    width?: string;
}
export const Container = styled.div<ContainerProps>`
    width: ${(props)=>props.width};
    margin: 0 auto;
`
export const MainContainer = styled.div`
    width: 100%;
    
`
export const MainWrapper = styled.div``
