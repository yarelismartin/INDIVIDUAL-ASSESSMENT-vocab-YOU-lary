import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main_navigation"></div>
  <div id="filter_navigation"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="store">
    <div id="view"></div>   
  </div>
  `;
  renderToDOM('#app', domString);
};

export default domBuilder;
