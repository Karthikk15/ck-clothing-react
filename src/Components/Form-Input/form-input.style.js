import styled,{css}  from "styled-components";

const subColor= 'grey';
const mainColor= 'black';

const labelPositionChange = css`
top:-15px;
font-size: 10px;
color: ${mainColor};
`

export const InputLabel = styled.label`
position: absolute;
top: 0px;
left: 0px;
color:${subColor};
pointer-events: none;
font-size:small;
${({shrink}) => shrink && labelPositionChange}
`

export const InputContainer = styled.div
`margin-top: 20px;
position: relative;
height: 4rem;
color: ${mainColor};
margin: 20px 0px;
input {
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    outline: none;
    font-size: 20px;
    &:focus ~ ${InputLabel} {
    ${labelPositionChange}
    }
}
input[type="password"] {
    letter-spacing: 1ch;
}
`

