import { getVocab } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import showVocabs from '../pages/vocabs';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';

const startApp = (uid) => {
  domBuilder();
  domEvents(uid);
  navBar();
  logoutButton();
  navEvents();
  getVocab(uid).then(showVocabs);
};

export default startApp;
