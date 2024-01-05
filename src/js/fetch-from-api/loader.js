export function loadingInfo() {
  const displayElement = document.querySelector('#main_section');
  if (!displayElement) {return}
  displayElement.innerHTML = '<i class="fa fa-spinner fa-spin fa-3x"></i>';
}