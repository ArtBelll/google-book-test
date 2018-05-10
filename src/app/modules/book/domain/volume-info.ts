import {ImageLinks} from './image-link';


export class VolumeInfo {
  title: string;
  description: string;
  publisher: string;
  publishedDate: string;
  averageRating: number;
  ratingsCount: number;
  maturityRating: number;
  previewLink: string;
  pageCount: number;
  infoLink: string;
  authors: string[];
  imageLinks: ImageLinks;
}
