import { deleteVocab, getVocab } from '../api/vocabData';
import showVocabs from '../pages/vocabs';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        console.warn('delete-btn clicked', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(uid).then((vocab) => showVocabs(vocab, uid));
        });
      }
    }

    // if (e.target.id.includes('view-vocab-btn')) {

    // }
    // if (e.target.id.includes('edit-vocab-btn')) {

    // }
  });
};

export default domEvents;
