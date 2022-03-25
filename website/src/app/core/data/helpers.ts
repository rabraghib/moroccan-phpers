import { IChallenge, IPeriodicChallenge } from "@ngaox/press";

export function sortChallenges(challenges: IChallenge[]): IChallenge[] {
  return challenges.sort((a, b) => {
    const aDate = new Date(
      "date" in a ? a.date : (a?.editions ?? {})[getLatestEditionSlug(a)]
    );
    const bDate = new Date(
      "date" in b ? b.date : (b?.editions ?? {})[getLatestEditionSlug(b)]
    );
    return aDate > bDate ? -1 : bDate > aDate ? 1 : 0;
  });
}

export function getLatestEditionSlug(challenge: IPeriodicChallenge) {
  challenge.editions = challenge?.editions ?? {};
  return Object.keys(challenge?.editions).reduce((a, b) => {
    return new Date((challenge.editions ?? {})[a]) >
      new Date((challenge.editions ?? {})[b])
      ? a
      : b;
  }, "");
}
