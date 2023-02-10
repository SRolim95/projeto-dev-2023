const firstCharacter = prompt(
  "Insira o nome do primeiro personagem"
);

const atkFirstCharacter = prompt(
  "Qual é o poder de ataque do personagem " + firstCharacter + "?"
);

const secondCharacter = prompt(
  "Insira o nome do segundo personagem"
);

let hpSecondCharacter = prompt(
  "Quantos pontos de vida tem o personagem " + secondCharacter + "?"
);

const defSecondCharacter = prompt(
  "Quanto de defesa o personagem " + secondCharacter + " possui?"
);

const shieldSecondCharacter = prompt(
  "O personagem " + secondCharacter + " possui um escudo? (Sim/Não)"
);

let damage = 0

const thereIsDamage = atkFirstCharacter - defSecondCharacter
const thereIsHalfDamage = (atkFirstCharacter - defSecondCharacter) /2
const thereIsNoDamage = damage

if (atkFirstCharacter > defSecondCharacter && shieldSecondCharacter === "Não") {
  damage = thereIsDamage
} else if (atkFirstCharacter > defSecondCharacter && shieldSecondCharacter === "Sim"){
  damage = thereIsHalfDamage
}

hpSecondCharacter -= damage

alert(firstCharacter + " causou um dano total de " + damage +" em " + secondCharacter)
alert (
  firstCharacter + ": \nPoder de ataque: " + atkFirstCharacter + "\n\n" +
  secondCharacter + ": \nPontos de vida: " + hpSecondCharacter + "\n" +
  "\nPoder de defesa: " + defSecondCharacter + "\nPossui escudo: " + shieldSecondCharacter
)