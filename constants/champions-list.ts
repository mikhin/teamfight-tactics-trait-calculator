import rawChampions from "../data/raw-champions.json";
import {Champion} from "../types";

export const championsByTrait = rawChampions.reduce((acc, champion) => {
  champion.traits.forEach((trait) => {
    if (!acc[trait]) {
      acc[trait] = []
    }

    acc[trait].push(champion)
  })

  return acc
}, {} as Record<string, Champion[]>);
