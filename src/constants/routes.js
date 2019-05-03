import { ENVIRONMENTS } from './environments';

export const ROUTES = {
    HOME: '/home',
    ABOUT_ME: '/aboutme',
    SKILLS: '/skills',
    EXPERIENCE: '/experience',
    CERTIFICATES: '/certificates',
    CONTACT: '/contact',
    STATIC: process.env.NODE_ENV === ENVIRONMENTS.PRODUCTION ? '/static' : '',
};
