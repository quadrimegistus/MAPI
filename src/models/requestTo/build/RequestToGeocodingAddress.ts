import { AxiosRequestConfig, https } from '.';
export default class RequestToGeocodingAddress {
  public baseUri!: string;
  public mqApiKey!: string;
  public uriComposite!: string;
  public instance!: any;
  public axiosOptions!: AxiosRequestConfig;
  public location!: string;
}
