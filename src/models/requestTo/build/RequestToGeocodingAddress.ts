import { AxiosRequestConfig, https, interfaces } from '.';
export default class RequestToGeocodingAddress implements interfaces.iRequestToGeocodingAddress {
  public baseUri!: string;
  public mqApiKey!: string;
  public uriComposite!: string;
  public instance!: any;
  public axiosOptions!: AxiosRequestConfig;
  public mqOptions!: {
    boundingBox: {} | null;
    ignoreLatLngInput: boolean;
    thumbMaps: boolean;
    maxResults: number | null;
    delimiter: string | null;
    intlMode: string;
  };
  public outFormat!: string;
  public location!: string;
  constructor() {}
}
