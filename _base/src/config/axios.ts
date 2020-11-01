import axios from 'axios';

const { BRASILSEG_PEC_API_GEO_VALIDATE_URL } = process.env;

const geoValidateAPI = axios.create({
  baseURL: BRASILSEG_PEC_API_GEO_VALIDATE_URL
});

export default geoValidateAPI;
