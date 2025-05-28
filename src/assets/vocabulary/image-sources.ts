import angry_svg from "./images/angry.svg";
import cold_svg from "./images/cold.svg";
import good_svg from "./images/good.svg";
import hot_svg from "./images/hot.svg";
import hungry_svg from "./images/hungry.svg";
import sad_svg from "./images/sad.svg";
import sick_svg from "./images/sick.svg";
import tired_svg from "./images/tired.svg";
import type { IVocabulary_Image_Source } from "./index";

export const VOCABULARY_IMAGE_SOURCES: IVocabulary_Image_Source = {
  good: {
    file: good_svg,
  },
  tired: {
    file: tired_svg,
  },
  sad: {
    file: sad_svg,
  },
  hungry: {
    file: hungry_svg,
  },
  angry: {
    file: angry_svg,
  },
  sick: {
    file: sick_svg,
  },
  hot: {
    file: hot_svg,
  },
  cold: {
    file: cold_svg,
  },
};
