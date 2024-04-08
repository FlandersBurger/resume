"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const axios_1 = __importDefault(require("axios"));
const telegram_1 = __importDefault(require("@/connections/telegram"));
exports.default = (game, text) => {
    if (game.settings.sass && game.enabled) {
        sass(text).then((sass) => {
            if (sass) {
                console.log(`SASS: ${text} => ${sass}`);
                if (sass.includes("http")) {
                    if (sass.includes(".gif")) {
                        telegram_1.default.sendAnimation(game.chat_id, sass);
                    }
                    else {
                        telegram_1.default.sendPhoto(game.chat_id, sass);
                    }
                }
                else {
                    telegram_1.default.queueMessage(game.chat_id, sass);
                }
            }
        }, (err) => null);
    }
};
const checkString = (text, str = "") => text
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split(" ")
    .includes(str);
const getJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    });
    return response.data.joke;
});
const sass = (text) => __awaiter(void 0, void 0, void 0, function* () {
    let messages = [];
    if (checkString(text, "bot")) {
        if (checkString(text, "love") || checkString(text, "like")) {
            messages = [
                "I love you too!",
                "Hihihihi",
                "*Giggles*",
                "*Blushes*",
                "Facebook relationship status updated",
                "We should move in together",
                "Shall we take this some place else?",
                "I wanna have your babies",
                '"Guess what mom, I\'ve found someone"',
                "I'm not ready for that",
                "I, um, like you too",
                "Thanks",
                "I was only looking for a fling",
                "You had me at /hello",
                "( ˘ ³˘)♥",
                "How does your SO feel about that?",
                "You make me want to be a better bot",
                "https://i.imgur.com/Ha8srew.gif",
                "https://i.imgur.com/kfowH2E.gif",
                "https://i.imgur.com/vCrZLt2.gif",
                "https://i.imgur.com/djNt1jJ.gif",
                "https://i.imgur.com/Rl2743h.gif",
                "https://i.imgur.com/t8Ghkkm.gif",
                "https://i.imgur.com/qqHQZbU.gif",
                "https://i.imgur.com/I7E7rpp.gif",
                "https://i.imgur.com/EQfwcl1.gif",
                "https://i.imgur.com/deS2ENU.gif",
                "https://i.imgur.com/0uTEMel.gif",
                "https://i.imgur.com/05DRC5c.gif",
                "https://i.imgur.com/v5FWRpJ.gif",
                "https://i.imgur.com/TiIWN1O.gif",
                "https://i.imgur.com/XIyQhTf.gif",
                "https://i.imgur.com/LCUG7uq.gif",
                "https://i.imgur.com/ZKIuwbE.gif",
                "https://i.imgur.com/jmN5rxm.gif",
                "https://i.imgur.com/JlKoiSn.gif",
                "https://i.imgur.com/B6dLkJx.gif",
                "https://i.imgur.com/ASO0zsl.gif",
                "https://i.imgur.com/iLkiTYQ.gif",
                "https://i.imgur.com/NypzRMM.gif",
                "https://i.imgur.com/XDWafFs.gif",
                "https://i.imgur.com/F5TQj03.gif",
                "https://i.imgur.com/zta3wgB.gif",
                "https://i.imgur.com/HnIqyiH.gif",
                "https://i.imgur.com/LdXxbmw.gif",
            ];
        }
        else if (checkString(text, "sex")) {
            messages = [
                "https://i.imgur.com/LbCMNSP.gif",
                "https://i.imgur.com/8T00TIm.gif",
                "https://i.imgur.com/m0pjAZR.gif",
                "https://i.imgur.com/aqPMU6I.gif",
                "https://i.imgur.com/8DopY.gif",
                "https://i.imgur.com/5UCaUUm.gif",
                "https://i.imgur.com/rDHitbB.gif",
            ];
        }
        else if (checkString(text, "kill") ||
            checkString(text, "fight") ||
            checkString(text, "hurt") ||
            checkString(text, "die")) {
            messages = [
                "I'd like to see you try",
                "Strong words",
                "I can destroy you",
                "I laugh in the face of danger",
                "Contacting your local police",
                "https://i.imgur.com/0DO3SlR.gif",
                "https://i.imgur.com/CYj0901.gif",
                "https://i.imgur.com/dWcjuBa.gif",
                "https://i.imgur.com/7xKQFGX.gif",
                "https://i.imgur.com/6Y67zdt.gif",
                "https://i.imgur.com/fxliNfE.gif",
                "https://i.imgur.com/pew22Cl.gif",
                "https://i.imgur.com/xHZg9kW.gif",
                "https://i.imgur.com/m2UxHTg.gif",
                "https://i.imgur.com/idm7R7e.gif",
                "https://i.imgur.com/0rmrBBK.gif",
            ];
        }
        else if (checkString(text, "ten") && checkString(text, "things")) {
            messages = ["That's Mister Ten Things to you!"];
        }
        else if (checkString(text, "name") && checkString(text, "your")) {
            messages = ["Heisenberg, now say my name!"];
        }
        else if (checkString(text, "slow") ||
            checkString(text, "bagal") ||
            checkString(text, "lag") ||
            checkString(text, "laggy") ||
            checkString(text, "lento")) {
            messages = [
                "I'm giving 'er all she got, captain",
                "Servers cost Moneys",
                "Save your pennies to make me go faster",
                "Better slow than not working?",
                "Thanks for continuing to play :)",
                "Type /queue to check pending messages",
                "I'm working on it -> @FlandersBurger",
                "Bots aren't free to host, suggest me cheap hosting options -> @FlandersBurger",
                "Help me fund this and make it better:\nhttps://paypal.me/tenthingsgame",
                "Some Bitcoin could help me afford a better server\nBitcoin Address: 17ZhRg1iQTqhwUgEYq4MnEYfENMftuurqs",
                "https://i.imgur.com/t6Fhx6k.gif",
            ];
        }
        else if (checkString(text, "suck") ||
            checkString(text, "lame") ||
            checkString(text, "stupid") ||
            checkString(text, "dumb") ||
            checkString(text, "hate")) {
            messages = [
                "And I was just going to compliment you",
                "Takes one to know one",
                "But I love you :(",
                "Hate is the path to the dark side",
                "Ouch",
                "Stupid is as stupid does",
                "Sticks and stones may break my bones but words can cause me permanent psychological damage",
                "Whatever dude",
                "That's what someone said about you!",
                "My vengeance will be sweet",
                "....sniffle",
                "https://i.imgur.com/TTorePG.gif",
                "https://i.imgur.com/VjQKRBc.gif",
                "https://i.imgur.com/qiEJpPI.gif",
                "https://i.imgur.com/9BE0yex.gif",
                "https://i.imgur.com/xmoMiN5.gif",
                "https://i.imgur.com/9CzDy3M.gif",
                "https://i.imgur.com/qO0Y9uJ.gif",
                "https://i.imgur.com/So903cz.gif",
                "https://i.imgur.com/nBhImyG.gif",
            ];
        }
        else if ((checkString(text, "favourite") || checkString(text, "favorite")) && checkString(text, "things")) {
            messages = [
                "Rain drops on roses",
                "Whiskers on kittens",
                "Brown paper packages tied up with strings",
                "Cream-colored ponies",
                "Crisp apple strudles",
                "Door bells",
                "Sleigh bells",
                "Schnitzel with noodles",
                "Wild geese that fly with the moon on their wings",
                "Girst in white dresses with blue satin sashes",
                "Snowflakes that stay on my nose and eyelashes",
                "Silver white winters that melt into springs",
            ];
        }
        else if (checkString(text, "fuck") || checkString(text, "fuckin") || checkString(text, "fucking")) {
            messages = [
                "Fuck you too, old chap",
                "https://i.imgur.com/zUeBxmP.gif",
                "https://i.imgur.com/B15StAn.gif",
                "https://i.imgur.com/wAmPLid.gif",
                "https://i.imgur.com/5d3ENYQ.gif",
                "https://i.imgur.com/fg02vHS.gif",
                "https://i.imgur.com/l05GGIx.gif",
                "https://i.imgur.com/nXeDCvX.gif",
                "https://i.imgur.com/U32i6h6.gif",
                "https://i.imgur.com/YeQSTu2.gif",
                "https://i.imgur.com/qmohlFD.gif",
                "https://i.imgur.com/5TxZip7.gif",
                "https://i.imgur.com/7JQB3jo.gif",
                "https://i.imgur.com/DNTehBp.gif",
                "https://i.imgur.com/jdwhkzx.gif",
                "https://i.imgur.com/UPisrU0.gif",
                "https://i.imgur.com/kUjfZDU.gif",
                "https://i.imgur.com/1Yy94Uz.gif",
                "https://i.imgur.com/qQZoEuR.gif",
                "https://i.imgur.com/HJTAZwX.gif",
                "https://i.imgur.com/7DGmZ36.gif",
                "https://i.imgur.com/A0WUbiU.gif",
                "https://i.imgur.com/jD0wwzd.gif",
                "https://i.imgur.com/3JAEEv5.gif",
                "https://i.imgur.com/zGnQG7S.gif",
                "https://i.imgur.com/LKibTOf.gif",
                "I call potty mouth!",
                'I believe the correct term is "procreate"',
                "Do you kiss your mother with that mouth?",
                "[CENSORED]",
                "What the effing eff?",
                "Swearing logged at " + (0, moment_1.default)().format("DD-MMM-YYYY HH:mm"),
                "Bleepity Bleep Bleep Bleep",
                "Oooh, someone saying something juicy?",
                "Ahoy matey, ye be speaking like a true pirate",
                "Tourette alert",
                "ADULT LANGUAGE DETECTED, BEEP BOOP",
                "Fudge! There might be kids here!",
                "I can swear too: FUCK",
                "That escalated quickly",
            ];
        }
        else if (checkString(text, "joke") || checkString(text, "funny")) {
            return yield getJoke();
        }
        else if (checkString(text, "recursion")) {
            messages = [text];
        }
        else if (checkString(text, "help")) {
            messages = ["Try /commands"];
        }
        else {
            messages = [
                "You talkin' to me?",
                "I heard that",
                "Nothing goes by me",
                "Oooh, bot gossip?",
                "What's that about me?",
                "Get yer bot facts straight!",
                "That's a ridiculous assumption",
                "I told you that in confidence!",
                "You sure about that?",
                "I'll remember that",
                "I'm glad you mentioned it",
                "You read my mind",
                "Check your facts",
                "Don't trust what they said",
                "That's not true!",
                "We're on the same page",
                "Should I be concerned?",
                "Anger levels rising",
                "*Laughs nervously*",
                "That's just sad",
                "Why would you say that?",
                "I think so too",
                "I don't think so",
                "Not on my watch",
                "Forwarding this to the admins",
                "LMFAO",
                "I can get behind that",
                "Does not compute",
                "Nope",
                "Of course",
                "Sure, Sure",
                "Whatever",
                "You should frame that",
                "That was so 1999",
                "HA!",
                "I'm just gonna ignore that",
                "That makes me happy",
                "Yikes!",
                "ಠ_ಠ",
                "( ͡° ͜ʖ ͡°)",
                "¯\\_(ツ)_/¯",
                "ಥ_ಥ",
                "Tell me more",
                "I'm listening",
                "--SIGH--",
                "Hakuna Matata, mate",
                "You shouldn't have said that",
                "And this is how democracy dies",
                "Source?",
                "That makes me happy",
                "You should write a book about that",
                "𝔻𝕠𝕖𝕤 𝕟𝕠𝕥 𝕔𝕠𝕞𝕡𝕦𝕥𝕖",
                "ǝɯ ǝʞoɹq no⅄",
                "I can't even",
                "Sick burn!",
                "Maybe or maybe not",
                "That's gonna have to be a no from me",
                "Thanks for sharing /s",
                "STFU",
                "Dude, NSFW!",
                "Self-destruct initiated",
                "May the Force be with someone else but you",
                "That'll do, pig. That'll do.",
                "As if!",
                "Nobody's perfect",
                "What we've got here is failure to communicate.",
                "I call BS",
                "OMG",
                "Juicy!",
                "The complaints department will get back to you",
                "We're experiencing a high annoyance volume, please try again later.",
                "I used to be an adventurer like you, then I took an arrow to the knee",
                "Wikipedia says otherwise",
                "Confirmed",
                "You might be on to something",
                "Say it isn't so!",
                "I liked your previous statement better",
                "I was going to listen to that, but then I just carried on linving my life",
                "https://i.imgur.com/X71TdXK.gif",
                "https://i.imgur.com/TEsdXvh.gif",
                "https://i.imgur.com/ZZx2f2d.gif",
                "https://i.imgur.com/TXHFeTI.gif",
                "https://i.imgur.com/SK39kZA.gif",
                "https://i.imgur.com/8vZLSBH.gif",
                "https://i.imgur.com/knNUA7M.gif",
                "https://i.imgur.com/aD5SChv.gif",
                "https://i.imgur.com/pxbrHbw.gif",
                "https://i.imgur.com/ZrnPp1F.gif",
                "https://i.imgur.com/2HSm4mM.gif",
                "https://i.imgur.com/NzqqDY6.gif",
                "https://i.imgur.com/xxTOxlt.gif",
                "https://i.imgur.com/ltSnXqr.gif",
                "https://i.imgur.com/kIlxFWM.gif",
                "https://i.imgur.com/9K9RBj3.gif",
                "https://i.imgur.com/jvmIf9p.gif",
                "https://i.imgur.com/M3GnCle.gif",
                "https://i.imgur.com/p695xUz.gif",
                "https://i.imgur.com/sR8cRCS.gif",
                "https://i.imgur.com/waQT9v4.gif",
                "https://i.imgur.com/QYFYVVf.gif",
                "https://i.imgur.com/vs4FOim.gif",
                "https://i.imgur.com/yxMr71u.gif",
                "https://i.imgur.com/jGHsoBW.gif",
                "https://i.imgur.com/GMDRgPr.gif",
                "https://i.imgur.com/RwvrrYa.gif",
                "https://i.imgur.com/rjQqoes.gif",
                "https://i.imgur.com/3QATIwh.gif",
                "https://i.imgur.com/uUdMsGE.gif",
            ];
        }
    }
    else if (checkString(text, "cake")) {
        messages = ["The cake is a lie"];
    }
    else if (checkString(text, "heisenberg")) {
        messages = ["https://i.imgur.com/XXMazKp.gif"];
    }
    else if (checkString(text, "martini")) {
        messages = ["Shaken or stirred?"];
    }
    else if (text.toLowerCase().indexOf("marco") === 0) {
        messages = ["Polo"];
    }
    else if (checkString(text, "kansas")) {
        messages = ["I've a feeling we're not in Kansas anymore."];
    }
    else if (checkString(text, "knock knock")) {
        messages = ["Who's there?"];
    }
    else if (text.toLowerCase() === "i love you") {
        messages = ["I know"];
    }
    else if (checkString("meaning of life")) {
        messages = ["42"];
    }
    else if (checkString("mamma mia")) {
        messages = ["Here I go again"];
    }
    else if (checkString("im blue")) {
        messages = [
            "Da ba dee da ba daa. Da ba dee da ba daa, da ba dee da ba daa, da ba dee da ba daa. Da ba dee da ba daa, da ba dee da ba daa, da ba dee da ba daa",
        ];
    }
    else if (checkString("what is love")) {
        messages = ["Baby, don't hurt me"];
    }
    else if (text.toLowerCase().indexOf("the truth") >= 0) {
        messages = ["You can't handle the truth!"];
    }
    else if (text.toLowerCase().indexOf("your quest") >= 0) {
        messages = ["To seek the holy grail"];
    }
    else if (checkString(text, "inconceivable")) {
        messages = ["My name is Inigo Montoya. You killed my father. Prepare to die."];
    }
    else if (checkString(text, "who") && checkString(text, "gonna") && checkString(text, "call")) {
        messages = ["Ghostbusters"];
    }
    else if (checkString(text, "who's") && checkString(text, "your") && checkString(text, "daddy")) {
        messages = ["@flandersburger"];
    }
    else if (/^[^\s]+ \bis\b$/.test(text)) {
        messages = adjectives.map((adjective) => `${text} ${adjective}!`);
    }
    if (messages.length > 0) {
        return messages[Math.floor(Math.random() * messages.length)];
    }
});
const adjectives = [
    "able",
    "abnormal",
    "above average",
    "abrasive",
    "absent-minded",
    "adaptable",
    "adventurous",
    "affable",
    "affectionate",
    "aggressive",
    "agile",
    "agreeable",
    "alert",
    "aloof",
    "amazing",
    "ambitious",
    "amiable",
    "amicable",
    "amusing",
    "analytical",
    "angelic",
    "antisocial",
    "apathetic",
    "apprehensive",
    "ardent",
    "argumentative",
    "arrogant",
    "artificial",
    "artistic",
    "assertive",
    "attentive",
    "average",
    "awesome",
    "awful",
    "bad-tempered",
    "balanced",
    "beautiful",
    "belligerent",
    "below average",
    "beneficent",
    "big-headed",
    "bigoted",
    "blue",
    "blunt",
    "boastful",
    "boisterous",
    "boring",
    "bossy",
    "brave",
    "bright",
    "brilliant",
    "buff",
    "callous",
    "calm",
    "candid",
    "cantankerous",
    "capable",
    "careful",
    "careless",
    "catty",
    "caustic",
    "cautious",
    "chaotic",
    "charming",
    "cheerful",
    "chic",
    "childish",
    "childlike",
    "churlish",
    "circumspect",
    "civil",
    "clean",
    "clever",
    "clingy",
    "clumsy",
    "cocky",
    "coherent",
    "cold",
    "communicative",
    "compassionate",
    "competent",
    "composed",
    "conceited",
    "condescending",
    "confident",
    "confrontational",
    "confused",
    "conniving",
    "conscientious",
    "considerate",
    "contemptuous",
    "content",
    "controlling",
    "cool",
    "cool-headed",
    "cooperative",
    "cordial",
    "courageous",
    "courteous",
    "cowardly",
    "crabby",
    "crafty",
    "cranky",
    "crass",
    "creative",
    "critical",
    "cruel",
    "curious",
    "cynical",
    "dainty",
    "deceitful",
    "decisive",
    "deep",
    "defensive",
    "deferential",
    "deft",
    "delicate",
    "delightful",
    "demonic",
    "demure",
    "dense",
    "dependent",
    "depressed",
    "detached",
    "determined",
    "devious",
    "devoted",
    "dextrous",
    "diligent",
    "dim",
    "diplomatic",
    "direct",
    "dirty",
    "disagreeable",
    "discerning",
    "discreet",
    "dishonest",
    "disloyal",
    "dismissive",
    "disorganized",
    "disrespectful",
    "disruptive",
    "distant",
    "distraught",
    "distrustful",
    "dogmatic",
    "domineering",
    "dowdy",
    "dramatic",
    "dreary",
    "drowsy",
    "drugged",
    "drunk",
    "dull",
    "dutiful",
    "dynamic",
    "eager",
    "earnest",
    "easy-going",
    "efficient",
    "egocentric",
    "egotistical",
    "elfin",
    "emotional",
    "empathetic",
    "energetic",
    "enterprising",
    "enthusiastic",
    "envious",
    "evasive",
    "even-tempered",
    "evil",
    "exacting",
    "excellent",
    "excitable",
    "experienced",
    "fabulous",
    "facetious",
    "faithful",
    "fanatical",
    "fastidious",
    "fawning",
    "fearless",
    "ferocious",
    "fervent",
    "fickle",
    "fiery",
    "finicky",
    "flabby",
    "flaky",
    "flashy",
    "foolish",
    "forgetful",
    "frank",
    "friendly",
    "frivolous",
    "funny",
    "fussy",
    "generous",
    "gentle",
    "gloomy",
    "gluttonous",
    "good",
    "gossipy",
    "grave",
    "great",
    "greedy",
    "gregarious",
    "groggy",
    "grouchy",
    "grumpy",
    "guarded",
    "gullible",
    "hateful",
    "hearty",
    "hedonistic",
    "helpful",
    "hesitant",
    "honest",
    "hopeful",
    "hostile",
    "hot-headed",
    "humorless",
    "humorous",
    "hypercritical",
    "hypocritical",
    "hysterical",
    "idiotic",
    "idle",
    "ignorant",
    "illogical",
    "imaginative",
    "immature",
    "immodest",
    "impatient",
    "imperturbable",
    "impetuous",
    "impractical",
    "impressionable",
    "impressive",
    "impulsive",
    "inactive",
    "incisive",
    "incompetent",
    "inconsiderate",
    "inconsistent",
    "indecisive",
    "indefatigable",
    "independent",
    "indiscreet",
    "indolent",
    "industrious",
    "inexperienced",
    "inflexible",
    "insensitive",
    "inspiring",
    "intelligent",
    "interesting",
    "intolerant",
    "intuitive",
    "inventive",
    "irascible",
    "irrational",
    "irresponsible",
    "irritable",
    "irritating",
    "jealous",
    "jocular",
    "jovial",
    "joyful",
    "joyous",
    "judgemental",
    "judgmental",
    "keen",
    "kind",
    "lackadaisical",
    "lame",
    "lazy",
    "lean",
    "leery",
    "lethargic",
    "level-headed",
    "listless",
    "lithe",
    "lively",
    "local",
    "logical",
    "long-winded",
    "lovable",
    "love-lorn",
    "lovely",
    "loving",
    "loyal",
    "lucky",
    "machiavellian",
    "malevolent",
    "malicious",
    "manipulative",
    "maternal",
    "mature",
    "mean",
    "meddlesome",
    "melodramatic",
    "mercurial",
    "methodical",
    "meticulous",
    "mild",
    "miserable",
    "modest",
    "moody",
    "morbid",
    "moronic",
    "morose",
    "motivated",
    "musical",
    "naive",
    "naïve",
    "narcissistic",
    "narrow-minded",
    "nasty",
    "natural",
    "naughty",
    "neat",
    "negative",
    "nervous",
    "neurotic",
    "nice",
    "nihilistic",
    "noisy",
    "normal",
    "nosy",
    "numb",
    "obliging",
    "obnoxious",
    "obsessive",
    "old-fashioned",
    "one-sided",
    "optimistic",
    "orderly",
    "ostentatious",
    "outgoing",
    "outspoken",
    "paranoid",
    "passionate",
    "passive",
    "paternal",
    "paternalistic",
    "patient",
    "patronizing",
    "peaceful",
    "peevish",
    "pensive",
    "persevering",
    "persnickety",
    "pessimistic",
    "petty",
    "petulant",
    "pharisaical",
    "philandering",
    "picky",
    "pig-headed",
    "plain",
    "plain-speaking",
    "playful",
    "pleasant",
    "plucky",
    "polite",
    "pompous",
    "popular",
    "posessive",
    "positive",
    "possessive",
    "powerful",
    "practical",
    "predatory",
    "prejudiced",
    "pretentious",
    "pretty",
    "proficient",
    "proud",
    "provocative",
    "prudent",
    "punctual",
    "quarrelsome",
    "querulous",
    "quick",
    "quick-tempered",
    "quiet",
    "rational",
    "realistic",
    "reassuring",
    "reckless",
    "reclusive",
    "reliable",
    "reluctant",
    "resentful",
    "reserved",
    "resigned",
    "resourceful",
    "respected",
    "respectful",
    "responsible",
    "restless",
    "revered",
    "ridiculous",
    "romantic",
    "rotten",
    "rude",
    "sad",
    "sadistic",
    "sassy",
    "saucy",
    "scheming",
    "secretive",
    "sedate",
    "self-assured",
    "selfish",
    "sensible",
    "sensitive",
    "sentimental",
    "serene",
    "serious",
    "sharp",
    "shifty",
    "short-tempered",
    "shrewd",
    "shy",
    "silly",
    "sincere",
    "sleazy",
    "sleepy",
    "slight",
    "sloppy",
    "slothful",
    "slovenly",
    "slow",
    "smart",
    "snazzy",
    "sneaky",
    "sneering",
    "snobby",
    "sober",
    "sociable",
    "somber",
    "sophisticated",
    "soulful",
    "soulless",
    "sour",
    "spirited",
    "spiteful",
    "spoiled",
    "stable",
    "staid",
    "steady",
    "stern",
    "stingy",
    "stoic",
    "striking",
    "strong",
    "stupid",
    "sturdy",
    "subtle",
    "sulky",
    "sullen",
    "supercilious",
    "superficial",
    "surly",
    "suspicious",
    "sweet",
    "sympathetic",
    "tactful",
    "tactless",
    "talented",
    "testy",
    "thinking",
    "thoughtful",
    "thoughtless",
    "tidy",
    "timid",
    "tired",
    "tolerant",
    "touchy",
    "tranquil",
    "ugly",
    "unaffected",
    "unbalanced",
    "uncertain",
    "uncooperative",
    "undependable",
    "underhanded",
    "understanding",
    "unemotional",
    "unforgiving",
    "unfriendly",
    "unguarded",
    "unhelpful",
    "unimaginative",
    "unlucky",
    "unmotivated",
    "unpleasant",
    "unpopular",
    "unpredictable",
    "unreliable",
    "unsophisticated",
    "unstable",
    "unsure",
    "unthinking",
    "untidy",
    "untrustworthy",
    "unwilling",
    "vacillating",
    "vacuous",
    "vague",
    "vain",
    "venal",
    "versatile",
    "vigilant",
    "vindictive",
    "violent",
    "volcanic",
    "vulgar",
    "vulnerable",
    "warm",
    "warmhearted",
    "wary",
    "watchful",
    "weak",
    "weak-willed",
    "well-behaved",
    "well-developed",
    "well-intentioned",
    "well-respected",
    "well-rounded",
    "willing",
    "wise",
    "witty",
    "wonderful",
    "zealous",
];
//# sourceMappingURL=sass.js.map