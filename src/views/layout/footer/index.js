import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { windowResize } from "../../../dispatch/uiDispatch";
import Navbar from "react-bootstrap/Navbar";
import { MOBILE_UI } from "../../../config";
import "./style.css";

function Footer() {
  //UI settings (mobile or desktop) ----------------------------------------------------------------
  const dispatch = useDispatch();
  const getIsMobile = () => window.innerWidth <= MOBILE_UI;

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(getIsMobile());

  //TODO - FIX RE-RENDER PERFORMANCE WITH TIMER OR EXT-LIBRARY
  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      setIsMobile(getIsMobile());
    }

    windowResize(dispatch, isMobile);

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [dispatch, width, isMobile]);

  //-------------------------------------------------------------------------------------------------

  return (
    <>
      <Navbar
        bg="secondary"
        variant="dark"
        sticky="bottom"
        className="Footer text-center p-0"
      >
        <Navbar.Text className="col-12" href="#home">
          © Flavio De Angeli - 2023
        </Navbar.Text>
      </Navbar>
    </>
  );
}

export default Footer;
