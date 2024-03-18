import React from 'react';

const Page2: React.FC = () => {
    return (
        <div className="page-container">
            <div className="item-container">
                <img src="https://itkpi.pp.ua/images/2016/03/1458870170_333b68cb69dc478086c1697c28a8d598.png" alt="Фото 1" className="item-image" />
                <p className="item-text">React - це потужна JavaScript бібліотека для створення інтерактивних користувацьких інтерфейсів. Вона використовується для побудови односторінкових додатків, веб-сайтів, мобільних додатків та багато іншого. За допомогою React розробники можуть ефективно організувати код, використовуючи компонентний підхід до програмування.</p>
            </div>
            <div className="item-container">
                <img src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png" alt="Фото 2" className="item-image" />
                <p className="item-text">Однією з ключових особливостей React є використання віртуального DOM, який дозволяє ефективно оновлювати сторінки, не перерендерюючи всю DOM-структуру. Це дозволяє покращити продуктивність додатків та забезпечити швидке відгук на дії користувачів.</p>
            </div>
            <div className="item-container">
                <img src="https://www.codingdojo.com/blog/wp-content/uploads/react.jpg" alt="Фото 3" className="item-image" />
                <p className="item-text">React надає широкий набір функціональних можливостей, таких як компоненти, стейти, пропси, життєвий цикл компонентів та багато іншого. Вона також дозволяє використовувати розширення та бібліотеки, які полегшують розробку, такі як Redux, React Router, Material-UI та багато інших.</p>
            </div>
        </div>
    );
}

export default Page2;
