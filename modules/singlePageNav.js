const navItems = Array.from(document.querySelectorAll('.navItems')[0].children);
const header = document.querySelector('.books-heading');
const newBook = document.querySelector('.add-books');
const contact = document.querySelector('.contact-section');
const booksWrapper = document.querySelector('.books-list');

const navigate = (key) => {
  switch (key) {
    case 'list':
      booksWrapper.classList.remove('hide');
      header.classList.remove('hide');
      newBook.classList.add('hide');
      contact.classList.add('hide');
      break;
    case 'add-books':
      booksWrapper.classList.add('hide');
      header.classList.add('hide');
      newBook.classList.remove('hide');
      contact.classList.add('hide');
      break;
    case 'contact-section':
      booksWrapper.classList.add('hide');
      header.classList.add('hide');
      newBook.classList.add('hide');
      contact.classList.remove('hide');
      break;
    default:
      break;
  }
};

const newNav = () => {
  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      navigate(e.target.parentElement.id);
    });
  });
};

export default newNav;