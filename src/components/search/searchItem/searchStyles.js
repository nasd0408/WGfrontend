import styled from "styled-components";

export const TouchableContainer = styled.TouchableOpacity`
    width:100%
    height:100%
`;
export const Container = styled.View `
    background-color:#060422;
    align-items: center ;
    height:100%;
    justify-content: space-around;    
`; 
export const Card = styled.View`
    flex-grow:0;
    flex-shrink: 1;
    flex-basis : 50%;
    background-color: #E6EAF4;
    padding:10px;
    border-radius:10px;
    margin:5px;
`;
export const UserInfoContainer= styled.View`
    width: 250px;
    flex-direction: column;
    margin-bottom: 5px
`; 
export const UserInfo = styled.Text`
    font-size: 16px;
    font-weight: bold;
    
`;
export const PostTime = styled.Text`
    font-size:12px;
    color: #666;
`;
export const PostText = styled.Text`
    font-size: 14px;
    padding-horizontal:15px;
    margin-top:50px;
    overflow: hidden; 
`;
export const PostImg = styled.Image`
    width: 100%;
    height: 190px;
    border-radius: 10px
`;

export const SearchBar = styled.TextInput`
    background-color: #E6EAF4;
    height: 50px;
    width:100%;
    padding:10px
`;
export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width:92%;
    align-self:center;
    margin-top:15px;
`;
