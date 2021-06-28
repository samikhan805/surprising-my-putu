alert('The system is developed by me for surprising my lokkhi adorini Putu. I love you Putuni 🥰. লক্ষি আমার 🥰🥰🥰')

var main_cont = document.querySelector('.main-cont')
var main_cont_btn = document.querySelector('.main-cont a')
var container = document.querySelector('.container')
var input = document.querySelector('.input')
var error_cont = document.querySelector('.error-cont')
var err_btn = document.querySelector('.error-cont a')

var submit = document.querySelector('.btn')

var password = '$putuputu_love@sami&ani%'

function main() {
  if(input.value == password) {
    container.classList.toggle('active')
    main_cont.classList.toggle('active')
  }
  else {
    container.classList.toggle('active')
    error_cont.classList.toggle('active')
    input.value = ''
  }
}

submit.addEventListener('click', function() {
  main()
})

main_cont_btn.addEventListener('click', function() {
  main()
})

err_btn.addEventListener('click', function() {
  main()
})