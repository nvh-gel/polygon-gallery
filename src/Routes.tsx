import { Route } from "react-router";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Service from "./pages/service";
import Team from "./pages/team";

export const routes = [
    <Route key="home" path="/" Component={Gallery} />,
    <Route key="team" path="/team" Component={Team} />,
    <Route key="service" path="/service" Component={Service} />,
    <Route key="contact" path="/contact" Component={Contact} />,
];
