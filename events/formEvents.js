const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      console.warn('clicked submit new vocab button', e.target.id);
      // eslint-disable-next-line no-undef
      payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageID: document.querySelector('#language_id_name').value,
        uid
        // time_submitted: ,
      };
    }
  });
};

export default formEvents;
