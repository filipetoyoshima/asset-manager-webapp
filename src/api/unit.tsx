import api from '.';

export const getUnitAssets = async (id: string) => {
    const response = await api.get(`/unit/${id}/assets`);
    return response.data;
};