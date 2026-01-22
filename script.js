// const form = document.getElementById("characterForm");
// const list = document.getElementById("characterList");

// const imageInput = document.getElementById("image");
// const imagePreview = document.getElementById("imagePreview");
// const removeImageBtn = document.getElementById("removeImage");


// let currentImageURL = "";

// function escapeHTML(str) { 
// return str 
// .replace(/&/g, "&amp;") 
// .replace(/</g, "&lt;") 
// .replace(/>/g, "&gt;") 
// .replace(/"/g, "&quot;") 
// .replace(/'/g, "&#039;"); }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const safeName = escapeHTML(document.getElementById("name").value);
//   const safeCharClass = escapeHTML(document.getElementById("class").value);
//   const safeElement = escapeHTML(document.getElementById("element").value);
//   const safeWeapon = escapeHTML(document.getElementById("weapon").value);

//   const safeSkills = document
//     .getElementById("skills")
//     .value
//     .split(",")
//     .filter(s => s !== "")
//     .map(s => escapeHTML(s.trim()));

//   const strength = document.getElementById("strength");
//   const speed = document.getElementById("speed");
//   const defense = document.getElementById("defense");
//   const evasion = document.getElementById("evasion");
//   const charisma = document.getElementById("charisma");
//   const intelligence = document.getElementById("intelligence");

//   list.innerHTML += `
//     <div class="card">
//       ${currentImageURL ? `<img src="${currentImageURL}">` : ""}
//       <h3>${safeName}</h3>
//       <p><strong>Class:</strong> ${safeCharClass}</p>
//       <p><strong>Element:</strong> ${safeElement}</p>
//       <p><strong>Weapon:</strong> ${safeWeapon}</p>

//       <ul>
//         ${safeSkills.map(s => `<li>${s}</li>`).join("")}
//       </ul>

//       <div class="bar"><div class="fill" style="width:${strength.value * 10}%"></div></div>
//       <div class="bar"><div class="fill" style="width:${speed.value * 10}%"></div></div>
//       <div class="bar"><div class="fill" style="width:${defense.value * 10}%"></div></div>
//       <div class="bar"><div class="fill" style="width:${evasion.value * 10}%"></div></div>
//       <div class="bar"><div class="fill" style="width:${charisma.value * 10}%"></div></div>
//       <div class="bar"><div class="fill" style="width:${intelligence.value * 10}%"></div></div>
//     </div>
//   `;

//   form.reset();
// });


  
//   imageInput.addEventListener("change", () => {
//   if (imageInput.files.length > 0) {
//     currentImageURL = URL.createObjectURL(imageInput.files[0]);

//     imagePreview.innerHTML = `<img src="${currentImageURL}">`;
//     removeImageBtn.style.display = "block";
//   }
// });


// removeImageBtn.addEventListener("click", () => {
//   currentImageURL = "";
//   imageInput.value = "";
//   imagePreview.innerHTML = "";
//   removeImageBtn.style.display = "none";
// });





const form = document.getElementById("charForm");



 function escapeHTML(str) { 
 return str 
 .replace(/&/g, "&amp;") 
 .replace(/</g, "&lt;") 
.replace(/>/g, "&gt;") 
 .replace(/"/g, "&quot;") 
 .replace(/'/g, "&#039;"); }


const output = document.getElementById("output");


 form.addEventListener("submit", function (e) {
   e.preventDefault();

  const safeName = escapeHTML(document.getElementById("name").value);
  const safeCharClass = escapeHTML(document.getElementById("class").value);
const strength = document.getElementById("strength");

output.innerHTML += `
       `<div class="bar"><div class="fill" style="width:${strength.value * 10}%"></div></div>

   `;

   form.reset();
 });
