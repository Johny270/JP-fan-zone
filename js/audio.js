let snk = new Audio("../assets/anime_shingeki-no-kyojin.mp3")
let narutoKakuzu = new Audio("../assets/naruto-sountrack_kakuzu-fight.mp3");
let narutoPein = new Audio("../assets/naruto-sountrack_pein-tendok.mp3");
let snk2 = new Audio("../assets/attack-on-titan.mp3");
let codeGeass = new Audio("../assets/stories.mp3");
let mha = new Audio("../assets/Deku and Katsuma.mp3")

const jpSoundtrack = [];

jpSoundtrack.push(snk);
jpSoundtrack.push(narutoKakuzu);
jpSoundtrack.push(narutoPein);
jpSoundtrack.push(snk2);
jpSoundtrack.push(codeGeass);
jpSoundtrack.push(mha);

function getSongs() {
  return jpSoundtrack;
}

export {
  getSongs
}