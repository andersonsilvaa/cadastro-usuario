import styled from 'styled-components/native';

export const Background = styled.View`
 flex:1;
 background-color: #131313;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    background-color: #FFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;

`;


