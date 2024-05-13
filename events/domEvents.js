import {
  copyEntry, deleteVocab, getSingleVocab, getVocab
} from '../api/vocabData';
import showVocabs from '../pages/vocabs';
import addVocabForm from '../components/forms/addVocabForm';
import { getVocabDetails } from '../api/mergedData';
import viewVocab from '../pages/viewVocab';
import renderFilterNavigation from '../components/shared/langNavBar';
import toggleFilter from './filterToggle';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        console.warn('delete-btn clicked', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(uid).then((vocab) => {
            showVocabs(vocab, uid);
            renderFilterNavigation(uid);
            toggleFilter(true);
          });
        });
      }
    }

    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getVocabDetails(firebaseKey).then((vocabLangObject) => {
        console.warn(vocabLangObject);
        viewVocab(vocabLangObject);
        toggleFilter(true);
      });
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      console.warn('edit-btn clicked', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj, uid));
    }

    if (e.target.id.includes('add-to-entries')) {
      console.warn('add-to-entries clicked', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      copyEntry(firebaseKey, uid).then(() => {
        getVocab(uid).then((vocab) => {
          showVocabs(vocab, uid);
          renderFilterNavigation(uid);
          toggleFilter(true);
        });
      });
    }
  });
};

export default domEvents;
