import api from '.';

export const getAsset = async (id: string) => {
    const response = await api.get(`/asset/${id}`);
    return response.data;
};