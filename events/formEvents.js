import { createLanguage, updateLanguage } from '../api/languageData';
import { getVocab, updateVocab, createVocab } from '../api/vocabData';
import showVocabs from '../pages/vocabs';
import toggleFilter from './filterToggle';

const formEvents = (uid, displayName) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      console.warn('clicked submit new vocab button', e.target.id);
      // eslint-disable-next-line no-undef
      const payload = {
        title: document.querySelector('#title').value,
        languageID: document.querySelector('#language_id_name').value,
        definition: document.querySelector('#definition').value,
        is_public: document.querySelector('#is_public').checked,
        time_submitted: new Date().toISOString().slice(0, 19).replace('T', ' '),
        uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name, created_by: displayName };

        updateVocab(patchPayload).then(() => {
          getVocab(uid).then((vocab) => showVocabs(vocab, uid));
        });
      });
      toggleFilter(true);
    }
    if (e.target.id.includes('submit-lang')) {
      console.warn('clicked submit new lang button', e.target.id);
      // eslint-disable-next-line no-undef
      const payload = {
        language_name: document.querySelector('#lang_name').value,
        uid
      };
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLanguage(patchPayload).then(() => {
          getVocab(uid).then((vocab) => showVocabs(vocab, uid));
        });
      });
      toggleFilter(true);
    }
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        languageID: document.querySelector('#language_id_name').value,
        definition: document.querySelector('#definition').value,
        is_public: document.querySelector('#is_public').checked,
        time_submitted: new Date().toISOString().slice(0, 19).replace('T', ' '),
        firebaseKey,
        uid
      };
      updateVocab(payload).then(() => {
        console.warn(payload);
        getVocab(uid).then((vocab) => showVocabs(vocab, uid));
      });
    }
  });
};

export default formEvents;
