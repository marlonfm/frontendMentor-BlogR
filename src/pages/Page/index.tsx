/* eslint-disable no-void */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Menu,
  ButtonLogin,
  ButtonSignUp,
  ContainerHeader,
  ButtonStart,
  ButtonLearn,
  ContentHeader,
  Logo,
  ContainerMenu,
  ContentTwo,
  ContentThree,
  TitleContentTwo,
  ContainerContentTwo,
  ContainerContentTwoToThree,
  ContentFour,
  Footer,
  ContentFooter,
  ContainerFooter,
  LogoFooter,
  LogoMenuMobile,
  ContainerMenuMobile,
} from './styles';
import LogoSVG from '../../assets/svg/logo.svg';
import IconArrowLight from '../../assets/svg/icon-arrow-light.svg';
import IconArrowDark from '../../assets/svg/icon-arrow-dark.svg';
import Phones from '../../assets/svg/illustration-phones.svg';
import MenuMobile from '../../assets/svg/icon-hamburger.svg';
import MenuMobileClose from '../../assets/svg/icon-close.svg';

const Page: React.FC = () => {
  const [showMenuMobileOne, setShowMenuMobileOne] = useState(false);
  const [showMenuMobileTwo, setShowMenuMobileTwo] = useState(false);
  const [showMenuMobileThree, setShowMenuMobileThree] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function OpenMenuMobOne() {
    setShowMenuMobileOne(!showMenuMobileOne);
  }
  function OpenMenuMobTwo() {
    setShowMenuMobileTwo(!showMenuMobileTwo);
  }
  function OpenMenuMobThree() {
    setShowMenuMobileThree(!showMenuMobileThree);
  }
  return (
    <>
      <Header>
        <ContentHeader>
          <Menu>
            <Logo>
              <picture>
                <source srcSet={LogoSVG} media="(min-width: 600px)" />
                <img src={LogoSVG} alt="MDN" />
              </picture>
            </Logo>

            <LogoMenuMobile onClick={() => setShowMenu(!showMenu)}>
              <picture>
                {showMenu ? (
                  <>
                    <source
                      srcSet={MenuMobileClose}
                      media="(min-width: 600px)"
                    />
                    <img src={MenuMobileClose} alt="MDN" />
                  </>
                ) : (
                  <>
                    <source srcSet={MenuMobile} media="(min-width: 600px)" />
                    <img src={MenuMobile} alt="MDN" />
                  </>
                )}
              </picture>
            </LogoMenuMobile>

            <ContainerMenuMobile showMenu={showMenu}>
              <ContainerMenuMobile.Content>
                <ContainerMenuMobile.ContentMenuOne>
                  <ContainerMenuMobile.Nav>
                    <ContainerMenuMobile.Ul>
                      <ContainerMenuMobile.Li>
                        <Link to="#" onClick={OpenMenuMobOne}>
                          Product
                        </Link>

                        <picture>
                          <source
                            srcSet={IconArrowDark}
                            media="(min-width: 600px)"
                          />
                          <img src={IconArrowDark} alt="MDN" />
                        </picture>
                      </ContainerMenuMobile.Li>

                      <ContainerMenuMobile.SubMenuProduct
                        showMenuOne={showMenuMobileOne}
                      >
                        <div>
                          <ul>
                            <li>Clothess</li>
                            <li>Products</li>
                            <li>More</li>
                          </ul>
                        </div>
                      </ContainerMenuMobile.SubMenuProduct>

                      <ContainerMenuMobile.Li>
                        <Link to="#" onClick={OpenMenuMobTwo}>
                          Company
                        </Link>

                        <picture>
                          <source
                            srcSet={IconArrowDark}
                            media="(min-width: 600px)"
                          />
                          <img src={IconArrowDark} alt="MDN" />
                        </picture>
                      </ContainerMenuMobile.Li>

                      <ContainerMenuMobile.SubMenuCompany
                        showMenuTwo={showMenuMobileTwo}
                      >
                        <div>
                          <ul>
                            <li>Business</li>
                            <li>Company</li>
                            <li>Development</li>
                          </ul>
                        </div>
                      </ContainerMenuMobile.SubMenuCompany>

                      <ContainerMenuMobile.Li>
                        <Link to="#" onClick={OpenMenuMobThree}>
                          Connect
                        </Link>

                        <picture>
                          <source
                            srcSet={IconArrowDark}
                            media="(min-width: 600px)"
                          />
                          <img src={IconArrowDark} alt="MDN" />
                        </picture>
                      </ContainerMenuMobile.Li>

                      <ContainerMenuMobile.SubMenuConnect
                        showMenuThree={showMenuMobileThree}
                      >
                        <div>
                          <ul>
                            <li>Contact</li>
                            <li>Newsletter</li>
                            <li>Linkedin</li>
                          </ul>
                        </div>
                      </ContainerMenuMobile.SubMenuConnect>
                    </ContainerMenuMobile.Ul>
                  </ContainerMenuMobile.Nav>
                </ContainerMenuMobile.ContentMenuOne>

                <hr />
                <ContainerMenuMobile.ContentMenuTwo>
                  <ButtonLogin type="button">
                    <b>Login</b>
                  </ButtonLogin>

                  <ButtonSignUp type="button">
                    <b>Sign Up</b>
                  </ButtonSignUp>
                </ContainerMenuMobile.ContentMenuTwo>
              </ContainerMenuMobile.Content>
            </ContainerMenuMobile>

            <ContainerMenu>
              <nav>
                <ContainerMenu.Ul>
                  <ContainerMenu.Li>
                    <Link to="#">Product</Link>

                    <picture>
                      <source
                        srcSet={IconArrowLight}
                        media="(min-width: 600px)"
                      />
                      <img src={IconArrowLight} alt="MDN" />
                    </picture>

                    <ContainerMenu.SubMenuProduct>
                      <div>
                        <ul>
                          <li>Clothes</li>
                          <li>Products</li>
                          <li>More</li>
                        </ul>
                      </div>
                    </ContainerMenu.SubMenuProduct>
                  </ContainerMenu.Li>

                  <ContainerMenu.Li>
                    <Link to="#">Company</Link>

                    <picture>
                      <source
                        srcSet={IconArrowLight}
                        media="(min-width: 600px)"
                      />
                      <img src={IconArrowLight} alt="MDN" />
                    </picture>

                    <ContainerMenu.SubMenuCompany>
                      <div>
                        <ul>
                          <li>Business</li>
                          <li>Company</li>
                          <li>Development</li>
                        </ul>
                      </div>
                    </ContainerMenu.SubMenuCompany>
                  </ContainerMenu.Li>

                  <ContainerMenu.Li>
                    <Link to="#">Connect</Link>

                    <picture>
                      <source
                        srcSet={IconArrowLight}
                        media="(min-width: 600px)"
                      />
                      <img src={IconArrowLight} alt="MDN" />
                    </picture>

                    <ContainerMenu.SubMenuConnect>
                      <div>
                        <ul>
                          <li>Contact</li>
                          <li>Newsletter</li>
                          <li>Linkedin</li>
                        </ul>
                      </div>
                    </ContainerMenu.SubMenuConnect>
                  </ContainerMenu.Li>
                </ContainerMenu.Ul>
              </nav>
            </ContainerMenu>

            <Menu.ContentButtons>
              <ButtonLogin type="button">
                <b>Login</b>
              </ButtonLogin>

              <ButtonSignUp type="button">
                <b>Sign Up</b>
              </ButtonSignUp>
            </Menu.ContentButtons>
          </Menu>
          <ContainerHeader>
            <ContainerHeader.AutoWidth>
              <ContainerHeader.Align>
                <h1>A Modern Publish Platform</h1>
                <br />
                <p> Grow your audience and build your online brand</p>
              </ContainerHeader.Align>
              <br />
              <ContainerHeader.ContentButtons>
                <ButtonStart>
                  <b>Start For Free</b>
                </ButtonStart>

                <ButtonLearn>
                  <b>Learn More</b>
                </ButtonLearn>
              </ContainerHeader.ContentButtons>
            </ContainerHeader.AutoWidth>
          </ContainerHeader>
        </ContentHeader>
      </Header>

      <ContentTwo>
        <TitleContentTwo>
          <h1>Designed for the Future</h1>
        </TitleContentTwo>

        <ContainerContentTwo>
          <h2>Introducing an extensible editor</h2>
          <ContainerContentTwo.P>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </ContainerContentTwo.P>
        </ContainerContentTwo>

        <ContainerContentTwoToThree>
          <h2>Robust content management</h2>
          <ContainerContentTwoToThree.P>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </ContainerContentTwoToThree.P>
        </ContainerContentTwoToThree>
      </ContentTwo>

      <ContentThree>
        <ContentThree.ContentImg>
          <picture>
            <source srcSet={Phones} media="(min-width: 600px)" />
            <img src={Phones} alt="MDN" />
          </picture>
        </ContentThree.ContentImg>

        <ContentThree.Container>
          <h1>State of the Art Infrastructure</h1>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </ContentThree.Container>
      </ContentThree>

      <ContentFour>
        <ContentFour.Container>
          <h1>Free, open, simple</h1>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>

          <h1>Powerful tooling</h1>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </ContentFour.Container>
      </ContentFour>

      <Footer>
        <ContentFooter>
          <LogoFooter>
            <picture>
              <source srcSet={LogoSVG} media="(min-width: 600px)" />
              <img src={LogoSVG} alt="MDN" />
            </picture>
          </LogoFooter>

          <ContainerFooter>
            <ContainerFooter.Title>
              <h3>Product</h3>
            </ContainerFooter.Title>
            <ContainerFooter.Ul>
              <ContainerFooter.Li>Overview</ContainerFooter.Li>
              <ContainerFooter.Li>Pricing</ContainerFooter.Li>
              <ContainerFooter.Li>Marketplace</ContainerFooter.Li>
              <ContainerFooter.Li>Features</ContainerFooter.Li>
              <ContainerFooter.Li>Integration</ContainerFooter.Li>
            </ContainerFooter.Ul>
          </ContainerFooter>

          <ContainerFooter>
            <ContainerFooter.Title>
              <h3>Company</h3>
            </ContainerFooter.Title>
            <ContainerFooter.Ul>
              <ContainerFooter.Li>About</ContainerFooter.Li>
              <ContainerFooter.Li>Team</ContainerFooter.Li>
              <ContainerFooter.Li>Blog</ContainerFooter.Li>
              <ContainerFooter.Li>Careers</ContainerFooter.Li>
            </ContainerFooter.Ul>
          </ContainerFooter>

          <ContainerFooter>
            <ContainerFooter.Title>
              <h3>Connect</h3>
            </ContainerFooter.Title>
            <ContainerFooter.Ul>
              <ContainerFooter.Li>Contact</ContainerFooter.Li>
              <ContainerFooter.Li>Newsletter</ContainerFooter.Li>
              <ContainerFooter.Li>Linkedin</ContainerFooter.Li>
            </ContainerFooter.Ul>
          </ContainerFooter>
        </ContentFooter>
      </Footer>
    </>
  );
};

export default Page;
