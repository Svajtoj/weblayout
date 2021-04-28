document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.select-section__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    position: 'bottom',
    placeholder: true,
    placeholderValue: 'Материал',
    itemSelectText: ' ',
  });

});
