import getVocab from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import showVocabs from '../pages/vocabs';

const startApp = (uid) => {
  domBuilder();
  navBar();
  logoutButton();
  getVocab(uid).then(showVocabs);
};

export default startApp;
