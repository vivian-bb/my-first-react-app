import styled from 'styled-components'



export const IconsContainer =styled.div`
    display: flex;
    width: 30%;
    font-size: 40px;
    justify-content: space-around;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    color: transparent;
    z-index: 0;
`;

export const Content = styled.div`
    color: width;
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;
    hr {
        width: 40%;
    }
`;