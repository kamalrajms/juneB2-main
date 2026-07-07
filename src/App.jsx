import React, { useContext, createContext, useState } from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";
import ExternalStyle from "./ExternalStyle";
import ModuleStyle from "./ModuleStyle";
import ObjectStyle from "./ObjectStyle";
import ConditionallRender from "./Component/ConditionallRender";
import ListRender from "./Component/ListRender";
import UseStateHook from "./Component/UseStateHook";
import Field from "./Component/Field";
import RegForm from "./Component/RegForm";
import ConditionalForm from "./Component/ConditionalForm";
import UseEffectHook from "./Component/UseEffectHook";
import Timer from "./Component/Timer";
import StopWatchTimer from "./Component/StopWatchTimer";
import UseEffectAPI from "./Component/UseEffectAPI";
import UseRefHook from "./Component/UseRefHook";
import ReducerCount from "./Component/ReducerCount";
import ReducerForm from "./Component/ReducerForm";
import First from "./Context/First";
import ContextFom from "./Context/ContextFom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Service from "./Routing/Service";
import Contect from "./Routing/Contect";
import WebDev from "./Routing/WebDev";
import AppDev from "./Routing/AppDev";

export const Pass = createContext();

export default function () {
  // js function
  const name = "sabari";
  const age = 45;
  const city = "salem";

  const name2 = "kumar";
  const age2 = 555;
  const city2 = "namakkal";

  const name3 = "AK";
  const age3 = 50;
  const city3 = "chennai";

  const bool = false;

  const [theme, setTheme] = useState("light");
  const data = { name: "react.js" };
  console.log(theme);

  return (
    <>
      {bool && (
        <div>
          <div style={{ border: "2px solid #333", padding: "20px" }}>
            <Pass.Provider value={{ theme, setTheme, data }}>
              <ContextFom />
            </Pass.Provider>
          </div>
          <div style={{ border: "2px solid #333", padding: "20px" }}>
            <h2>App component---{name}</h2>
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
          </div>
          <ReducerForm />
          <ReducerCount />
          <UseRefHook />
          <UseEffectAPI />
          <StopWatchTimer />
          <Timer />
          <UseEffectHook />
          <ConditionalForm />
          <RegForm />
          <Field />
          <UseStateHook />
          {bool ? <ListRender /> : <ConditionallRender />}
          <ObjectStyle />
          <ModuleStyle />
          <ExternalStyle />
          <h3
            style={{ padding: "20px", color: "red", backgroundColor: "yellow" }}
          >
            Hello world
          </h3>
          <h2>declearing props:{name}</h2>
          <Greeting name={name} num={age} />
          <h2>Destructuring props</h2>
          <DestructuringProps name={name} age={age} city={city} />
          <DestructuringProps name={name2} age={age2} city={city2} />
          <DestructuringProps name={name3} age={age3} city={city3} />
          <h3>good morning</h3>
        </div>
      )}
      <BrowserRouter>
        <div className="header">
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Service"}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} >
            <Route path="" element={<WebDev/>}/>
            <Route path="AppDevelopment" element={<AppDev/>}/>
          </Route>
          <Route path="/Contact" element={<Contect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
