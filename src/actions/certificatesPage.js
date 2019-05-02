import { ACTION_NAMES } from '../constants/actionNames';

// CERTIFICATES PAGE
export const fetchCertificatesPageData = () => ({
    type: ACTION_NAMES.FETCH_CERTIFICATES_PAGE_DATA,
});

export const setCertificatesPageData = payload => ({
    type: ACTION_NAMES.SET_CERTIFICATES_PAGE_DATA,
    payload: payload,
});

export const clearCertificatesPageData = () => ({
    type: ACTION_NAMES.CLEAR_CERTIFICATES_PAGE_DATA,
});
