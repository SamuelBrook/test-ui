const toggleMenu = (() => {
  // Toggle the drop down menu when dropdown button clicked
  const button = document.querySelector('.dropbtn');
  button.addEventListener('click', () => {
    document.getElementById('myDropdown').classList.toggle('show');
  });

  // Close dropdown menu if user clicks outside of dropdown button
  window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
      const dropDowns = document.querySelectorAll('.dropdown-content');
      dropDowns.forEach((dropDown) => {
        if (dropDown.classList.contains('show')) {
          dropDown.classList.remove('show');
        }
      });
    }
  });
});

export { toggleMenu };
