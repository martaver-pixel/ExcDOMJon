const d = document,
  w = window;

export default function videoPlayer(videoNode) {
  const $video = d.getElementById(videoNode);

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $video.play();
      } else {
        $video.pause();
      }

      w.addEventListener("visibilitychange", () => {
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.25 });

  observer.observe($video);
}
