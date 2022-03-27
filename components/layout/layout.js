import { Fragment } from "react";
import MainNavigation from "./main-navigation";

export default function Layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>{props.children}</main>
    </Fragment>
  );
}
