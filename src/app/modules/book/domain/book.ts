import {VolumeInfo} from './volume-info';
import {SaleInfo} from "./sale-info";
import {AccessInfo} from "./access-info";

export class Book {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
}
