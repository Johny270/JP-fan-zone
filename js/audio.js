let snk = new Audio("../assets/anime_shingeki-no-kyojin.mp3")
let narutoKakuzu = new Audio("../assets/naruto-sountrack_kakuzu-fight.mp3");
let narutoPein = new Audio("../assets/naruto-sountrack_pein-tendok.mp3");
let dbzBoo = new Audio("../assets/dragon-ball-music_dbz.mp3");
let dbzSaiyen = new Audio("../assets/dragon-ball-music.mp3");
let snk2 = new Audio("../assets/attack-ON-titan.mp3");
let codeGeass = new Audio("../assets/Stories.mp3");
// let mha = new Audio("../assets")

const jpSoundtrack = [];

jpSoundtrack.push(snk);
jpSoundtrack.push(narutoKakuzu);
jpSoundtrack.push(narutoPein);
jpSoundtrack.push(dbzBoo);
jpSoundtrack.push(dbzSaiyen);
jpSoundtrack.push(snk2);
jpSoundtrack.push(codeGeass);

function getSongs() {
  return jpSoundtrack;
}

export {
  getSongs
}