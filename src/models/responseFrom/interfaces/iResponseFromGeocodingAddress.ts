export interface iResponseFromGeocodingAddressLocationRecord {
  street: string | null;
  adminArea6: string | null;
  adminArea6Type: string | null;
  adminArea5: string | null;
  adminArea5Type: string | null;
  adminArea4: string | null;
  adminArea4Type: string | null;
  adminArea3: string | null;
  adminArea3Type: string | null;
  adminArea2: string | null;
  adminArea2Type: string | null;
  adminArea1: string | null;
  adminArea1Type: string | null;
  postalCode: string | null;
  geocodeQualityCode: string | null;
  geocodeQuality: string;
  dragPoint: boolean;
  sideOfStreet: string;
  linkId: string;
  unknownInput: string;
  type: string;
  latLng: { ['lat']: number; ['lng']: number };
  displayLatLng: { ['lat']: number; ['lng']: number };
  mapUrl: string;
}

export interface iResponseFromGeocodingAddressRecord {
  providedLocation: { ['street']: string };
  locations: Array<iResponseFromGeocodingAddressLocationRecord>;
}

export interface iResponseFromGeocodingAddress {
  info: {
    ['statuscode']: number;
    ['copyright']: { ['text']: string; ['imageUrl']: string; ['imageAltText']: string };
  };
  options: { ['maxResults']: number; ['thumbMaps']: boolean; ['ignoreLatLngInput']: boolean };
  results: Array<iResponseFromGeocodingAddressRecord>;
}
