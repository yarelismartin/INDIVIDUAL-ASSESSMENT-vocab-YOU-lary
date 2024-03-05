import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">LOGO</span>
      <div id:"create_vocab_div">
        <button id="create_vocab_btn" class="btn btn-outline-success me-2" type="button">Creat Entry</button>
      </div>
      <div id="logout_btn"></div>
    </div>
  </nav>`;
  renderToDOM('#main_navigation', domString);
};

export default navBar;
