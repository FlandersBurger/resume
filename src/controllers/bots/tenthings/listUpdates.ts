import i18n from "@root/i18n";

/** How many lists each section of the daily update names before summing up the rest. */
export const MAX_LISTED = 10;

type Listed = { name: string; plays?: number };

/** The most-played lists first, since players recognise those; the rest as "…and N more". */
const section = (heading: string, lists: Listed[], uiLanguage: string) => {
  const shown = [...lists].sort((a, b) => (b.plays ?? 0) - (a.plays ?? 0)).slice(0, MAX_LISTED);
  const rest = lists.length - shown.length;
  return (
    i18n(uiLanguage, heading) +
    shown.map(({ name }) => `\n- ${name}`).join("") +
    (rest > 0 ? `\n${i18n(uiLanguage, "sentences.moreLists", { count: rest })}` : "")
  );
};

/** The daily notice of new and updated lists for one group of games, or "" when there's nothing to say. */
export const listUpdateMessage = (newLists: Listed[], updatedLists: Listed[], uiLanguage: string): string => {
  const sections = [
    newLists.length ? section("sentences.newListsHeading", newLists, uiLanguage) : "",
    updatedLists.length ? section("sentences.updatedListsHeading", updatedLists, uiLanguage) : "",
  ].filter(Boolean);
  if (!sections.length) return "";
  return `${sections.join("\n\n")}\n\n<i>${i18n(uiLanguage, "sentences.listUpdatesOptOut")}</i>`;
};
