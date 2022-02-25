export interface ICommunity {
  name: string;
  description: string;
  socials: ISocialLink[];
  challenges: IChallenge[];
  moderators: IUser[];
}

export interface IUser {
  name: string;
  avatar: string;
  bio?: string;
  links: ISocialLink[];
}

export interface ISocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface IChallenge {
  name: string;
  icon: string;
  slug: string;
  description: string;
  editions: IEdition[];
}

export interface IEdition {}
