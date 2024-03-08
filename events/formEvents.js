import { getVocab, updateVocab, createVocab } from '../api/vocabData';
import showVocabs from '../pages/vocabs';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      console.warn('clicked submit new vocab button', e.target.id);
      // eslint-disable-next-line no-undef
      const payload = {
        title: document.querySelector('#title').value,
        languageID: document.querySelector('#language_id_name').value,
        definition: document.querySelector('#definition').value,
        time_submitted: new Date().toISOString().slice(0, 19).replace('T', ' '),
        uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(uid).then((vocab) => showVocabs(vocab, uid));
        });
      });
    }
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        languageID: document.querySelector('#language_id_name').value,
        definition: document.querySelector('#definition').value,
        time_submitted: new Date().toISOString().slice(0, 19).replace('T', ' '),
        firebaseKey,
        uid
      };
      updateVocab(payload).then(() => {
        getVocab(uid).then((vocab) => showVocabs(vocab, uid));
      });
    }
  });
};

export default formEvents;
