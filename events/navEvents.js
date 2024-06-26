import { searchStore } from '../api/mergedData';
import { getAllPublicVocab, getVocab } from '../api/vocabData';
import addLanguageForm from '../components/forms/addLanguageForm';
import addVocabForm from '../components/forms/addVocabForm';
// import filterCardsBy from '../components/shared/filterCardsBy';
import showVocabs from '../pages/vocabs';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import toggleFilter from './filterToggle';

const navEvents = (uid) => {
  document.querySelector('#main_navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create_vocab_btn')) {
      addVocabForm({}, uid);
      toggleFilter(false);
    }
    if (e.target.id.includes('create_lang_btn')) {
      addLanguageForm({});
      toggleFilter(false);
    }
    if (e.target.id.includes('logo-see-all')) {
      clearDom();
      console.warn('logo clicked');
      getVocab(uid).then((vocab) => showVocabs(vocab, uid));
    }
    if (e.target.id.includes('community')) {
      clearDom();
      console.warn('community clicked');
      getAllPublicVocab(uid).then((vocab) => showVocabs(vocab, uid, true));
      toggleFilter(false);
    }
    if (e.target.id.includes('allVocabs')) {
      clearDom();
      getVocab(uid).then((vocab) => showVocabs(vocab, uid));
      toggleFilter(true);
    }
  });
  // const selectSearch = document.querySelector('#search');

  // selectSearch.addEventListener('keyup', (e) => {
  //   const searchValue = selectSearch.value.toLowerCase();
  //   console.warn(searchValue);

  //   if (e.keyCode === 13) {
  //     selectSearch.value = '';
  //     searchStore(uid, searchValue).then(({ vocabulary }) => {
  //       if (vocabulary.length > 0) {
  //         console.warn(vocabulary);
  //         showVocabs(vocabulary, uid);
  //       } else {
  //         clearDom();
  //         const domString = '<h1> No Results</h1>';
  //         renderToDOM('#store', domString);
  //       }
  //     });
  //   }
  // });
  const selectSearch = document.querySelector('#search');
  const searchButton = document.querySelector('#search-btn');

  const performSearch = () => {
    const searchValue = selectSearch.value.toLowerCase();
    console.warn(searchValue);
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
  };

  selectSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  });

  searchButton.addEventListener('click', () => {
    performSearch();
  });
};

export default navEvents;
