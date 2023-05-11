import {
  ListItem,
  Image,
  Logo,
  FollowersCount,
  TwitsCount,
  Button,
  BtnContainer,
  Line,
} from 'components/Card/Card.styled';

export function Card() {
  return (
    <ListItem>
      <TwitsCount>777 Tweets</TwitsCount>
      <FollowersCount>100,000 Followers</FollowersCount>
      <BtnContainer>
        <Button>Follow</Button>
      </BtnContainer>
      <Line />
      <Image src="./Hansel.png" />
      <Logo width="50" height="20">
        <use href="./Vector.svg"></use>
      </Logo>
    </ListItem>
  );
}
