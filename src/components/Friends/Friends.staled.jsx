import styled from '@emotion/styled';
 
export const FriendList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
 `;
 
export const Item = styled.li`
    list-style: none;
    width: 170px;
    height: 54px;
    margin: 10px auto;

    box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
    border-radius: 5px;
    background-color: #ffffff;
`; 

export const CardItem = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
`;

const setBgColor = props => {
    switch (props.eventIsOnline) {
        case true:
            return '#06ff00';
        case false:
            return '#ff0000';
        default:
            return '#ffffff';
    }
};

export const IsOnline = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    margin: 20px 10px;
    border-radius: 50%;
    background-color: ${setBgColor};
`;

// export const
// .item .item_card .status_no {
//     display: block;
//     width: 15px;
//     height: 15px;
//     margin: 20px 10px;
//     border-radius: 50%;
//     background-color: rgb(255, 0, 0);
// }
export const Image = styled.img`
    display: block;
    align-content: center;
    margin: 3px 10px;
`;

export const About = styled.p`
    text-align: center;
`;