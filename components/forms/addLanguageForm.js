import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj) => {
  clearDom();
  const domeString = `
  <form id="submit-lang">
    <div class="mb-3">
      <label class="form-label">Language</label>
      <input type="text" class="form-control" id="lang_name" aria-describedby="vocabLang" value="${obj.language_name || ''}" required>
      <button type="submit" class="btn btn-primary">Submit Language</button>
    </div>
    </form>`;
  renderToDOM('#form-container', domeString);
};

export default addLanguageForm;
