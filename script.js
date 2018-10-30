/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 4;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Velkominn í leikinn. Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er. Um leið og ýtt er á OK þá fer tíminn af stað!')

  do {
    play();
    //let timiStart = new Date();  veit ekki hvar ég á að staðsetja tímateljarann
  } while (confirm('Spila annan?'));
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  
  const questions = [ask(), ask(), ask(), ask(), ask()],
  
  total = questions.length,
  correct = questions.filter(Boolean).length;
  //let timeEnd = new Date(); veit ekki hvar ég á að staðsetja tímateljarann
  //let heildarTimi = timi; veit ekki hvar ég á að staðsetja tímateljarann
  alert("Þú svarðir "+correct+" rétt af "+total+". Það tók þig "+/*heildarTimi+*/" margar sekúndur");

  }



/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  const op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
  const a = randomNumber(1, 100);
  const b = randomNumber(1, 100);
  /*const c = randomNumber(1, 10);
  const d = randomNumber(2, 10);
  if (op = "*") {
    a = c;
    b = c;
  } else if (op = "/") {
    a = d;
    a = d * d;
  } else {
    a = a;
    b = b;
  } Þarf að finna út hvernig ég breyti randomnumber*/
  return prompt("How much is " + a + " " + op + " " + b + "?") == eval( a + op + b);
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();