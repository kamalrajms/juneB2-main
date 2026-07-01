import React from "react";
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

  return (
    <>
    <UseEffectAPI/>
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
      <h3 style={{ padding: "20px", color: "red", backgroundColor: "yellow" }}>
        Hello world
      </h3>
      <h2>declearing props:{name}</h2>
      <Greeting name={name} num={age} />
      <h2>Destructuring props</h2>
      <DestructuringProps name={name} age={age} city={city} />
      <DestructuringProps name={name2} age={age2} city={city2} />
      <DestructuringProps name={name3} age={age3} city={city3} />
      <h3>good morning</h3>
    </>
  );
}
