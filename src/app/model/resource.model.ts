import { Website } from './website.model';

export class Resource {
  title: string;
  website: Array<Website>;

  constructor(title: string, website: Array<Website>) {
    this.title = title;
    this.website = website;
  }
}
