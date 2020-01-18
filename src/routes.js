import VueRouter from "vue-router"
import Grid from './components/main/grid/Grid';
import Buttons from './components/main/buttons/Buttons';
import Badges from './components/main/badges/Badges';
import Placeholders from './components/main/placeholders/Placeholders';
import Alerts from './components/main/alerts/Alerts';
import Ribbons from './components/main/ribbons/Ribbons';

const routes = [
    { path: '/grid', component: Grid },
    { path: '/buttons', component: Buttons },
    { path: '/badges', component: Badges },
    { path: '/placeholders', component: Placeholders },
    { path: '/alerts', component: Alerts },
    { path: '/ribbons', component: Ribbons },
]

export const router = new VueRouter({
    routes
})