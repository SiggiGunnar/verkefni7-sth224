/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// reyndi að nota þenna, gekk ekki
const GAMES_TO_PLAY = 10;


function start() {
  alert('Velkominn í leikinn. Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er. Um leið og ýtt er á OK þá fer tíminn af stað!')

  do {
    play();
    //let timiStart = new Date(); 
/* prófaði að setja tíma teljara, á nokkra staði í forritið
 * en forrit stoppaði alltaf spurningarnar. þannig ég commentaði þá út
 */  
  } while (confirm('Spila annan?'));
}

function play() {
  
  /**
  * reyndi að nota GAMES_TO_PLAY til þess að ákveðja hversu of ég notaði ask(), 
  * fékk það ekki til að virka, birti alltaf bara eina spuringu 
  */
  const questions = [ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask()],
  
  total = questions.length,
  correct = questions.filter(Boolean).length;
  //let timeEnd = new Date(); veit ekki hvar ég á að staðsetja tímateljarann
  //let heildarTimi = timi; veit ekki hvar ég á að staðsetja tímateljarann
  // let medalTimi = heildarTimi / total.
  alert("Þú svarðir "+correct+" rétt af "+total+". Það tók þig "+/*heildarTimi+*/" margar sekúndur." +
         " Þú varst að meðaltali " + /*medalTimi +*/" sekúndur á hverri spuringu." );

  }

function ask() {

    const op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
    const a = randomNumber(1, 100);
    const b = randomNumber(1, 100);
/*
 * const c = randomNumber(1, 10);
 * const d = randomNumber(2, 10);
 * if (op == "*") { prófaði líka "==" og "==="
 * const a = randomNumber(1, 10);
 * const b = randomNumber(1, 10);
 * } else if (op == "/") { //prófaði líka "==" og "==="
 * a = randomNumber(2, 10);
 * b = randomNumber(2, 10) * randomNumber(2, 10);
 * } else {
 * a = randomNumber(1, 100);
 * b = randomNumber(1, 100);
 * } Þarf að finna út hvernig ég breyti randomnumber
 * */
    return prompt("How much is " + a + " " + op + " " + b + "?") == eval( a + op + b);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();