import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconSearch } from "../../../../icons";
import { navigate } from "../../../../lib/History";
import cn from "classnames";
import { font } from "../../../../styled/Font";
import { useLocation, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { splitLastPath } from "../../../../lib/Common";
import qs from "qs";

function SearchBox({ shape, location: { search } }) {
  const parsed = qs.parse(search, { ignoreQueryPrefix: true });
  const searchQueryString = qs.stringify(parsed);
  const { pathname } = useLocation();
  const initialValue = splitLastPath("/s/", pathname);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    navigate(`/s/photos/${value}${search && `?${searchQueryString}`}`);
  };

  return (
    <Container className={cn("SearchBox", shape)}>
      <Form onSubmit={onSubmit}>
        <Button>
          <IconSearch />
        </Button>
        <Label htmlFor="">
          <Input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={"Search free high-resolution photos"}
          />
        </Label>
      </Form>
    </Container>
  );
}

SearchBox.propTypes = {
  shape: PropTypes.string,
  pathname: PropTypes.string
};

const Container = styled.div`
  flex: 1;
`;
const Form = styled.form`
  display: flex;
  background: #eeeeee;
  border-radius: 19px;
  padding-left: 6px;
  height: 40px;
  align-items: center;

  .round & {
    background: #eee;
    border-radius: 19px;
  }

  .square & {
    background: #fff;
    border-radius: 4px;
    height: 54px;
  }
`;
const Label = styled.label`
  display: block;
  width: 100%;

  .round & {
    height: 38px;
  }

  .square & {
    height: 54px;
  }
`;
const Button = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  padding-left: 8px;

  &:focus {
    outline: 0;
  }

  svg {
    height: auto;
    fill: #767676;

    .round & {
      width: 20px;
    }

    .square & {
      width: 24px;
    }
  }
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  padding: 8px;
  font-family: ${font.en};
  font-size: 15px;

  &:focus {
    outline: 0;
  }
`;

export default withRouter(SearchBox);
