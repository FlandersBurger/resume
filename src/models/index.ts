import { Model } from "mongoose";

import UserModels, { IUser } from "./user";
import JokeModels, { IJoke } from "./joke";
import PostModels, { IPost } from "./post";
import CategoryModels, { ICategory } from "./category";
import ListModels, { IList } from "./tenthings/list";
import GameModels, { IGame } from "./tenthings/game";
import MinigameModels, { IMinigame } from "./tenthings/minigame";
import PlayerModels, { IPlayer } from "./tenthings/player";
import StatsModels, { IStats } from "./tenthings/stats";

export const User: Model<IUser> = UserModels();
export const Joke: Model<IJoke> = JokeModels();
export const Post: Model<IPost> = PostModels();
export const Category: Model<ICategory> = CategoryModels();
export const List: Model<IList> = ListModels();
export const Game: Model<IGame> = GameModels();
export const Minigame: Model<IMinigame> = MinigameModels();
export const Player: Model<IPlayer> = PlayerModels();
export const Stats: Model<IStats> = StatsModels();

export const UserBackup: Model<IUser> = UserModels("backup");
export const JokeBackup: Model<IJoke> = JokeModels("backup");
export const PostBackup: Model<IPost> = PostModels("backup");
export const CategoryBackup: Model<ICategory> = CategoryModels("backup");
export const ListBackup: Model<IList> = ListModels("backup");
export const GameBackup: Model<IGame> = GameModels("backup");
export const MinigameBackup: Model<IMinigame> = MinigameModels("backup");
export const PlayerBackup: Model<IPlayer> = PlayerModels("backup");
export const StatsBackup: Model<IStats> = StatsModels("backup");
