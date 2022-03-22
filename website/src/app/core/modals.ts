export interface IAbout {
  name: string;
  description: string;
  links: ILinks;
}

export interface IModerator {
  name: string;
  avatar: string;
  bio?: string;
  links: ILinks;
}

export interface ISocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ILinks {
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  extra?: ISocialLink[];
}
