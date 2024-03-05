import { getSingleLanguage } from './languageData';
import { getSingleVocab } from './vocabData';

const getVocabLanguage = async (vocabFirebaseKey) => {
  const vocabDetails = await getSingleVocab(vocabFirebaseKey);
  const languageDetail = await getSingleLanguage
}
