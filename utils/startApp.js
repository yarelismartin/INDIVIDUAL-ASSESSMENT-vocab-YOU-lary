import { getVocab } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import showVocabs from '../pages/vocabs';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';
import renderFilterNavigation from '../components/shared/langNavBar';
import langEvents from '../events/langevents';

const startApp = (uid) => {
  domBuilder();
  renderFilterNavigation(uid);
  domEvents(uid);
  formEvents(uid);
  navBar();
  logoutButton();
  navEvents(uid);
  langEvents(uid);
  getVocab(uid).then((vocab) => showVocabs(vocab, uid));
};

export default startApp;
