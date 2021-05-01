/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import ImgPattern from '../../assets/svg/bg-pattern-intro.svg';
import ImgPicture from '../../assets/svg/illustration-editor-desktop.svg';
import ImgPictureMobile from '../../assets/svg/illustration-editor-mobile.svg';
import ImgNotebook from '../../assets/svg/illustration-laptop-desktop.svg';
import ImgNotebookMobile from '../../assets/svg/illustration-laptop-mobile.svg';

interface Props {
  showMenuOne: any;
  showMenuTwo: any;
  showMenuThree: any;
  showMenu: any;
}

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-image: url(${ImgPattern}),
    linear-gradient(to right, hsl(13, 100%, 72%), hsl(356, 100%, 66%));
  border-radius: 0px 0px 0px 60px;
  color: white;
  width: 100%;
  background-position: center;
  background-attachment: fixed;
`;

export const ContentHeader = styled.div`
  margin: auto;
  width: 80%;
`;

export const Logo = styled.div`
  width: 10%;
`;

export const LogoMenuMobile = styled.div`
  display: none;
  width: 10%;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu: any = styled.div`
  width: 100%;
  display: flex;
  margin: 3%;
  justify-content: space-between;
`;

Menu.ContentButtons = styled.div`
  display: flex;
  width: 20%;
  margin-right: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerMenuMobile: any = styled.div<Props>`
  color: black;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);
  display: none;
  flex-direction: column;
  position: fixed;
  background-color: white;
  width: 90%;
  border-radius: 3px;
  right: 30px;
  top: 11%;
  z-index: 1000;
  a {
    color: black;
    font-weight: bold;
  }
  transform-origin: ${props => (props.showMenu ? '' : 'top center')};
  transform: ${props =>
    props.showMenu ? '' : 'translateX(-50%) rotateX(-90deg)'};
  transition: ${props => (props.showMenu ? '' : 'all 125ms ease-in')};
  opacity: ${props => (props.showMenu ? '' : 0.25)};
  @media (max-width: 768px) {
    display: flex;
  }
`;

ContainerMenuMobile.Content = styled.div`
  margin: auto;
  width: 90%;
`;

ContainerMenuMobile.ContentMenuOne = styled.div``;

ContainerMenuMobile.ContentMenuTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3%;
  align-items: center;
`;

ContainerMenuMobile.Nav = styled.nav`
  margin: 5%;
`;

ContainerMenuMobile.Ul = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

ContainerMenuMobile.Li = styled.li`
  padding: 0px 1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 10px 1rem;
    text-align: center;
  }

  picture {
    margin: 0px 5px;
  }
  &:hover > div {
    opacity: 1;
    transform: rotateX(0) translateX(-50%);
    transition-timing-function: ease-out;
  }
`;

ContainerMenuMobile.SubMenuProduct = styled.div<Props>`
  background-color: rgb(240, 240, 240);
  color: black;
  border-radius: 3px;
  padding: 5%;
  display: flex;
  justify-content: center;
  width: 100%;
  transform-origin: ${props => (props.showMenuOne ? '' : 'top center')};
  transform: ${props =>
    props.showMenuOne ? '' : 'translateX(-50%) rotateX(-90deg)'};
  transition: ${props => (props.showMenuOne ? '' : 'all 125ms ease-in')};
  opacity: ${props => (props.showMenuOne ? '' : 0.25)};
  display: ${props => (props.showMenuOne ? 'block' : 'none')};

  div {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 0.9rem;
    &:hover {
      font-weight: bold;
    }
  }
`;

ContainerMenuMobile.SubMenuCompany = styled.div<Props>`
  background-color: rgb(240, 240, 240);
  color: black;
  border-radius: 3px;
  padding: 5%;
  display: flex;
  justify-content: center;
  width: 100%;
  transform-origin: ${props => (props.showMenuTwo ? '' : 'top center')};
  transform: ${props =>
    props.showMenuTwo ? '' : 'translateX(-50%) rotateX(-90deg)'};
  transition: ${props => (props.showMenuTwo ? '' : 'all 125ms ease-in')};
  opacity: ${props => (props.showMenuTwo ? '' : 0.25)};
  display: ${props => (props.showMenuTwo ? 'block' : 'none')};

  div {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 0.9rem;
    &:hover {
      font-weight: bold;
    }
  }
`;

ContainerMenuMobile.SubMenuConnect = styled.div<Props>`
  background-color: rgb(240, 240, 240);
  color: black;
  border-radius: 3px;
  padding: 5%;
  display: flex;
  justify-content: center;
  width: 100%;
  transform-origin: ${props => (props.showMenuThree ? '' : 'top center')};
  transform: ${props =>
    props.showMenuThree ? '' : 'translateX(-50%) rotateX(-90deg)'};
  transition: ${props => (props.showMenuThree ? '' : 'all 125ms ease-in')};
  opacity: ${props => (props.showMenuThree ? '' : 0.25)};
  display: ${props => (props.showMenuThree ? 'block' : 'none')};

  div {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 0.9rem;
    &:hover {
      font-weight: bold;
    }
  }
`;

//

export const ContainerMenu: any = styled.div`
  width: 50%;
  picture {
    margin: 0px 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

ContainerMenu.Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 10px;
`;

ContainerMenu.Li = styled.li`
  padding: 0px 1rem;
  cursor: pointer;
  &:hover > div {
    opacity: 1;
    transform: rotateX(0) translateX(-50%);
    transition-timing-function: ease-out;
  }
`;

ContainerMenu.SubMenuProduct = styled.div`
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: absolute;
  background-color: white;
  color: black;
  width: 10%;
  border-radius: 3px;
  margin: 5%;
  margin-top: 1%;
  opacity: 0.25;
  transform-origin: top center;
  transform: translateX(-50%) rotateX(-90deg);
  transition: all 125ms ease-in;

  div {
    margin: 10%;
  }

  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 0.9rem;
    &:hover {
      font-weight: bold;
    }
  }
`;

