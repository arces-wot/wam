export interface Choice {
  name: string;
  value: License;
}

export enum License {
  APACHE = 'APACHE',
  GPL3 = 'GPL3',
  MIT = 'MIT',
}
