const toggleFilter = (show) => {
  const langNavBar = document.getElementById('filter_navigation');
  const filterCard = document.getElementById('order-filter');

  if (show) {
    langNavBar.style.display = 'block';
    filterCard.style.display = 'block';
  } else {
    langNavBar.style.display = 'none';
    filterCard.style.display = 'none';
  }
};

export default toggleFilter;
