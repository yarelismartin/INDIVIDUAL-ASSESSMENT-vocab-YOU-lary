import renderToDOM from '../utils/renderToDom';

const emptyVocabs = () => {
  const domString = '<h1>No Vocabs</h1>';
  renderToDOM('#store', domString);
};

const showVocabs = (array) => {
  // clearDom();
  if (array <= 0) {
    emptyVocabs();
  } else {
    let domString = '';
    array.forEach((item) => {
      domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 id="vocab_title" class="card-title">${item.title}</h5>
      <h5 id="vocab_lang" class="card-title">${item.language_name}</h5>
      <p id="vocab_deff"class="card-text">${item.definition}</p>
      <p id="date_created"class="card-text">${item.time_submitted}</p>
    </div>
    <div class="card-body">
    <i class="btn btn-success" id="view-vocab-btn--${item.firebaseKey}"><span id="view-vocab-btn--${item.firebaseKey}" class="fas fa-eye"></span></i>
    <i id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-info"><span id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit"></span></i>
    <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger"><span id="delete-vocab-btn--${item.firebaseKey}" class="fas fa-trash-alt"></span></i>
    </div>
  </div>
    `;
    });
    renderToDOM('#store', domString);
  }
};

export default showVocabs;

// import renderToDOM from '../utils/renderToDom';

// const emptyVocabs = () => {
//   const domString = '<h1>No Vocabs</h1>';
//   renderToDOM('#store', domString);
// };

// const showVocabs = (array) => {
//   // clearDom();
//   if (array <= 0) {
//     emptyVocabs();
//   } else {
//     let domString = '';
//     array.forEach((item) => {
//       domString += `
//     <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 id="vocab_title" class="card-title">${item.title}</h5>
//       <h5 id="vocab_lang" class="card-title">${item.language_name}</h5>
//       <p id="vocab_deff"class="card-text">${item.definition}</p>
//       <p id="date_created"class="card-text">${item.time_submitted}</p>
//     </div>
//     <div class="card-body">
//     <i class="btn btn-success" id="view-vocab-btn--${item.firebaseKey}"><span id="view-vocab-btn--${item.firebaseKey}" class="fas fa-eye"></span></i>
//     <i id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-info"><span id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit"></span></i>
//     <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger"><span id="delete-vocab-btn--${item.firebaseKey}" class="fas fa-trash-alt"></span></i>
//     </div>
//   </div>
//     `;
//     });
//     renderToDOM('#store', domString);
//   }
// };

// export default showVocabs;
