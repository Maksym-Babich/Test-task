import { ListItem, Image, Logo, Text, Button } from 'components/Card/Card.styled';

export function Card() {
  return (
    <ListItem>
      <Text>777 Tweets</Text>
      <Text>100,000 Followers</Text>
      <Button>Follow</Button>
      <Image src="./Hansel.png" />
      <Logo width="50" height="20">
        <use href="./Vector.svg"></use>
      </Logo>
    </ListItem>
  );
}
