let snk = new Audio("../assets/anime_shingeki-no-kyojin.mp3")
let narutoKakuzu = new Audio("../assets/naruto-sountrack_kakuzu-fight.mp3");
let narutoPein = new Audio("../assets/naruto-sountrack_pein-tendok.mp3");
let dbzBoo = new Audio("../assets/dragon-ball-music_dbz.mp3");
let dbzSaiyen = new Audio("../assets/dragon-ball-music.mp3");

const jpSoundtrack = [];

jpSoundtrack.push(snk);
jpSoundtrack.push(narutoKakuzu);
jpSoundtrack.push(narutoPein);
jpSoundtrack.push(dbzBoo);
jpSoundtrack.push(dbzSaiyen);

function getSongs() {
  return jpSoundtrack;
}

export {
  getSongs
}