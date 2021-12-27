export interface Github {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  name: string;
  color: string;
}

export interface Experience {
  company: string;
  date: string;
  type: "Part Time" | "Full Time";
  description: string;
}

export interface Education {
  title: string;
  date: string;
  degree: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  url: string;
}
