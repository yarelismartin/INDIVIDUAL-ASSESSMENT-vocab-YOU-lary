import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import { getLanguage } from '../api/languageData';

const emptyVocabs = () => {
  clearDom();
  const domString = '<h1>No Vocabs</h1>';
  renderToDOM('#store', domString);
};

const showVocabs = async (array, uid) => {
  clearDom();
  if (array.length === 0) {
    emptyVocabs();
  } else {
    let domString = '';
    const languages = await getLanguage(uid);

    array.forEach((item) => {
      const singleLanguage = languages.find((lang) => lang.firebaseKey === item.languageID);
      domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 id="vocab_title" class="card-title">${item.title}</h5>
      <h5 id="vocab_lang" class="card-title">Language: ${singleLanguage.language_name}</h5>
      <p id="vocab_def"class="card-text">${item.definition}</p>
      <p id="date_created"class="card-text">${item.time_submitted}</p>
    </div>
    <div id="card-btns">
      <i class="btn btn-success btn-radius" id="view-vocab-btn--${item.firebaseKey}" style="background-color:#2AA198"><span id="view-vocab-btn--${item.firebaseKey}" class="fas fa-eye"></span></i>
      <i id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-info btn-radius" style="background-color:#268BD2"><span id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit"></span></i>
      <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger btn-radius" style="background-color:#CB4B16"><span id="delete-vocab-btn--${item.firebaseKey}" class="fas fa-trash-alt"></span></i>
    </div>
    </div>
    `;
    });
    renderToDOM('#store', domString);
  }
};

export default showVocabs;
