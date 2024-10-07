import Explore from '@/app/explore';
import Home from '@/app/'
import Create from '@/app/create';
import Settings from '@/app/settings';
import Profile from '@/app/profile';

export const modules: Array<{ name: string; title: string, options: any, component: any }> = [
    {
        name: "index",
        title: "Home",
        component: Home,
        options: {
            title: "Home Screen",
            headerTransparent: true,
            headerTintColor: '#fff',
        }
    },
    {
        name: "explore",
        title: "Explore",
        options: { title: "Explore Screen" },
        component: Explore
    },
    {
        name: "create",
        title: "Create",
        options: { title: "Create Screen" },
        component: Create
    },
    {
        name: "settings",
        title: "Settings",
        options: { title: "Settings Screen" },
        component: Settings
    },
    {
        name: "profile",
        title: "Profile",
        options: { title: "Profile Screen" },
        component: Profile
    },
];