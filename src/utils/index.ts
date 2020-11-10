import { ProjectObject } from '../types/index';

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

// TODO refactor to use OAuth
// const fetchProjects = async () => {
//   const res = await fetch('https://api.github.com/users/yaldar/repos').then((res) => res.json());
//   const ar = res.filter((project: any) => !project.fork);

//   const sorted = ar.sort((a: any, b: any) => (a.created_at < b.created_at ? 1 : -1));
//   const aarr=  sorted.map((el: any) => {
//     const { html_url, name, created_at, description, id, fork, homepage } = el;
//     return { html_url, name, created_at, description, id, fork, homepage };
//   });
//   console.log(aarr);
// return aarr
// };
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

export { scrollHandler, formateDate };
