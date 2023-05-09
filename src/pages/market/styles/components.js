import styled from "styled-components";


function styles(){

    const SearchBoxIcon = styled.div`
      font-size: 24px;
      color: black;
      margin-left: 10px;
      cursor: pointer;
      width: 30px;
    `;

    const DateContainer = styled.div`
      display: flex;
      font-family: "Liberation Serif", serif;
      font-weight: bold;
      font-size: 2rem;
      margin-top: 2.5rem;
      justify-content: flex-start
    `;

    const SearchContainer = styled.col`
      display: flex;
      justify-content: flex-end; /* align contents to the right */
      margin-top: 1rem;
      margin-bottom: 1rem;
    `;

    return {
        SearchBoxIcon,
        DateContainer,
        SearchContainer,
    }

}

export default styles;
