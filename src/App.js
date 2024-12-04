import React, {useState, useEffect} from 'react';
// import './App.css';
import './Switcher.scss';

function App() {

  //state
  const [colorThem, setColorTheme] = useState('theme_white');

  //effect
  useEffect(() => {
    //check for selected the ///localstorage value
    const currentThemeColor = localStorage.getItem('them-color');
    //if found set selected theme value in state
    if(currentThemeColor){
       setColorTheme(currentThemeColor);
    }
  }, []);

  //set theme
  const handleClick = (theme) =>{
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }

  return (
    <div className={`App ${colorThem}`} style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
       <div className='section_row'>
       <div className="theme_options">
        <div id="theme_white"
         className={`${colorThem === 'theme_white' ? 'active' : ''}`}
         onClick={() => handleClick('theme_white')}></div><span>White</span>
        <div id="theme_blue"
         className={`${colorThem === 'theme_white' ? 'active' : ''}`} 
         onClick={() => handleClick('theme_blue')}></div><span>Black</span>
      </div>

      <div className="contant_box">
        <h2>How to use Create react app to install React</h2>
        <h5>Hi I'm really new to react and I can't figure out
          how to actually install it or whatever it is I need to do to write code in it.
        </h5>
        <p>
          Hi I'm really new to react and I can't figure out how to actually install it or whatever it is I need to do to write code in it.
          I downloaded node.js and I have v12.18.3 installed as well as NPM 6.14.6 installed as well, but every time I try to type in the commands in the
          create-react-app installation method mentioned on many websites I get an error message saying: Uncaught SyntaxError: Invalid or unexpected token.
          Am I supposed to be typing directly into node? I have Visual code studio installed am I supposed to use that in some way? I see there’s a github
          repository for create-react-app, does this mean I have to download it to my pc to run it? Does React just have a CDN I can use to skip all this?
        </p>
      </div>
       </div>
    </div>
  );
}

export default App;
