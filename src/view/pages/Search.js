import React from "react";
import styled from "styled-components";
import SearchPhotoListContainer from "../containers/SearchPhotoListContainer";

function Search(props){

    return(
        <Container>
            <SearchPhotoListContainer {...props} />
        </Container>
    )
}

const Container = styled.div`
  margin-top: 48px;
  padding-bottom: 85px;
`

export default Search;