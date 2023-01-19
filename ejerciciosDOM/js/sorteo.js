const d = document;

export default function draw(btn, selector) {
  const getWiner = (selector) => {
    const $players = d.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const winner = $players[random];

    return `El ganador es : ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWiner(selector);
      alert(result);
    }
  });
}

const getWinerComment = (selector) => {
  const $players = document.querySelectorAll(selector);
  const random = Math.floor(Math.random() * $players.length);
  const winner = $players[random];

  return `El ganador es : ${winner.textContent}`;
};

//getWinerComment("ytd-comment-thread-renderer #author-text span");

