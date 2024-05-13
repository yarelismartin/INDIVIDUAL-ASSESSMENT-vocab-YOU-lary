import { getVocabByLang } from '../api/vocabData';
import showVocabs from '../pages/vocabs';

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
  });
};
export default langEvents;
