import { resType } from '../types/index';

let prevScrollpos = window.pageYOffset;
const scrollHandler = () => {
  const currentScrollPos = window.pageYOffset;
  let hight = document.getElementById('navbar')!.clientHeight;

  if (prevScrollpos >= currentScrollPos) {
    document.getElementById('navbar')!.style.top = '0';
  } else {
    document.getElementById('navbar')!.style.top = `-${hight}px`;
  }
  prevScrollpos = currentScrollPos;
};

const fetchProjects = async () =>
  await fetch('https://api.github.com/users/yaldar/repos')
    .then((res) => res.json())
    .then((w) => {
      console.log(w);
      return w;
    })
    .then((arr: resType[]) => arr.filter((project: any) => !project.fork));

export { scrollHandler, fetchProjects };
