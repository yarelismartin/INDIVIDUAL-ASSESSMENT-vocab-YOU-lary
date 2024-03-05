import addVocabForm from '../components/forms/addVocabForm';

const navEvents = () => {
  document.querySelector('#main_navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create_vocab_btn')) {
      addVocabForm();
    }
  });
};

export default navEvents;
