export type resType = {
  id: string;
  name: string;
  fork: boolean;
  html_url: string;
  homepage: string | null;
  created_at: string;
  description: string;
};

export type SkillListType = {
  title: string;
  list: string[];
};
