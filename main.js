function creatGame(player1, hour, player2) {
  return `
    <li>
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
       <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li> 
  `
}
let delay = -0.4;
function creatCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
</div>
  `
}

document.querySelector('#app').innerHTML = `
<header>
<img src="./assets/logo.svg" alt="Logo da NLW">
</header>
<main id="cards">
${creatCard("24/11", "quinta", creatGame("brazil", "16:00", "Serbia"))}
${creatCard("28/11", "Segunda", creatGame("Switzerland", "13:00", "brazil") + 
creatGame("portugal", "16:00", "uruguai")
)}

${creatCard("02/12", "sexta", creatGame("brazil", "16:00", "cameroon"))}
</main>
`