document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const deleteButton = document.getElementById('delete-button');

    // Функция для получения данных
    async function fetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            displayUsers(users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    // Функция для отображения пользователей
    function displayUsers(users) {
        users.forEach(user => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = user.id;

            const label = document.createElement('label');
            label.textContent = user.name;

            li.appendChild(checkbox);
            li.appendChild(label);
            userList.appendChild(li);
        });
    }

    // Обработчик нажатия на кнопку Delete
    deleteButton.addEventListener('click', () => {
        const checkboxes = userList.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            checkbox.parentElement.remove();
        });
    });

    // Получаем и отображаем пользователей
    fetchUsers();
});
