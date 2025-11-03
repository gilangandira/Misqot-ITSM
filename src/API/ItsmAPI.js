import axios from 'axios';

const API_BASE = 'http://localhost:3000'; // sesuaikan backend

// ================== BRAND ==================
export const getBrands = async () => {
  const res = await axios.get(`${API_BASE}/brands`);
  return res.data;
};

export const createBrand = async (data) => {
  const res = await axios.post(`${API_BASE}/brands`, data);
  return res.data;
};

// ================== ASSET TYPES ==================
export const getAssetTypes = async () => {
  const res = await axios.get(`${API_BASE}/asset-types`);
  return res.data;
};

export const createAssetType = async (data) => {
  const res = await axios.post(`${API_BASE}/asset-types`, data);
  return res.data;
};

// ================== ASSETS ==================
export const getAssets = async () => {
  const res = await axios.get(`${API_BASE}/assets`);
  return res.data;
};

export const createAsset = async (data) => {
  const res = await axios.post(`${API_BASE}/assets`, data);
  return res.data;
};

export const updateAsset = async (id, data) => {
  const res = await axios.put(`${API_BASE}/assets/${id}`, data);
  return res.data;
};

export const deleteAsset = async (id) => {
  const res = await axios.delete(`${API_BASE}/assets/${id}`);
  return res.data;
};
