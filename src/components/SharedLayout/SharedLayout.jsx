import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink, Main } from 'components/SharedLayout/SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/twits">Twits</StyledLink>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
