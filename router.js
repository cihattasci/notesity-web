import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './src/Screens/Home.vue';
import MyNotes from './src/Screens/MyNotes.vue';
import PurchasedNotes from './src/Screens/PurchasedNotes.vue';
import Settings from './src/Screens/Settings.vue';
import Profile from './src/Screens/Profile.vue';
import NoteDetail from './src/Screens/NoteDetail.vue';
import Favorites from './src/Screens/Favorites.vue';
import Wallet from './src/Screens/Wallet.vue';
import About from './src/Screens/About.vue';
import Contact from './src/Screens/Contact.vue';
import SSS from './src/Screens/SSS.vue';
import DistanceContract from './src/Screens/DistanceContract.vue';
import UseConditions from './src/Screens/UseConditions.vue';
import PrivacyPolicy from './src/Screens/PrivacyPolicy.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home},
        { path: '/my-notes', component: MyNotes},
        { path: '/purchased-notes', component: PurchasedNotes},
        { path: '/profile', component: Profile},
        { path: '/settings', component: Settings},
        { path: '/note-detail', name: 'note-detail', component: NoteDetail, props: true},
        { path: '/user-favorites', component: Favorites},
        { path: '/user-wallet', component: Wallet},
        { path: '/about-us', component: About},
        { path: '/contact', component: Contact},
        { path: '/frequently-asked-question', component: SSS},
        { path: '/distance-selling-contract', component: DistanceContract},
        { path: '/use-condition', component: UseConditions},
        { path: '/privacy-policy', component: PrivacyPolicy},
    ]
});

export default router