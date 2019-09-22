/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/shop.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('tutorial/introduction.html')}>Documentation</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const QuickStart = () => (
      <Block layout="twoColumn">
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Quick Start</h2>
      </Block>
    );

    const Support = () => (
      <div 
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Support Longclaw</h2>
        <a href="https://www.buymeacoffee.com/pHtXDM748" target="_blank">
          <img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" style={{ height: "auto", width: "auto" }} />
        </a>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Checkout the Longclaw Bakery for a full demonstration shop',
            image: `${baseUrl}img/shop.png`,
            imageAlign: 'left',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/shop.png`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Visit the documentation',
            image: `${baseUrl}img/shop.png`,
            imageAlign: 'right',
            title: 'Learn How',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn" background="light">
        {[
          {
            content: 'Manage your inventory, orders and more through the Wagtail admin',
            image: `${baseUrl}img/wagtail.png`,
            imageAlign: 'top',
            title: 'Power of Wagtail',
          },
          {
            content: 'Longclaw comes with a comprehensive project template - get going with a simple command: `longclaw start my_project`',
            image: `${baseUrl}img/shop.png`,
            imageAlign: 'top',
            title: 'Easy to set up',
          },
          {
            content: 'Fully customisable product catalog management, support for multiple payment backends and full control over the appearance and layout of your shop',
            image: `${baseUrl}img/shop.png`,
            imageAlign: 'top',
            title: 'Flexible',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <QuickStart />
          <Support />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
