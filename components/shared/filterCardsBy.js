import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const filterCardsBy = () => {
  // Render the filter bar
  clearDom();
  const domString = `
      <div class="dropdown-center" style="margin: 10px; display: flex; flex-direction: row;">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Filter By
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" id="alphabetically">Alphabetically</a></li>
          <li><a class="dropdown-item" href="#" id="newest">Newest</a></li>
          <li><a class="dropdown-item" href="#" id="oldest">Oldest</a></li>
        </ul>
      </div>`;
  renderToDOM('#order-filter', domString);
};

export default filterCardsBy;
