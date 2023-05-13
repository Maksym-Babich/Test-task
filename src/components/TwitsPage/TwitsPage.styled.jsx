import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  color: #000;
  font-size: 17px;
  line-height: 1;
  font-weight: 500;
  border: 1px solid currentColor;
  border-radius: 10px;

  :hover {
    background-color: #ccc;
    color: #fff;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreBtn = styled.button`
  outline: none;
  border: none;
  width: 220px;
  padding: 14px 10px;
  color: #373737;
  background-color: #ebd8ff;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;
