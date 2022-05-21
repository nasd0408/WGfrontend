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
    margin-bottom:10px;
    border-radius:10px;
`;

export const NotificationInfo = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    padding: 15px;
    align-items:center;
`;

export const NotificationInfoText = styled.View`
    flex-direction:column;
    justify-content:center;
    margin-left:10px;
    flex:6
`;
export const Opciones = styled.TouchableOpacity`

`;
export const Title = styled.Text`
    font-size:14px;
    font-weight: bold;
`;
export const Time = styled.Text`
    font-size:12px;
    color: #666;
`;

export const NotificationText = styled.Text`
    font-size: 14px;
    padding-horizontal:15px;
    padding-bottom:5px;
    min-width: 100%;
`

export const InteractionWrapper =styled.View`
    flex-direction:row;
    justify-content: flex-end;
    padding-bottom:10px
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