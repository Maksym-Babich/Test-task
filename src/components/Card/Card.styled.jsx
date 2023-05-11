import styled from '@emotion/styled';

export const ListItem = styled.li`
  position: relative;
  list-style: none;
  width: 380px;
  height: 460px;
  padding-top: 284px;
  background-image: url('./bgpicture.png');
  background-repeat: no-repeat;
  background-size: 308px;
  background-position: 36px 28px;
  background-color: #471ca9;
  border-radius: 20px;
`;

export const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 178px;
  transform: translateX(-50%);
  border: 7px solid #fbf8ff;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -4px 4px #ae7be3, inset 0px 1px 3px #fbf8ff;
  background-color: #471ca9;
`;

export const Logo = styled.svg``;

export const TwitsCount = styled.p`
  margin: 0 0 16px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowersCount = styled.p`
  margin: 0 0 26px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  width: 196px;
  padding: 14px 56px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: #ebd8ff;
  border-radius: 10px;
  cursor: pointer;
`;

export const Line = styled.span`
  position: absolute;
  top: 214px;
  left: 0;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;
