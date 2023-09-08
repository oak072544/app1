import React from "react";
import { userContext } from "./context";
import Content from "./context-content";
import Header from "./context-header";
export default function App() {
  return (
    <userContext.Provider value={"Tom Jerry"}>
      <Header /> 
      <Content />
    </userContext.Provider>
  );
}
