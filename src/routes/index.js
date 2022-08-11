//layouts

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Header from '~/Components/layout/components/Header';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: Header },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
