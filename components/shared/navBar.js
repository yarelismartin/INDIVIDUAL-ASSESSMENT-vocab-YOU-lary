import renderToDOM from '../../utils/renderToDom';
import logo from '../images/you-lary-logo.jpg';

const navBar = () => {
  const domString = `<nav class="navbar bg-body-tertiary">
    <div class="container-fluid" style="background-color: #F5F5F1;">
      <a href="#" id="logo-see-all">
        <span class="navbar-brand mb-0 h1">
          <img src="${logo}" alt="" width="400" height="80">
        </span>
      </a>
      <div id="create_div">
        <button id="create_vocab_btn" class="btn btn-outline-success me-2" type="button">Create Entry</button>
        <button id="create_lang_btn" class="btn btn-outline-success me-2" type="button">Create Language</button>
      </div>
      <div id="search-div">
        <input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button id="search-btn" class="btn btn-outline-success" type="submit" style=" margin-right:10px;">Search</button>
        <div id="logout_btn"></div>
      </div>
    </div>
  </nav>`;
  renderToDOM('#main_navigation', domString);
};

export default navBar;
