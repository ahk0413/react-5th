import type { JSX } from "react";
import JSX_Markup from "./JSX_Markup";

// jsx 지정안해도 잘찾아줌
function Learn():JSX.Element{

  return (
    <div className="learn">
      <Headline />
      <hr />
      <JSX_Markup />
    </div>
  )
  
}

export default Learn;

function Headline():JSX.Element{
  const abbr = {
    html: 'Hyper Text Markup Language',
    jsx: {
      abbr: 'Javascript extension for ECMAScript',
      text: 'JSX'
    }
  }
  return (
    <h1>
      <abbr title={abbr.html}>HTML</abbr> vs
      <abbr title={abbr.jsx.abbr}>{abbr.jsx.text}</abbr> 마크업
    </h1>
  )
}