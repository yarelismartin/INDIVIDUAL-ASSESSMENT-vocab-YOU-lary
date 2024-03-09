import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj) => {
  clearDom();
  const domeString = `
  <form id="submit-lang" style="margin: 30px; font-weight: 400;
  ">
    <div class="mb-3">
      <label class="form-label">Language</label>
      <input type="text" class="form-control" id="lang_name" aria-describedby="vocabLang" value="${obj.language_name || ''}" required>
      <button type="submit" class="btn btn-primary" style="margin-top: 15px;">Submit Language</button>
    </div>
    </form>`;
  renderToDOM('#form-container', domeString);
};

export default addLanguageForm;
