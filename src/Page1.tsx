import React from 'react';

const Page1: React.FC = () => {
    return (
        <div className="page-container">
            <div className="item-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" alt="Фото 1" className="item-image" />
                <p className="item-text">Electron - це потужний фреймворк для розробки крос-платформених десктопних додатків з використанням веб-технологій, таких як HTML, CSS і JavaScript. Він дозволяє розробникам створювати додатки для Windows, macOS і Linux, використовуючи звичайні веб-технології.</p>
            </div>
            <div className="item-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Electron_20.0.3_screenshot.png/280px-Electron_20.0.3_screenshot.png" alt="Фото 2" className="item-image" />
                <p className="item-text">За допомогою Electron розробники можуть легко створювати десктопні додатки, використовуючи свої знання про веб-технології. Він забезпечує доступ до багатьох нативних функцій операційної системи, таких як доступ до файлової системи, мережі та взаємодії з системним треєм.</p>
            </div>
            <div className="item-container">
                <img src="https://img-b.udemycdn.com/course/750x422/2957546_5869.jpg" alt="Фото 3" className="item-image" />
                <p className="item-text">Electron відкриває широкі можливості для розробки десктопних додатків для різних сфер, включаючи розробку редакторів коду, медіаплеєрів, месенджерів та інших. Його гнучкість і простота використання роблять його популярним вибором серед веб-розробників, які хочуть розширити свій стек технологій на десктопні додатки.</p>
            </div>
        </div>
    );
}

export default Page1;