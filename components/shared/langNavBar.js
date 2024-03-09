import { getLanguageforfilter } from '../../api/mergedData';
import renderToDOM from '../../utils/renderToDom';

const renderFilterNavigation = async (uid) => {
  const languages = await getLanguageforfilter(uid);
  console.warn(languages);

  let filterNavString = '<hr style="margin: 0px;"><nav id="filter-nav" class="navbar navbar-light bg-light" style="background-color: #F5F5F1 !important"> <button class="btn btn-outline-primary filter-btn" id="allVocabs"> Show all Vocabs </button>';

  languages.forEach((language) => {
    filterNavString += `
      <button class="btn btn-outline-primary filter-btn" id="filter-btn--${language.firebaseKey}" data-language="${language.language_name}">${language.language_name}</button>
    `;
  });

  filterNavString += '</nav>';
  renderToDOM('#filter_navigation', filterNavString);
};

export default renderFilterNavigation;
