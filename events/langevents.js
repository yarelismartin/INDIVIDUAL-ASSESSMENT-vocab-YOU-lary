import { getVocabByLang, getVocab } from '../api/vocabData';
import showVocabs from '../pages/vocabs';
import clearDom from '../utils/clearDom';

const langEvents = (uid) => {
  document.querySelector('#filter_navigation').addEventListener('click', async (e) => {
    if (e.target.id.includes('filter-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('hi', firebaseKey);
      await getVocabByLang(uid, firebaseKey);
      const vocab = await getVocabByLang(uid, firebaseKey);
      showVocabs(vocab, uid);
      console.warn('getVocabByLang', getVocabByLang(firebaseKey));
    }
    if (e.target.id.includes('allVocabs')) {
      clearDom();
      getVocab(uid).then((vocab) => showVocabs(vocab, uid));
    }
  });
};
export default langEvents;
