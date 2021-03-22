import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { searchActions } from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import { ContentContainer } from "../../styled/Layout";
import { useSelector } from "react-redux";
import InfiniteScroll from "../components/InfiniteScroll";
import PropTypes from "prop-types";
import qs from "qs";
import EmptyPhotos from "../components/EmptyResults/EmptyPhotos";
import SearchKeyword from "../components/Search/SearchKeyword";
import _ from "lodash";

function SearchPhotoListContainer({ match, location }) {
  const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
  const query = match.params.query;
  const { searchResults, isLoading } = useSelector(state => state.search);
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchActions.deleteHistory();
    setPage(1);
  }, [query, location.search]);

  useEffect(() => {
    searchActions.searchPhotos({
      query,
      per_page: 10,
      page,
      ...parsed
    });
  }, [query, page, location.search]);

  const getMoreItems = () => {
    if (4 <= page) return;
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <ContentContainer>
        <SearchKeyword query={query} />
        <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
          {searchResults?.total ? (
            <PhotoList data={searchResults.results} />
          ) : (
            !isLoading && <EmptyPhotos />
          )}
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
}

SearchPhotoListContainer.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
  getMoreItems: PropTypes.func,
  isLoading: PropTypes.bool,
  searchResults: PropTypes.shape({
    results: PropTypes.array,
    total: PropTypes.number
  })
};

const Container = styled.div``;

export default SearchPhotoListContainer;
