import styled from "styled-components";

export const BadgeWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`

export const BadgeContainer = styled.div`
    width: 15%;
    margin: .7em .44rem 1rem;
    padding: 0 .7rem; 
    box-sizing: border-box;
    text-align: center; 
    
    > div {
        width: 100%;

        > img {
            display:block;
            width: 100%;
            height: 100%;
            padding:1rem;
            }
            
        > img.colorOff {
            filter: grayscale(1);
        }
    }


    > span {
        display:block;
        font-size: .9rem;
        font-weight: bold;
        color: #333;
    }

    > span.colorOn {
        color: #333;
    }

    > span.colorOff {
        color: #999;
    }
`
