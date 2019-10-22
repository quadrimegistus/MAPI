import { AxiosRequestConfig } from '.';

export interface iRequestToGeocodingAddress {
  baseUri: string;
  mqApiKey: string;
  uriComposite: string;
  instance: any;
  axiosOptions: AxiosRequestConfig;
  mqOptions: {
    boundingBox: {} | null;
    ignoreLatLngInput: boolean;
    thumbMaps: boolean;
    maxResults: number | null;
    delimiter: string | null;
    intlMode: string;
  };
  outFormat: string;
  location: string;
}
