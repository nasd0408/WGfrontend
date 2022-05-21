import styled from 'styled-components'

export const Container = styled.View`
    flex:1;
    align-items:center;
    background-color: #060422;
    padding:20px
`;
export const Card = styled.View`
    background-color: #E6EAF4;
    width:100%;
    margin-bottom:15px;
    border-radius:10px;
`;

export const MessageInfo = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    padding: 15px;
    align-items:center;
`;

export const UserImg = styled.Image`
    width:50px;
    height:50px;
    border-radius:25px
`;
export const MessageInfoText = styled.View`
    flex-direction:column;
    justify-content:center;
    margin-left:10px;
    flex:6
`;
export const Opciones = styled.TouchableOpacity`

`;
export const UserName = styled.Text`
    font-size:14px;
    font-weight: bold;
`;
export const MessageTime = styled.Text`
    font-size:12px;
    color: #666;
`;

export const LastMessage = styled.Text`
    font-size: 14px;
    padding-horizontal:15px;
    padding-bottom:20px;
    min-width: 100%;
`
export const ModalContainer = styled.View`
    flex:1;
    background-color: #E6EAF4;
    margin:0 ;
    padding: 5px 5px 0 5px;
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

export const ResponseForm = styled.View`
    display: flex;
    flex-direction: row;
    margin: 0px 27px;
    padding: 0;
`