import styled from "styled-components";

function styles() {

    const FormBox = styled.div`
      display: block;
      margin: auto;
      background-color: orange;
      border-radius: 40px;
    `;

    const SubmitButton = styled.button`
      display: flex;
      margin-left: 160px;
      width: 120px;
      justify-content: center;
      font-family: Lucida Sans, serif;
      background-color: darkorange;
      color: Black;
      font-size: 20px;
      font-weight: 900;
      text-decoration: none;
      border: 2px solid black;
      border-radius: 40px;
      transition: background .5s ease;
    `;

    const Footer = styled.div`
      font-size: 1rem;
      color: black;
      line-height: 0;
    `;

    const Colored = styled.span`
      color: #007bff;
    `;


    return {

        FormBox, SubmitButton, Footer, Colored
    }

}

export default styles;