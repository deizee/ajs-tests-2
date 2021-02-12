export default function sortHeroesByHealth(data) {
  return data.sort((a, b) => b.health - a.health);
}
