const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      console.warn('clicked submit new vocab button', e.target.id);
    }
  });
};

export default formEvents;
