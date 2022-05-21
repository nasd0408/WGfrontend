import styled from 'styled-components'

export const Container = styled.View`
    flex:1;
    align-items:center;
    background-color: transparent;
    padding: 15px 5px 0px 5px;
`;
export const Card = styled.View`
    background-color: #E6EAF4;
    width: 75%;
    margin-bottom:0px;
    border-radius:10px;
`;

export const MessageInfo = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    padding: 15px;
    align-items:center;
`;

export const MessageInfoText = styled.View`
    flex-direction:column;
    justify-content:center;
    margin-left:10px;
    flex:6
`;

export const MessageTime = styled.Text`
    font-size:11px;
    color: #666;
`;

export const MessageText = styled.Text`
    font-size: 14px;
    padding-bottom:1px;
`
export const ModalContainer = styled.View`
    flex:1;
    background-color: #E6EAF4;
    margin:0 ;
    padding: 5px;
    justify-content:flex-start;
    align-items:center;
    border-radius:10px;
    
`;
export const ModalItem = styled.View`
    width: 100%;
    border-color: #5D08DA;
    border-bottom-width:1px;
    margin-vertical:5px;
`;

export const ListHeaderContainer = styled.View`
    width:100%;
    background-color: #5D08DA;
    padding:10px;
    border-radius:5px;
    align-items:center;
`;