import React from "react";
import { Outlet } from "react-router-dom";
export const HomeTemplate = () => {
  return (
    <>
      <header className="bg-dark text-white text-center p-3">header</header>
      <div style={{ minHeight: "75vh" }}>
        <Outlet />
      </div>
      <footer className="bg-dark text-white text-center p-3">footer</footer>
    </>
  );
};
