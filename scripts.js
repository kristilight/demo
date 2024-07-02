document.getElementById('try-demo').addEventListener('click', function() {
  openModal('' +
      '<div class="login">' +
      '<h3 class="login__header">Войти в систему</h3>' +
      '<form class="form">' +
      '<div class="form__content">' +
      '<div class="form__inputs">' +
      '<input class="input" type="text" id="email" name="email" placeholder="Email/Телефон">' +
      '<input class="input" type="password" id="password" name="password" placeholder="Пароль">' +
      '</div>'+
      '<label class="checkbox-container">' +
      '<input type="checkbox">' +
      '<span class="checkbox-container__text">Запомнить пароль</span>'+
      '</label>'+
      '<p class="login__restore-text">Восстановить</p>'+
      '</div>'+
      '<div class="form__buttons">' +
      '<button class="form__btn form__btn_sign-in" type="submit">Войти</button>' +
      '<button class="form__btn form__btn_sign-up" type="button" id="register">Зарегистрироваться</button>' +
      '</div>'+
      '</form>' +
      '</div>'
  );
});

document.querySelector('.close').addEventListener('click', function() {
  closeModal();
});

function openModal(content) {
  document.getElementById('dynamic-content').innerHTML = content;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
