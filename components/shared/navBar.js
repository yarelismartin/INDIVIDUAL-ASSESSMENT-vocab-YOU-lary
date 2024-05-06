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
      <button id="community" class="btn btn-outline-success me-2" type="button">Community</button>

<div id="search-div">
      <div class="search-box">
        <input id="search" class="search-text" type="text" placeholder="Search Lengo">
        <a href="#" id="search-btn" class="search-btn">
          <i class="fas fa-search"></i>
        </a>
        
      </div>
      <div id="logout_btn"></div>
</div>

    </div>
  </nav>`;
  renderToDOM('#main_navigation', domString);
};

export default navBar;
