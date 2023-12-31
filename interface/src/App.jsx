import { createGlobalStyle, styled } from "styled-components";
import Router from "./Router";
import TopNav from "../components/nav/TopNav";
import LeftNav from "../components/nav/LeftNav";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-family: 'Outfit', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
      box-sizing: border-box;
      font-family: 'Outfit', sans-serif;
  }
  a{
      text-decoration: none;
      color:inherit;  // 색을 부모로부터 상속 받음
  }
`

const Body = styled.div`
  width: 100vw;
  height: 100vh;
`
const Container = styled.div`
  padding-left: 200px;
  padding-top: 10vh;
  width: 100%;
  height: 100%;
`


function App() {

  return (
    <>
      <GlobalStyle />
      <Body>
        <TopNav />
        <LeftNav />
        <Container>
          <Router />
        </Container>
      </Body>
    </>
  )
}

export default App
