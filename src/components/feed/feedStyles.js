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
    margin-bottom:20px;
    border-radius:10px;
`;

export const UserInfo = styled.TouchableOpacity`
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
export const UserInfoText = styled.View`
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
export const PostTime = styled.Text`
    font-size:12px;
    color: #666;
`;
export const EstadisticaText = styled.Text`
    font-size:14px;
    color: #666;
    padding-left: 15px;
`;
export const EstadisticaWrapper = styled.View `
    flex-direction:row;
    padding-top:5px;
`;
export const PostText = styled.Text`
    font-size: 14px;
    padding-horizontal:15px;
`
export const PostImg= styled.Image`
    width: 100%;
    height:250px;
    margin-top:15px;
    
`;

export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width:92%;
    align-self:center;
    margin-top:15px;
`;

export const InteractionWrapper =styled.View`
    flex-direction:row;
    justify-content: space-around;
    padding:10px 15px 15px 15px;
`;
export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius:5px;
    padding:2px 5px;
    background-color: ${props => props.active ? '#C00C8615': 'transparent' };
`;
export const InteractionText = styled.Text`
    font-size:12px;
    font-weight: bold;
    margin: 5px 5px 0px 0px;
    color: ${props => props.active ? '#C00C86': '#333' }
`;

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