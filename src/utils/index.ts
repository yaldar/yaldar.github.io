import { resType } from '../types/index';

let prevScrollpos = window.pageYOffset;
const scrollHandler = () => {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById('navbar');
  const height = document.getElementById('navbar')!.clientHeight;

  if (prevScrollpos >= currentScrollPos) {
    navbar!.style.top = '0';
  } else {
    navbar!.style.top = `-${height}px`;
  }
  prevScrollpos = currentScrollPos;
};

const fetchProjects = () =>
  fetch('https://api.github.com/users/yaldar/repos')
    .then((res) => res.json())
    .then((arr: resType[]) => arr.filter((project: any) => !project.fork))
    .then((unsorted) => unsorted.sort((a, b) => (a.created_at < b.created_at ? 1 : -1)))
    // TODO add functionality to get the README
    // .then((sorted) =>
    //   sorted.map(async (repo) => {
    //     const t = fetch(`GET /repos/:owner/${repo.name}/readme`);
    //     return {...repo, t}
    //   }),
    // )
    // .then(d=>{
    //   console.log(d);
    //   return d;
    // });

const getMonthName = (monthNum: string) => {
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthArray[parseInt(monthNum, 10) - 1];
};

const formateDate = (gitHubDate: string) => {
  const year = gitHubDate.substring(0, 4);
  const monthNum = gitHubDate.substring(5, 7);
  const monthName = getMonthName(monthNum);

  return `${monthName} ${year}`;
};

export { scrollHandler, fetchProjects, formateDate };
