const btns = document.querySelectorAll('.menu_btn');
const sec = document.querySelectorAll('section')
btns.forEach(btn => {
  btn.addEventListener("click", () => {
      sec.forEach(s => {
        s.classList.remove('displaied')
        if (btn.id.includes(s.id)){
          s.classList.add('displaied')
        }
      });
  })
});

