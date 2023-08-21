const d = document;

// export default function scrollListener(section) {
//   const $seccionNodes = document.querySelectorAll(section),
//     $menu = d.querySelector(".menu"),
//     $menu_a = $menu.children;

//   function isInViewport(node) {
//     let distance = node.getBoundingClientRect();
//     return (
//       distance.top <
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       distance.bottom > 0
//     );
//   }

//   console.log(isInViewport($seccionNodes[1]));
//   console.log(Array.from($seccionNodes)[1]);
//   const throttleFunction = (func, delay) => {
//     let prev = 0;
//     return (...args) => {
//       let now = new Date().getTime();

//       if (now - prev > delay) {
//         prev = now;

//         return func(...args);
//       }
//     };
//   };

//   function selectSection() {
//     let nodeInVPArray = Array.from($seccionNodes).filter((node) => {
//       console.log(node);
//       if (isInViewport(node)) {
//         let $nodeInVPArray = node;
//         return $nodeInVPArray;
//       }
//     });
//     console.log(nodeInVPArray);
//     {
//       let nodeId = node.getAttribute("id").slice(7),
//         isActiveHover = d.querySelector(".scroll-hover");
//       for (let i = 0; i < $menu_a.length + 1; i++) {
//         let aHref = $menu_a[i].getAttribute("href").slice(8);
//         if (isActiveHover) {
//           isActiveHover.classList.remove("scroll-hover");
//         }
//         if (aHref === nodeId) {
//           $menu_a[nodeId].classList.add("scroll-hover");
//         }
//       }
//     }
//   }

//   d.addEventListener(
//     "",
//     throttleFunction(() => {
//       selectSection();
//     }, 1500)
//   );
// }

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: 0.5,
  });

  $sections.forEach((el) => observer.observe(el));
}
