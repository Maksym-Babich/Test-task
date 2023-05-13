import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 50px;
  padding: 10px;
`;

export const Nav = styled.nav``;

export const Main = styled.main``;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 22px;
  margin-right: 20px;

  :hover {
    color: blue;
  }
`;
