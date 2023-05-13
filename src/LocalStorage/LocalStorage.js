const KEY = 'Followed_Users';

export function getFollowedUsers() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveFollowedUsers(array) {
  const stringifiedArray = JSON.stringify(array);
  localStorage.setItem(KEY, stringifiedArray);
}
