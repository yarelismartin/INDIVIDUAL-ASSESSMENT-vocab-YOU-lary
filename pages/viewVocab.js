import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (item) => {
  clearDom();

  const domString = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 id="vocab_title" class="card-title">${item.title}</h5>
      <h5 id="vocab_lang" class="card-title">${item.langObject.language_name}</h5>
      <p id="vocab_def"class="card-text">${item.definition}</p>
      <p id="date_created"class="card-text">${item.time_submitted}</p>
    </div>
    <div id="card-btns">
    <i id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-info btn-radius" style="background-color:#268BD2"><span id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit"></span></i>
    <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger btn-radius" style="background-color:#CB4B16"><span id="delete-vocab-btn--${item.firebaseKey}" class="fas fa-trash-alt"></span></i>
    </div>
  </div>`;

  renderToDOM('#view', domString);
};

export default viewVocab;
