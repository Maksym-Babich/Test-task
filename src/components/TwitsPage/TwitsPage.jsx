import { Section, Title, List, StyledLink } from 'components/TwitsPage/TwitsPage.styled';
import { Card } from 'components/Card/Card';

export function TwitsPage() {
  return (
    <Section>
      <StyledLink></StyledLink>
      <Title>Most followed users</Title>
      <List>
        <Card />
      </List>
    </Section>
  );
}
