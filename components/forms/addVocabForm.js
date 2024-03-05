import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" value="${obj.title || ''}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Definition</label>
      <textarea type="text" class="form-control" id="definition">${obj.definition || ''}</textarea>
    </div>
    <div class="form-group" id="select-language">
    <button type="submit" id="submit-vocab" class="btn btn-primary">${obj.firebaseKey ? 'Update Vocabulary' : 'Submit Vocabulary'}</button>
  </form>
  `;
  renderToDOM('#form-container', domString);
};

export default addVocabForm;
