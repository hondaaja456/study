const form = document.getElementById("characterForm");
const list = document.getElementById("characterList");

function escapeHTML(str) { 
return str 
.replace(/&/g, "&amp;") 
.replace(/</g, "&lt;") 
.replace(/>/g, "&gt;") 
.replace(/"/g, "&quot;") 
.replace(/'/g, "&#039;"); }

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const safeName = escapeHTML(name);
  const charClass = document.getElementById("class").value;
  const safecharClass = escapeHTML(charClass);
  const element = document.getElementById("element").value;
  const safeElement = escapeHTML(element);
  const weapon = document.getElementById("weapon").value;
  const safeWeapon = escapeHTML(weapon);
  const skills = document.getElementById("skills").value.split(",");
  const safeSkills = skills.map(s => escapeHTML(s));


  const stats = {
    strength: strength.value,
    speed: speed.value,
    defense: defense.value,
    evasion: evasion.value,
    charisma: charisma.value,
    intelligence: intelligence.value
  };

const imageInput = document.getElementById("image");
const imagePreview = document.getElementById("imagePreview");
const removeImageBtn = document.getElementById("removeImage");

  
  imageInput.addEventListener("change", () => {
  if (imageInput.files.length > 0) {
    currentImageURL = URL.createObjectURL(imageInput.files[0]);

    imagePreview.innerHTML = `<img src="${currentImageURL}">`;
    removeImageBtn.style.display = "block";
  }
});




let currentImageURL = "";
  ${currentImageURL ? <img src="${currentImageURL}"> : ""}

  list.innerHTML += `
  <div class="card">
    ${imageURL ? `<img src="${imageURL}">` : ""}
    <h3>${safeName}</h3>
    <p><strong>Class:</strong> ${safeClass}</p>
    <p><strong>Element:</strong> ${safeElement}</p>
    <p><strong>Weapon:</strong> ${safeWeapon}</p>
    <p><strong>Skills:</strong></p>
    <ul>
      ${safeSkills.map(s => `<li>${s}</li>`).join("")}
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
