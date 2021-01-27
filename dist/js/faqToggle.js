function toggleAns(id){
  let faqItem = document.getElementById(`${id}-toggle`);
  let ansItem = document.getElementById(`${id}-ans`);

  if(ansItem.classList.contains('is-visible')){
    faqItem.innerHTML = '+';
    ansItem.classList.remove('is-visible');
  }else{
    faqItem.innerHTML = '-';
    ansItem.classList.add('is-visible');
  }
}