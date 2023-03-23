export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    priceOrginal: number;
  }


 export interface CartItem extends Product {
    uuid: string;
  }
  

// To parse this data:
//
//   import { Convert, Pictures } from "./file";
//
//   const pictures = Convert.toPictures(json);

export interface Pictures {
  data:   PictureData[];
}

export interface PictureData {
  id:         string;
  caption?:   string;
  media_url:  string;
  timestamp:  string;
  username:   Username;
  media_type: MediaType;
  permalink:  string;
  children?:  Children;
}

export interface Children {
  data: ChildrenData[];
}

export interface ChildrenData {
  media_url: string;
  id:        string;
}

export enum MediaType {
  CarouselAlbum = "CAROUSEL_ALBUM",
  Image = "IMAGE",
  Video = "VIDEO",
}

export enum Username {
  AdellN = "adell_n",
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
  before: string;
  after:  string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPictures(json: string): Pictures {
      return JSON.parse(json);
  }

  public static picturesToJson(value: Pictures): string {
      return JSON.stringify(value);
  }
}
