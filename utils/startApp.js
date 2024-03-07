import { getVocab } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import showVocabs from '../pages/vocabs';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';

const startApp = (uid) => {
  domBuilder();
  domEvents(uid);
  formEvents();
  navBar();
  logoutButton();
  navEvents();
  getVocab(uid).then((vocab) => showVocabs(vocab, uid));
};

export default startApp;
