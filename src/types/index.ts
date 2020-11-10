export type ProjectObject = {
  id: string;
  name: string;
  fork: boolean;
  html_url: string;
  homepage: string | null;
  created_at: string;
  description: string | null;
  readme: string;
  image: string | '';
};

export type SkillListType = {
  title: string;
  list: {
    semanticIcon: string | null ;
    name: string;
  }[];
};
