import { searchStore } from '../api/mergedData';
import addVocabForm from '../components/forms/addVocabForm';
import showVocabs from '../pages/vocabs';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const navEvents = (uid) => {
  document.querySelector('#main_navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create_vocab_btn')) {
      addVocabForm({}, uid);
    }
  });
  const selectSearch = document.querySelector('#search');
  selectSearch.addEventListener('keyup', (e) => {
    const searchValue = selectSearch.value.toLowerCase();
    console.warn(searchValue);

    if (e.keyCode === 13) {
      selectSearch.value = '';
      searchStore(uid, searchValue).then(({ vocabulary }) => {
        if (vocabulary.length > 0) {
          console.warn(vocabulary);
          showVocabs(vocabulary, uid);
        } else {
          clearDom();
          const domString = '<h1> No Results</h1>';
          renderToDOM('#store', domString);
        }
      });
    }
  });
};

export default navEvents;
