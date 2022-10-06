import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  /* grid-row-gap: 10px; */
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: #e64752;
  color: #fff;
`;
export const LogoDiv = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const EmailDiv = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const SocialMediaDiv = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  text-align: center;

`;
export const AddressDiv = styled.div`
  grid-area: 1 / 4 / 3 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  max-height: 100px;
  max-width: auto;
  cursor: pointer;

  &:hover {
    transition: 0.9s;
    transform: rotate(180deg);
  }
`;
export const SocialMediaLink = styled.a`
  font-size: 50px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
