import type { IList } from "@models/tenthings/list";
import some from "lodash/some";
import orderBy from "lodash/orderBy";
import uniqBy from "lodash/uniqBy";

/** Folds `mergeList` into `originalList`: answers are united (the original's blurbs win), stats are added up and votes deduplicated. */
export const mergeLists = (originalList: IList, mergeList: IList): IList => {
  const valuesToMerge = mergeList.values.filter(
    (value) => !some(originalList.values, (listValue) => listValue.value == value.value),
  );
  const newValues = [
    ...originalList.values.map((originalListValue) => {
      const mergeListValue = mergeList.values.find((valueToMerge) => valueToMerge.value == originalListValue.value);
      return mergeListValue
        ? {
            ...mergeListValue,
            ...originalListValue,
            blurb: originalListValue.blurb || mergeListValue.blurb,
          }
        : originalListValue;
    }),
    ...valuesToMerge,
  ];
  const newVotes = uniqBy(orderBy([...originalList.votes, ...mergeList.votes], ["modifyDate"], ["desc"]), "voter");
  const mergedList = {
    ...originalList,
    description: originalList.description || mergeList.description,
    values: newValues,
    plays: (originalList.plays ?? 0) + (mergeList.plays ?? 0),
    skips: (originalList.skips ?? 0) + (mergeList.skips ?? 0),
    hints: (originalList.hints ?? 0) + (mergeList.hints ?? 0),
    bans: (originalList.bans ?? 0) + (mergeList.bans ?? 0),
    modifyDate: new Date(),
    votes: newVotes,
  };
  return mergedList;
};
