const form = document.getElementById("characterForm");
const list = document.getElementById("characterList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const charClass = document.getElementById("class").value;
  const element = document.getElementById("element").value;
  const weapon = document.getElementById("weapon").value;
  const skills = document.getElementById("skills").value.split(",");

  const stats = {
    strength: strength.value,
    speed: speed.value,
    defense: defense.value,
    evasion: evasion.value,
    charisma: charisma.value,
    intelligence: intelligence.value
  };

  const imageInput = document.getElementById("image");
  let imageURL = "";

  if (imageInput.files.length > 0) {
    imageURL = URL.createObjectURL(imageInput.files[0]);
  }

  list.innerHTML += `
    <div class="card">
      ${imageURL ? `<img src="${imageURL}">` : ""}
      <h3>${name}</h3>
      <p><strong>Class:</strong> ${charClass}</p>
      <p><strong>Element:</strong> ${element}</p>
      <p><strong>Weapon:</strong> ${weapon}</p>
      <p><strong>Skills:</strong></p>
      <ul>
        ${skills.map(s => `<li>${s}</li>`).join("")}
      </ul>

      <p>Strength</p>
      <div class="bar"><div class="fill" style="width:${stats.strength * 10}%"></div></div>

      <p>Speed</p>
      <div class="bar"><div class="fill" style="width:${stats.speed * 10}%"></div></div>

      <p>Defense</p>
      <div class="bar"><div class="fill" style="width:${stats.defense * 10}%"></div></div>

      <p>Evasion</p>
      <div class="bar"><div class="fill" style="width:${stats.evasion * 10}%"></div></div>

      <p>Charisma</p>
      <div class="bar"><div class="fill" style="width:${stats.charisma * 10}%"></div></div>

      <p>Intelligence</p>
      <div class="bar"><div class="fill" style="width:${stats.intelligence * 10}%"></div></div>
    </div>
  `;

  form.reset();
});