ContainerMenu.SubMenuCompany = styled.div`
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: absolute;
  background-color: white;
  color: black;
  width: 10%;
  border-radius: 3px;
  margin: 5%;
  margin-top: 1%;
  opacity: 0.25;
  transform-origin: top center;
  transform: translateX(-50%) rotateX(-90deg);
  transition: all 125ms ease-in;

  div {
    margin: 10%;
  }

  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 0.9rem;
    &:hover {
      font-weight: bold;
    }
  }
`;

ContainerMenu.SubMenuConnect = styled.div`
  box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  position: absolute;
  background-color: white;
  color: black;
  width: 10%;
  border-radius: 3px;
  margin: 5%;
  margin-top: 1%;
  opacity: 0.25;
  transform-origin: top center;
  transform: translateX(-50%) rotateX(-90deg);
  transition: all 125ms ease-in;

  div {
    margin: 10%;
  }

  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 0.9rem;
    &:hover {
      font-weight: bold;
    }
  }
`;

export const ContainerHeader: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 5%;
`;

ContainerHeader.AutoWidth = styled.div`
  width: auto;
`;

ContainerHeader.Align = styled.div`
  h1 {
    font-size: 50px;
  }
  text-align: center;

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }
`;

ContainerHeader.ContentButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonLogin = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 50px;
  padding: 10px;
  width: 100%;
  color: white;
  @media (max-width: 768px) {
    color: hsl(237, 23%, 32%);
    width: 25%;
  }
`;

export const ButtonSignUp = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 50px;
  padding: 10px;
  width: 100%;
  color: hsl(353, 100%, 62%);
  &:hover {
    transition: all 0.3s;
    background-color: rgba(220, 220, 220, 0.3);
    color: white;
  }
  @media (max-width: 768px) {
    width: 25%;
    color: white;
    background-image: linear-gradient(
      to right,
      hsl(13, 100%, 72%),
      hsl(356, 100%, 66%)
    );
  }
`;

export const ButtonLearn = styled.button`
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 50px;
  padding: 10px 20px;
  color: white;
  &:hover {
    transition: all 0.3s;
    background-color: white;
    color: hsl(353, 100%, 62%);
  }
`;

export const ButtonStart = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  color: hsl(353, 100%, 62%);
  &:hover {
    transition: all 0.3s;
    background-color: rgba(220, 220, 220, 0.3);
    color: white;
  }
`;

export const ContentTwo = styled.div`
  background-image: url(${ImgPicture});
  background-repeat: no-repeat;
  background-position: right;
  background-position-y: 0%;
  background-size: 45%;
  //display: flex;
  //align-items: center;
  //flex-direction: column;
  width: 100%;
  padding: 7%;
  @media (max-width: 768px) {
    margin: 0px 0px 100px;
    background-image: url(${ImgPictureMobile});
    background-size: 80%;
    background-position: center;
    background-position-y: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleContentTwo = styled.div`
  h1 {
    font-size: 30px;
  }
  display: flex;
  justify-content: center;
`;

export const ContainerContentTwo: any = styled.div`
  width: 35%;
  @media (max-width: 768px) {
    width: 75%;
    margin-top: 90%;
  }
`;

ContainerContentTwo.P = styled.p`
  margin: 2rem 0px;
  color: gray;
`;

export const ContainerContentTwoToThree: any = styled.div`
  width: 35%;
  @media (max-width: 768px) {
    width: 75%;
  }
`;

ContainerContentTwoToThree.P = styled.p`
  margin: 2rem 0px;
  color: gray;
`;

export const ContentThree: any = styled.div`
  background-image: linear-gradient(
    to right,
    hsl(237, 17%, 21%),
    hsl(237, 23%, 32%)
  );
  border-radius: 0px 60px 0px 60px;
  width: 100%;
  padding: 7%;
  color: white;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

ContentThree.Container = styled.div`
  p {
    margin: 2rem 0px;
  }
  width: 35%;
  @media (max-width: 768px) {
    margin-top: 65%;
    width: 60%;
  }
`;

ContentThree.ContentImg = styled.div`
  picture {
    position: absolute;
    margin-top: -11%;
  }
  @media (max-width: 768px) {
    display: contents;
    picture {
      margin-top: -30%;
    }
  }
`;

export const ContentFour: any = styled.div`
  display: flex;
  background-image: url(${ImgNotebook});
  background-repeat: no-repeat;
  background-position: left;
  background-position-y: 4rem;
  background-position-x: -31%;
  background-size: 53%;
  width: 100%;
  padding: 7%;
  justify-content: flex-end;

  @media (max-width: 768px) {
    background-image: url(${ImgNotebookMobile});
    background-position-x: center;
    justify-content: center;
    padding-top: 45%;
  }
`;

ContentFour.Container = styled.div`
  p {
    margin: 2rem 0px;
  }
  width: 35%;
  margin: 10%;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: hsl(240, 10%, 16%);
  border-radius: 0px 60px 0px 0px;
  color: white;
  width: 100%;
`;

export const ContentFooter = styled.div`
  margin: 4% 0% 5% -5%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 4% 0% 5% 40%;
  }
`;

export const LogoFooter = styled.div`
  width: 10%;
  @media (max-width: 768px) {
    margin-bottom: 8%;
  }
`;

export const ContainerFooter: any = styled.div``;

ContainerFooter.Title = styled.div`
  margin-bottom: 2rem;
`;

ContainerFooter.Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

ContainerFooter.Li = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  margin-bottom: 1rem;
  font-size: 0.85rem;
`;
