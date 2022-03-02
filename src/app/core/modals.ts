export interface ICommunity {
  name: string;
  description: string;
  PHPers: IPHPer[];
  links: ISocialLink[];
  challenges: IChallenge[];
  moderators: IUser[];
}

export interface IUser {
  name: string;
  avatar: string;
  bio?: string;
  links: ISocialLink[];
}

export type IPHPer = IUser & {
  rank: number;
  points: number;
};

export interface ISocialLink {
  name: string;
  url: string;
  icon: string;
}

export type IChallenge = ISingleChallenge | IPeriodicChallenge;

export type ISingleChallenge = IChallengeBase & IEdition;
export type IPeriodicChallenge = IChallengeBase & {
  nextEditionDate?: string;
  editions: IEdition[];
};

export interface IEdition {
  date: string;
  duration: string;
  description: string;
  solutions: ISolution[];
}

export interface ISolution {
  author: IUser;
  url: string;
}

interface IChallengeBase {
  name: string;
  icon: string;
  slug: string;
  summary: string;
}
