import { interfaces } from '.';
class ResponseFromGeocodingAddressLocationRecord implements interfaces.iResponseFromGeocodingAddressLocationRecord {
  public street!: string | null;
  public adminArea6!: string | null;
  public adminArea6Type!: string | null;
  public adminArea5!: string | null;
  public adminArea5Type!: string | null;
  public adminArea4!: string | null;
  public adminArea4Type!: string | null;
  public adminArea3!: string | null;
  public adminArea3Type!: string | null;
  public adminArea2!: string | null;
  public adminArea2Type!: string | null;
  public adminArea1!: string | null;
  public adminArea1Type!: string | null;
  public postalCode!: string | null;
  public geocodeQualityCode!: string | null;
  public geocodeQuality!: string;
  public dragPoint!: boolean;
  public sideOfStreet!: string;
  public linkId!: string;
  public unknownInput!: string;
  public type!: string;
  public latLng!: { ['lat']: number; ['lng']: number };
  public displayLatLng!: { ['lat']: number; ['lng']: number };
  public mapUrl!: string;
  constructor(object: interfaces.iResponseFromGeocodingAddressLocationRecord) {
    this.street = object['street'];
    this.adminArea6 = object['adminArea6'];
    this.adminArea6Type = object['adminArea6Type'];
    this.adminArea5 = object['adminArea5'];
    this.adminArea5Type = object['adminArea5Type'];
    this.adminArea4 = object['adminArea4'];
    this.adminArea4Type = object['adminArea4Type'];
    this.adminArea3 = object['adminArea3'];
    this.adminArea3Type = object['adminArea3Type'];
    this.adminArea2 = object['adminArea2'];
    this.adminArea2Type = object['adminArea2Type'];
    this.adminArea1 = object['adminArea1'];
    this.adminArea1Type = object['adminArea1Type'];
    this.postalCode = object['postalCode'];
    this.geocodeQualityCode = object['geocodeQualityCode'];
    this.geocodeQuality = object['geocodeQuality'];
    this.dragPoint = object['dragPoint'];
    this.sideOfStreet = object['sideOfStreet'];
    this.linkId = object['linkId'];
    this.unknownInput = object['unknownInput'];
    this.type = object['type'];
    this.latLng = object['latLng'];
    this.displayLatLng = object['displayLatLng'];
    this.mapUrl = object['mapUrl'];
  }
}

class ResponseFromGeocodingAddressRecord implements interfaces.iResponseFromGeocodingAddressRecord {
  public providedLocation!: { ['street']: string };
  public locations!: Array<ResponseFromGeocodingAddressLocationRecord>;
  constructor(object: interfaces.iResponseFromGeocodingAddressRecord) {
    let responseFromGeocodingAddressLocationRecordArray: Array<ResponseFromGeocodingAddressLocationRecord> = [];
    object.locations.forEach((index: interfaces.iResponseFromGeocodingAddressLocationRecord): number => {
      return responseFromGeocodingAddressLocationRecordArray.push(
        new ResponseFromGeocodingAddressLocationRecord(index)
      );
    });
    this.providedLocation = object['providedLocation'];
    this.locations = responseFromGeocodingAddressLocationRecordArray;
  }
}

export default class ResponseFromGeocodingAddress implements interfaces.iResponseFromGeocodingAddress {
  public info!: {
    ['statuscode']: number;
    ['copyright']: { ['text']: string; ['imageUrl']: string; ['imageAltText']: string };
  };
  public options!: { ['maxResults']: number; ['thumbMaps']: boolean; ['ignoreLatLngInput']: boolean };
  public results!: Array<ResponseFromGeocodingAddressRecord>;
  constructor(object: interfaces.iResponseFromGeocodingAddress) {
    let responseFromGeocodingAddressRecordArray: Array<ResponseFromGeocodingAddressRecord> = [];
    object.results.forEach((index: interfaces.iResponseFromGeocodingAddressRecord): number => {
      return responseFromGeocodingAddressRecordArray.push(new ResponseFromGeocodingAddressRecord(index));
    });
    this.info = object['info'];
    this.options = object['options'];
    this.results = responseFromGeocodingAddressRecordArray;
  }
}
