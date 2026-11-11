// Which of a Game's three games something belongs to. Kept free of imports so the Engine's
// plain types can use it without pulling in the models.
export enum GameType {
  MAINGAME = "maingame",
  MINIGAME = "minigame",
  TINYGAME = "tinygame",
}
