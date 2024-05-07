import client from '../utils/client';
import {
  createLanguage, getLanguage, getSingleLanguage, updateLanguage
} from './languageData';

const endpoint = client.databaseURL;

const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getAllPublicVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const allVocab = Object.values(data);
        const filteredVocab = allVocab.filter((vocabulary) => vocabulary.uid === uid || vocabulary.is_public === true);
        resolve(filteredVocab);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve) // will resolve a single object
    .catch(reject);
});

const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getVocabByLang = (uid, languageID) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const langVocab = Object.values(data).filter((obj) => obj.languageID === languageID);
      resolve(langVocab);
    })
    .catch(reject);
});

const copyEntry = async (vocabFirebaseKey, uid) => {
  const copiedPayload = await getSingleVocab(vocabFirebaseKey);
  console.warn(copiedPayload);
  copiedPayload.time_submitted = new Date().toISOString().slice(0, 19).replace('T', ' ');
  copiedPayload.is_public = 'false';
  copiedPayload.uid = uid;

  const vocabObj = await createVocab(copiedPayload);
  const vocabPatchPayload = { firebaseKey: vocabObj.name };
  await updateVocab(vocabPatchPayload);

  // Get the user's language entries
  const userLanguages = await getLanguage(uid);
  const copiedLangEntry = await getSingleLanguage(copiedPayload.languageID);

  // Find the language entry with the matching language_name
  const matchingLang = userLanguages.find((lang) => lang.language_name === copiedLangEntry.language_name);

  if (matchingLang) {
  // If a matching language entry exists, update the copied entry to use the matching language entry's firebaseKey
    await updateVocab({ firebaseKey: vocabObj.name, languageID: matchingLang.firebaseKey });
  } else {
  // If no matching language entry exists, create a new language entry for the user
    const langPayload = { language_name: copiedLangEntry.language_name, uid };
    const langObj = await createLanguage(langPayload);
    const langPatchPayload = { firebaseKey: langObj.name };
    await updateLanguage(langPatchPayload);
    await updateVocab({ firebaseKey: vocabObj.name, languageID: langObj.name });
  }
};
export {
  getVocab, getSingleVocab, deleteVocab, updateVocab, createVocab, getVocabByLang, getAllPublicVocab, copyEntry
};
