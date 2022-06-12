import {Main} from "./Main";
import { News } from "./News";
import { Teams } from "./Teams";
import { About } from "./About";
import { Page404 } from "./Page404";
import { Auth } from "./Auth";
import { Page } from "../Components/common/Page/Page";
import {Event} from "./Event";

const pages = {
    Main: {
        element: <Page><Main /></Page>,
        path: '/'
    },
    News: {
        element: <Page><News /></Page>,
        path: '/news'
    },
    Teams: {
        element: <Page><Teams /></Page>,
        path: '/teams'
    },
    About: {
        element: <Page><About /></Page>,
        path: '/about'
    },
    Page404: {
        element:<Page><Page404 /></Page>,
        path: '/404'
    },
    Auth: {
        element: <Page><Auth /></Page>,
        path: '/auth'
    },
    Event: {
        element: <Page><Event /></Page>,
        path: '/event/:id'
    }
}

export default pages;
