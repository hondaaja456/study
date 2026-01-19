const characters = [
  {
    name: "Aldric",
    class: "Warrior",
    health: 180,
    mana: 30,
    weapon: "Greatsword",
    element: "Earth",
    skills: ["Shield Bash", "Power Strike"]
  },
  {
    name: "Lyra",
    class: "Mage",
    health: 90,
    mana: 200,
    weapon: "Staff",
    element: "Fire",
    skills: ["Fireball", "Flame Wall"]
  },
  {
    name: "Kael",
    class: "Rogue",
    health: 120,
    mana: 60,
    weapon: "Daggers",
    element: "Shadow",
    skills: ["Backstab", "Vanish"]
  },
  {
    name: "Seraphine",
    class: "Cleric",
    health: 140,
    mana: 150,
    weapon: "Mace",
    element: "Light",
    skills: ["Heal", "Blessing"]
  },
  {
    name: "Thorne",
    class: "Ranger",
    health: 130,
    mana: 80,
    weapon: "Bow",
    element: "Wind",
    skills: ["Piercing Arrow", "Evasion"]
  }
];

const row = document.getElementById("character-row");

characters.forEach(char => {
  row.innerHTML += `
    <div class="card">
      <h2>${char.name}</h2>
      <div class="stat"><strong>Class:</strong> ${char.class}</div>
      <div class="stat"><strong>Health:</strong> ${char.health}</div>
      <div class="stat"><strong>Mana:</strong> ${char.mana}</div>
      <div class="stat"><strong>Weapon:</strong> ${char.weapon}</div>
      <div class="stat"><strong>Element:</strong> ${char.element}</div>
      <div class="stat"><strong>Skills:</strong></div>
      ${char.skills.map(skill => `<div class="skill">• ${skill}</div>`).join("")}
    </div>
  `;
});
