"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryLabel = exports.convertGameCategories = exports.convertListCategories = exports.convertCategory = void 0;
const i18n_1 = __importDefault(require("../../../i18n"));
const uniq_1 = __importDefault(require("lodash/uniq"));
const oldCategoryHelperDictionary = {
    "Anime/Manga": "movies.anime",
    "Food and Drink": "culture.food_drink",
    "K-drama": "television.k_drama",
    "K-pop": "music.k_pop",
    Adult: "culture.adult",
    Albums: "music.albums",
    Animation: "movies.animation",
    Art: "culture.visual_arts",
    Biology: "science.biology",
    Business: "society.business",
    Celebrities: "culture.celebrities",
    Chemistry: "science.chemistry",
    Culture: "culture",
    Entertainment: "culture.entertainment",
    Funny: "misc.funny",
    Gaming: "gaming",
    Geography: "science.geography",
    History: "history",
    Internet: "technology.internet",
    Language: "language",
    Literature: "literature",
    Lyrics: "music.lyrics",
    Mathematics: "science.mathematics",
    Medicine: "science.medicine",
    Misc: "misc",
    Movies: "movies",
    Music: "music",
    Nature: "nature",
    Objects: "misc.things",
    Politics: "society.politics",
    Religion: "culture.religion",
    Science: "science",
    Society: "society",
    Sports: "sports",
    Technology: "technology",
    Telenovelas: "television.telenovelas",
    Television: "television",
    Transportation: "society.transportation",
};
const convertCategory = (oldCategory) => oldCategoryHelperDictionary[oldCategory] ?? oldCategory;
exports.convertCategory = convertCategory;
const convertCategories = (oldCategories) => {
    const newCategories = oldCategories
        .filter((category) => !["Non-English", "Challenging"].includes(category))
        .map(exports.convertCategory)
        .filter((category) => category);
    const mainCategories = (0, uniq_1.default)(newCategories.map((category) => category.split(".")[0]));
    for (const category of mainCategories) {
        if (!newCategories.includes(category))
            newCategories.push(category);
    }
    return (0, uniq_1.default)(newCategories);
};
const convertListCategories = async (list) => {
    list.categories = convertCategories(list.categories);
    await list.save();
};
exports.convertListCategories = convertListCategories;
const convertGameCategories = async (game) => {
    game.disabledCategories = (0, uniq_1.default)(game.disabledCategories.map(exports.convertCategory).filter((category) => category));
    game.list.categories = convertCategories(game.list.categories);
    await game.save();
};
exports.convertGameCategories = convertGameCategories;
const getCategoryLabel = (lng, list) => {
    if (!list.categories || list.categories.length === 0)
        return "";
    const mainCategories = list.categories.filter((category) => !category.includes("."));
    return mainCategories
        .sort()
        .map((category) => {
        const subcategories = list.categories
            .filter((subcategory) => subcategory.startsWith(category) && subcategory !== category)
            .map((subcategory) => (0, i18n_1.default)(lng, subcategory, { ns: "categories" }) || "");
        return ((0, i18n_1.default)(lng, `${category}.name`, { ns: "categories" }) +
            (subcategories.length > 0 ? " (" + subcategories.sort().join(", ") + ")" : ""));
    })
        .join(", ");
};
exports.getCategoryLabel = getCategoryLabel;
const categories = {
    music: [
        "albums",
        "artists",
        "awards",
        "bands",
        "discography",
        "electronic",
        "festivals",
        "instruments",
        "k_pop",
        "lyrics",
        "musicals",
        "rap",
        "rock",
        "songs",
        "soundtracks",
    ],
    television: [
        "animation",
        "anime",
        "cast",
        "characters",
        "details",
        "k_drama",
        "reality",
        "seasons",
        "streaming",
        "telenovelas",
        "titles",
    ],
    movies: [
        "actors",
        "animation",
        "anime",
        "awards",
        "cast",
        "characters",
        "details",
        "filmography",
        "marvel",
        "dc",
        "star_wars",
        "titles",
    ],
    culture: [
        "adult",
        "astrology",
        "celebrations",
        "celebrities",
        "entertainment",
        "fashion",
        "food_drink",
        "mythology",
        "performing_arts",
        "religion",
        "tradition",
        "visual_arts",
    ],
    region: [
        "africa",
        "antarctica",
        "arctic",
        "asia",
        "atlantic_ocean",
        "australia",
        "brazil",
        "canada",
        "caribbean",
        "central_america",
        "central_asia",
        "china",
        "commonwealth",
        "east_africa",
        "egypt",
        "europe",
        "european_union",
        "france",
        "germany",
        "greece",
        "india",
        "indian_ocean",
        "indonesia",
        "italy",
        "mediterranean",
        "mexico",
        "middle_east",
        "north_africa",
        "north_america",
        "oceania",
        "pacific_ocean",
        "russia",
        "scandinavia",
        "spain",
        "southeast_asia",
        "southern_africa",
        "south_africa",
        "south_america",
        "united_kingdom",
        "united_states",
        "west_africa",
    ],
    history: [
        "ancient_civilizations",
        "ancient_china",
        "ancient_egypt",
        "ancient_greece",
        "ancient_rome",
        "artifacts",
        "conflict",
        "epochs",
        "historic_events",
        "historic_figures",
        "historic_places",
        "inventions",
        "monuments",
        "prehistory",
        "renaissance",
        "world_wars",
    ],
    science: ["astronomy", "biology", "chemistry", "geography", "mathematics", "medicine", "physics", "social_sciences"],
    gaming: [
        "card_games",
        "consoles",
        "content",
        "fps",
        "gaming_series",
        "indie_gaming",
        "minecraft",
        "mmo",
        "mobile_gaming",
        "open_world",
        "pokemon",
        "retro_gaming",
        "rpg",
        "rts",
        "survival",
        "tabletop_gaming",
        "vr",
    ],
    sports: ["athletes", "bar_sports", "brain_sports", "championships", "olympic_games", "racing", "teams", "venues"],
    literature: [
        "authors",
        "awards",
        "bibliography",
        "book_series",
        "books",
        "characters",
        "classic",
        "comics",
        "graphic_novels",
        "harry_potter",
        "manga",
        "middle_earth",
        "non_fiction",
        "shakespeare",
    ],
    misc: ["colours", "fictional", "funny", "memes", "meta", "names", "telegram", "things"],
    society: [
        "automotive",
        "business",
        "capitals",
        "cities",
        "countries",
        "crime",
        "education",
        "human_rights",
        "infrastructure",
        "leaders",
        "politics",
        "social_movements",
        "tourism",
        "transportation",
    ],
    language: ["euphemisms", "foreign", "grammar", "idioms", "loanwords", "synonyms", "terms", "words"],
    nature: ["animals", "biomes", "disasters", "plants", "weather"],
    technology: [
        "ai",
        "data_science",
        "hardware",
        "internet",
        "operating_systems",
        "programming",
        "robotics",
        "software",
    ],
};
exports.default = categories;
//# sourceMappingURL=categories-new.js.map