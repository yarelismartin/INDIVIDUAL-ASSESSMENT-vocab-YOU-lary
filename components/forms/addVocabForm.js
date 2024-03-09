import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import { getLanguage } from '../../api/languageData';

const selectLanguage = (uid, languageID) => {
  let domString = `
  <label for="language">Select an Language</label>
    <select class="form-control" id="language_id_name">
    <option value="">Select an Language</option>
  `;
  getLanguage(uid).then((langArray) => {
    langArray.forEach((language) => {
      domString += `
        <option 
          value="${language.firebaseKey}" 
          ${languageID === language.firebaseKey ? 'selected' : ''}>
            ${language.language_name} 
        </option>`;
    });
    domString += '</select>';
    renderToDOM('#select-language', domString);
  });
};

const addVocabForm = (obj = {}, uid) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" style="margin: 30px; font-weight: 400;
  ">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" value="${obj.title || ''}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Definition</label>
      <input type="text" class="form-control" id="definition" value="${obj.definition || ''}">
    </div>
    <div class="form-group" id="select-language"></div>
    <button type="submit" class="btn btn-primary" style="margin-top: 15px;">${obj.firebaseKey ? 'Update Vocabulary' : 'Submit Vocabulary'}</button>
  </form>
  `;
  renderToDOM('#form-container', domString);
  selectLanguage(uid, `${obj.languageID || ''}`);
};

export default addVocabForm;
