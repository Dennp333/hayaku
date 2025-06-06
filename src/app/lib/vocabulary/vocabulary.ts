import { Word } from '../../types/Word';
import { WordType } from '../../types/constants';

import { l1Vocab } from './l1Vocab';
import { l2Vocab } from './l2Vocab';
import { l3Vocab } from './l3Vocab';
import { l4Vocab } from './l4Vocab';
import { l5Vocab } from './l5Vocab';
import { l6Vocab } from './l6Vocab';
import { l7Vocab } from './l7Vocab';
import { l8Vocab } from './l8Vocab';
import { l9Vocab } from './l9Vocab';
import { l10Vocab } from './l10Vocab';
import { l11Vocab } from './l11Vocab';
import { l12Vocab } from './l12Vocab';
import { l13Vocab } from './l13Vocab';
import { l14Vocab } from './l14Vocab';
import { l15Vocab } from './l15Vocab';
import { l16Vocab } from './l16Vocab';
import { l17Vocab } from './l17Vocab';
import { l18Vocab } from './l18Vocab';
import { l19Vocab } from './l19Vocab';
import { l20Vocab } from './l20Vocab';
import { l21Vocab } from './l21Vocab';
import { l22Vocab } from './l22Vocab';
import { l23Vocab } from './l23Vocab';

const allVocab = [l1Vocab, l2Vocab, l3Vocab, l4Vocab, l5Vocab, l6Vocab, l7Vocab, l8Vocab, l9Vocab, l10Vocab, l11Vocab, l12Vocab, l13Vocab, l14Vocab, l15Vocab, l16Vocab, l17Vocab, l18Vocab, l19Vocab, l20Vocab, l21Vocab, l22Vocab, l23Vocab];

export function getVocabulary(genkiLessons: Set<number>, wordTypes: Set<WordType>): Word[] {
  return Array.from(genkiLessons).flatMap(lesson => 
    Array.from(wordTypes).flatMap(type => allVocab[lesson - 1][type])
  )
}