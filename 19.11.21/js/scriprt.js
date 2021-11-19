function namae(){
    let name = prompt("Введите ваше имя:")
    document.getElementById('name').textContent = 'Имя: ' + name
    let surname = prompt("Введите вашу фамилию:")
    document.getElementById('surname').textContent = 'Фамилия: ' + surname
    let age = prompt("Введите ваш возраст:")
    document.getElementById('age').textContent = 'Возраст: ' + age
    let special = prompt("Введите вашу специальность:")
    document.getElementById('special').textContent = 'Специальность: ' + special
    let date = prompt("Введите вашу дату рождения:")
    document.getElementById('date').textContent = 'Дата рождения: ' + date
    let about = prompt("Введите информацию о себе:")
    document.getElementById('about_me').textContent = 'Обо мне: ' + about
}
