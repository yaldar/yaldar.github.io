let prevScrollpos = window.pageYOffset;
const scrollHandler = () => {
  const currentScrollPos = window.pageYOffset;
  let hight = (document.getElementById('navbar')!.clientHeight);

  if (prevScrollpos >= currentScrollPos) {
    document.getElementById('navbar')!.style.top = '0';
  } else {
    document.getElementById('navbar')!.style.top = `-${hight}px`;
  }
  prevScrollpos = currentScrollPos;
};

export default scrollHandler;
