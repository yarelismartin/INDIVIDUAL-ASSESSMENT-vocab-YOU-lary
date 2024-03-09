import { getVocab } from '../api/vocabData';
import showVocabs from '../pages/vocabs';

const orderFilterCardsBtn = (uid) => {
  document.querySelector('#order-filter').addEventListener('click', async (e) => {
    const ordered = await getVocab(uid);
    if (e.target.id.includes('alphabetically')) {
      const orderedAlpha = ordered.sort((a, b) => a.title.localeCompare(b.title));
      showVocabs(orderedAlpha, uid);
    } else if (e.target.id.includes('newest')) {
      const orderNewest = ordered.sort((a, b) => new Date(b.time_submitted) - new Date(a.time_submitted));
      console.warn(orderNewest);
      showVocabs(orderNewest, uid);
    } else if (e.target.id.includes('oldest')) {
      const orderNewest = ordered.sort((a, b) => new Date(a.time_submitted) - new Date(b.time_submitted));
      console.warn(orderNewest);
      showVocabs(orderNewest, uid);
    } else {
      console.warn('hi');
    }
  });
};

export default orderFilterCardsBtn;
