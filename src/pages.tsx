import FirstPage from "./firstPage/App";
import Top from "./base/Top";
import One from "./tutorial/01";
import Two from "./tutorial/02";
import Three from "./tutorial/03";
import Four from "./tutorial/04";
import Five from "./tutorial/05";
import Six from "./tutorial/06";
import Seven from "./tutorial/07";
import Eight from "./tutorial/08";
import Nine from "./tutorial/09";
import Ten from "./tutorial/10";
import Eleven from "./tutorial/11";
import Twelve from "./tutorial/12";
import Thirteen from "./tutorial/13";
import Fourteen from "./tutorial/14";
import Fifteen from "./tutorial/15";
import Sixteen from "./tutorial/16";
import Seventeen from "./tutorial/17";
import Eighteen from "./tutorial/18";
import Nineteen from "./tutorial/19";
import Twenty from "./tutorial/20";
import TwentyOne from "./tutorial/21";
import TwentyTwo from "./tutorial/22";
import Extra0 from "./tutorialExtra/0";
import Extra1 from "./tutorialExtra/1";
import Extra2 from "./tutorialExtra/2";
import Extra3 from "./tutorialExtra/3";
import Extra4 from "./tutorialExtra/4";
import Extra5 from "./tutorialExtra/5";


export const pages = [
  { key: "First page", path: "/", element: FirstPage },
  { key: "Top", path: "/top", element: Top },
  { key: "_Setup for the tutorial", path: "/01", element: One },
  { key: "_Building two buttons", path: "/02", element: Two },
  { key: "_Building the board", path: "/03", element: Three },
  { key: "_Creating a reusable component", path: "/04", element: Four },
  { key: "_Rendering the word “value”", path: "/05", element: Five },
  { key: "_Passing data through props", path: "/06", element: Six },
  { key: "_Adding onClick (console log)", path: "/07", element: Seven },
  { key: "_Making an interactive component", path: "/08", element: Eight },
  { key: "_Lifting state up", path: "/09", element: Nine },
  { key: "_Adding the onSquareClick", path: "/10", element: Ten },
  { key: "_Connecting the onSquareClick", path: "/11", element: Eleven },
  { key: "_Updating handleClick", path: "/12", element: Twelve },
  { key: "_Taking turns", path: "/13", element: Thirteen },
  { key: "_Declaring a winner", path: "/14", element: Fourteen },
  { key: "_Lifting state up, again", path: "/15", element: Fifteen },
  { key: "_Updating the Game", path: "/16", element: Sixteen },
  { key: "_Updating the Board", path: "/17", element: Seventeen },
  { key: "_Updating the handlePlay", path: "/18", element: Eighteen },
  { key: "_Showing the past moves", path: "/19", element: Nineteen },
  { key: "_Assign proper keys", path: "/20", element: Twenty }, 
  { key: "_Implementing time travel", path: "/21", element: TwentyOne },
  { key: "Final cleanup", path: "/22", element: TwentyTwo },
  { key: "Extra: 0", path: "/extra0", element: Extra0 },
  { key: "Extra: 1", path: "/extra1", element: Extra1 },
  { key: "Extra: 2", path: "/extra2", element: Extra2 },
  { key: "Extra: 3", path: "/extra3", element: Extra3 },
  { key: "Extra: 4", path: "/extra4", element: Extra4 },
  { key: "Extra: 5", path: "/extra5", element: Extra5 },
];
