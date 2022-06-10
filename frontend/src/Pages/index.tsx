import {Main} from "./Main";
import { News } from "./News";
import { Teams } from "./Teams";
import { About } from "./About";
import { Page404 } from "./Page404";
import { Auth } from "./Auth";
import { Page } from "../Components/common/Page/Page";

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
        element: <Teams />,
        path: '/teams'
    },
    About: {
        element: <About />,
        path: '/about'
    },
    Page404: {
        element: <Page404 />,
        path: '/404'
    },
    Auth: {
        element: <Auth />,
        path: '/auth'
    }
}

export default pages;
