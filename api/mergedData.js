import { getSingleVocab, getVocab } from './vocabData';
import { getLanguage, getSingleLanguage } from './languageData';

const getVocabDetails = async (vocabFirebaseKey) => {
  const vocabObject = await getSingleVocab(vocabFirebaseKey);
  const langObject = await getSingleLanguage(vocabObject.languageID);

  return { ...vocabObject, langObject };
};

const getLanguageforfilter = async (uid) => {
  const vocabObj = await getVocab(uid);
  const langObj = await getLanguage(uid);

  const langMap = {};

  // Iterate over each language object in langObj
  langObj.forEach((language) => {
    // Map the language's firebaseKey to its language_name in langMap
    langMap[language.firebaseKey] = {
      language_name: language.language_name,
      firebaseKey: language.firebaseKey
    };
  });
  // Extract unique language names from vocabObj using langMap
  const languages = [...new Set(vocabObj.map((entry) => langMap[entry.languageID]))];
  // Return the array of unique language names
  return languages;
};

const searchStore = async (uid, searchValue) => {
  const allVocab = await getVocab(uid);
  const filterVocab = await allVocab.filter((vocabulary) => (
    vocabulary.title.toLowerCase().includes(searchValue)
  || vocabulary.definition.toLowerCase().includes(searchValue)
  || vocabulary.time_submitted.toLowerCase().includes(searchValue)
  // || getVocabByLang(uid, vocabulary.languageID).toLowerCase().includes(searchValue)
  ));

  return { vocabulary: filterVocab };
};
export { getVocabDetails, getLanguageforfilter, searchStore };
