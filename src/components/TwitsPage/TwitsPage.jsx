import { Section, Title, List, StyledLink, LoadMoreBtn, BtnContainer } from 'components/TwitsPage/TwitsPage.styled';
import { Card } from 'components/Card/Card';
import { getUsers, updateUser } from 'api/api';
import { getFollowedUsers, saveFollowedUsers } from 'LocalStorage/LocalStorage';
import { useEffect, useState } from 'react';

export function TwitsPage() {
  const [users, setUsers] = useState([]);
  const [followed, setFollowed] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    setFollowed(getFollowedUsers());
    getUsers().then((users) => setUsers(users));
  }, []);

  function handleFollow(userToUpdate) {
    const isFollowed = followed.includes(userToUpdate.id);
    if (isFollowed) followed.splice(followed.indexOf(userToUpdate.id), 1);
    const newFollowed = isFollowed ? [...followed] : [...followed, userToUpdate.id];
    setFollowed(newFollowed);
    saveFollowedUsers(newFollowed);
    updateUser(userToUpdate).then((newUser) => {
      const newUsers = users.map((user) => {
        if (user.id === userToUpdate.id) {
          return newUser;
        }
        return user;
      });
      setUsers(newUsers);
    });
  }

  function onLoadMoreClick() {
    setVisibleCount(users.length);
  }

  return (
    <Section>
      <StyledLink to="/">Go back</StyledLink>
      <Title>Most followed users</Title>
      <List>
        {users.slice(0, visibleCount).map((user) => (
          <Card user={user} key={user.id} onfollow={handleFollow} isFollowed={followed.includes(user.id)} />
        ))}
      </List>
      {visibleCount === 3 && (
        <BtnContainer>
          <LoadMoreBtn onClick={onLoadMoreClick}>Load More</LoadMoreBtn>
        </BtnContainer>
      )}
    </Section>
  );
}
