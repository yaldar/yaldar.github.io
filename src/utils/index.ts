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

const fetchProjects = () => {
  fetch('/https://api.github.com/graphql')

    .then(data => console.log('data returned:', data));
};

export { scrollHandler, fetchProjects };
