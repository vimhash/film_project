import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./styles/tailwind.css";

import Header from "./pages/components/header";

import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Billboard from "./pages/billboard.jsx";
import AddMovie from "./pages/add-movie.jsx";
import UpdateMovie from "./pages/update-movie.jsx";
import Rooms from "./pages/rooms.jsx";
import Schedules from "./pages/schedules.jsx";
import FilmsRoom from "./pages/films_room.jsx";
import FilmsRoomAdd from "./pages/films_room_add.jsx";
import Report from "./pages/report.jsx";
import Page404 from "./pages/Page404.jsx";
import Sidebar from "./pages/components/sidebar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/billboard">
          <div>
            <Header />
            <div className="flex">
              <Sidebar />
              <Billboard />
            </div>
          </div>
        </Route>
        <Route path="/billboard/add-movie">
          <div>
            <Header />
            <div className="flex">
              <Sidebar />
              <AddMovie />
            </div>
          </div>
        </Route>
        <Route path="/billboard/update-movie">
          <div>
            <Header />
            <div className="flex">
              <Sidebar />
              <UpdateMovie />
            </div>
          </div>
        </Route>
        <Route path="/rooms" component={Rooms} />
        <Route path="/schedules" component={Schedules} />
        <Route path="/films_room" component={FilmsRoom} />
        <Route path="/films_room_add" component={FilmsRoomAdd} />
        <Route path="/report" component={Report} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default App;