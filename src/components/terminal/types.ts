export enum VisibleTerminals {
  NONE = 0,
  GITHUB,
  GMAIL,
  LINKEDIN,
}

export interface GithubData {
  followers: number;
  last_update: string;
  public_repos: number;
}
