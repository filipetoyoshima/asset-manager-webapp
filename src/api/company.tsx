import api from '.';

export const getMyCompanyUnits = async () => {
    const response = await api.get('/company/me/units');
    return response.data;
};