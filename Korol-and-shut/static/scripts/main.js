// main-carousel
let slideIdOfMainCarousel = 1;
const maxIdOfMainCarousel = 5;

let mainCarousel = document.querySelector('.main-carousel');

function showSlideMain() {
    document.removeEventListener('click', showSlideMain);
    // Находим активный слайд и скрываем его
    console.log('dsadas');
    mainCarousel.removeEventListener('click', showSlideMain);
    let activeSlide = document.querySelector(
        '#MainSlide' + slideIdOfMainCarousel
    );
    activeSlide.classList.remove('carousel-opened');
    activeSlide.classList.add('carousel-hidden');

    if (slideIdOfMainCarousel >= maxIdOfMainCarousel) {
        slideIdOfMainCarousel = 1;
    } else {
        slideIdOfMainCarousel++;
    }

    // Запускаем переход на следующий слайд через 3 секунды
    setTimeout(function () {
        activeSlide.classList.add('hidden');
    }, 3000);

    setTimeout(function () {
        let newActiveSlide = document.querySelector(
            '#MainSlide' + slideIdOfMainCarousel
        );
        newActiveSlide.classList.remove('hidden');
        newActiveSlide.classList.remove('carousel-hidden');
        newActiveSlide.classList.add('carousel-opened');
        mainCarousel.addEventListener('click', showSlideMain);
    }, 3000);
}

mainCarousel.addEventListener('click', showSlideMain);

// плеер
const player = document.querySelector('#player audio');
const title = document.querySelector('#player h1');
const image = document.querySelector('#player img');
const musicText = document.querySelector('.music-text p');

const songs = [
    {
        title: 'лесник',
        image: '/frontend/static/images/albums/korol-i-shut.jpg',
        audio: '/frontend/static/audio/lesnik.mp3',
        text: `[Текст песни «Лесник»]

    [Куплет 1]
    Замученный дорогой
    Я выбился из сил
    И в доме лесника я
    Ночлега попросил
    С улыбкой добродушной
    Старик меня впустил
    И жестом дружелюбным
    На ужин пригласил
    (Хэй!)
    
    [Припев]
    Будь как дома, путник
    Я ни в чём не откажу
    Я ни в чём не откажу
    Я ни в чём не откажу! (Хэй!)
    Множество историй
    Коль желаешь, расскажу
    Коль желаешь, расскажу
    Коль желаешь, расскажу!
    
    [Куплет 2]
    На улице темнело
    Сидел я за столом
    Лесник сидел напротив
    Болтал о том, о сём
    Что нет среди животных
    У старика врагов
    Что нравится ему
    Подкармливать волков
    You might also like
    Кукла колдуна (Sorcerer’s Doll)
    Король и Шут (The King and the Jester)
    Дурак и молния (Fool and the Lightning)
    Король и Шут (The King and the Jester)
    Прыгну со скалы (I’ll Jump Off a Cliff)
    Король и Шут (The King and the Jester)
    [Припев]
    Будь как дома, путник
    Я ни в чём не откажу
    Я ни в чём не откажу
    Я ни в чём не откажу! (Хэй!)
    Множество историй
    Коль желаешь, расскажу
    Коль желаешь, расскажу
    Коль желаешь, расскажу!
    
    [Куплет 3]
    И волки среди ночи
    Завыли под окном
    Старик заулыбался
    И вдруг покинул дом
    Но вскоре возвратился
    С ружьём наперевес
    «Друзья хотят покушать
    Пойдём, приятель, в лес!»
    
    [Припев]
    Будь как дома, путник
    Я ни в чём не откажу
    Я ни в чём не откажу
    Я ни в чём не откажу! (Хэй!)
    Множество историй
    Коль желаешь, расскажу
    Коль желаешь, расскажу
    Коль желаешь, расскажу!`
    },
    {
        title: 'Прыгну со скалы',
        image: '/frontend/static/images/albums/acoustic.jpg',
        audio: '/frontend/static/audio/scala.mp3',
        text: `[Текст песни «Прыгну со скалы»]

    [Куплет 1]
    С головы сорвал ветер мой колпак
    Я хотел любви, но вышло всё не так
    Знаю я, ничего в жизни не вернуть
    И теперь у меня один лишь только путь
    
    [Припев]
    Разбежавшись, прыгну со скалы
    Вот я был, и вот меня не стало
    И когда об этом вдруг узнаешь ты
    Тогда поймёшь, кого ты потеряла
    
    [Куплет 2]
    Быть таким, как все, с детства не умел
    Видимо, такой в жизни мой удел
    А она, да что она? Вечно мне лгала
    И меня никогда понять бы не смогла
    
    [Припев]
    Разбежавшись, прыгну со скалы
    Вот я был, и вот меня не стало
    И когда об этом вдруг узнаешь ты
    Тогда поймёшь, кого ты потеряла
    You might also like
    Кукла колдуна (Sorcerer’s Doll)
    Король и Шут (The King and the Jester)
    Лесник (Forester)
    Король и Шут (The King and the Jester)
    Дурак и молния (Fool and the Lightning)
    Король и Шут (The King and the Jester)
    [Куплет 3]
    Гордо скину плащ, в даль направлю взор
    Может, она ждёт? Вряд ли, это вздор
    И, издав дикий крик, камнем брошусь вниз
    Это моей жизни заключительный каприз
    
    [Припев]
    Разбежавшись, прыгну со скалы
    Вот я был, и вот меня не стало
    И тогда себя возненавидишь ты
    Лишь осознав, кого ты потеряла
    Кого ты потеряла
    Кого ты потеряла`
    },
    {
        title: 'Джокер',
        image: '/frontend/static/images/albums/prodavets-koshmarov.jpg',
        audio: '/frontend/static/audio/djoker.mp3',
        text: `[Текст песни «Джокер»]

    [Интро]
    Как же, Джокер, ты хитёр
    Ты удачи приговор
    Брошен вызов игрокам
    Главным моим врагам
    
    [Куплет 1]
    Их мечты развеем в прах
    Ты всегда в моих руках
    Суждено тебе и мне
    Главными быть в игре
    Я с сигарой в казино
    Дорогое пью вино
    Улыбаюсь всем вокруг
    Богач — мой друг
    
    [Припев]
    Ваши ставки, господа
    Глаз мой радуют всегда
    Разорить вас без труда
    Вновь удастся мне
    Джокер в игре
    
    [Куплет 2]
    Но везенья вышел срок
    Равный мне возник игрок
    Мои мысли он читал
    Все мои тайны знал
    И в решающий момент
    Джокера со мною нет
    Я разбит, повержен в шок
    Да как он мог?
    You might also like
    Кукла колдуна (Sorcerer’s Doll)
    Король и Шут (The King and the Jester)
    Проклятый старый дом (Cursed Old House)
    Король и Шут (The King and the Jester)
    Прыгну со скалы (I’ll Jump Off a Cliff)
    Король и Шут (The King and the Jester)
    [Припев]
    Ваши ставки, господа
    Глаз мой радуют всегда
    Разорить вас без труда
    Вновь удастся мне
    Джокер в игре
    
    [Бридж]
    Хой-хой
    
    [Куплет 3]
    Джокер, предал ты меня
    Пистолет хватаю я
    И палю в колоду карт
    Мой не сдержать азарт (Х-э-э-й)
    Лишь я в Джокера попал (Эу)
    Как соперник мой упал
    Между глаз вошёл свинец (Эу)
    Мне и ему конец
    
    [Куплет 4]
    Ха, что я в парня не стрелял
    Всех вокруг я уверял
    «Это Джокер» — я кричал
    Со мной играл
    [Припев]
    Чахну в камере сырой
    Карта с дыркой предо мной
    Джокер был союзник мой
    А теперь, увы
    Я вне игры
    
    [Аутро]
    В-а-а-у!
    Их мечты развеем в прах
    Ты всегда в моих руках
    О-о-о, о-о-о, о-о-о`
    },
    {
        title: 'Кукла колдуна',
        image: '/frontend/static/images/albums/acoustic.jpg',
        audio: '/frontend/static/audio/cucla.mp3',
        text: `[Текст песни «Кукла колдуна»]

    [Куплет 1]
    Тёмный, мрачный коридор
    Я на цыпочках, как вор
    Пробираюсь, чуть дыша
    Чтобы не спугнуть
    Тех, кто спит уже давно
    Тех, кому не всё равно
    В чью я комнату тайком
    Желаю заглянуть
    Чтобы увидеть…
    
    [Припев]
    Как бессонница в час ночной
    Меняет, нелюдимая, облик твой
    Чьих, невольница, ты идей?
    Зачем тебе охотиться на людей?
    
    [Куплет 2]
    Крестик на моей груди
    На него ты погляди
    Что в тебе способен он
    Резко изменить?
    Много книжек я читал
    Много фокусов видал
    Свою тайну от меня
    Не пытайся скрыть!
    Я это видел!
    You might also like
    Лесник (Forester)
    Король и Шут (The King and the Jester)
    Дурак и молния (Fool and the Lightning)
    Король и Шут (The King and the Jester)
    Прыгну со скалы (I’ll Jump Off a Cliff)
    Король и Шут (The King and the Jester)
    [Припев]
    Как бессонница в час ночной
    Меняет, нелюдимая, облик твой
    Чьих, невольница, ты идей?
    Зачем тебе охотиться на людей?
    
    [Куплет 3]
    Очень жаль, что ты тогда
    Мне поверить не смогла
    В то, что новый твой приятель
    Не такой, как все!
    Ты осталась с ним вдвоём
    Не зная ничего о нём
    Что для всех опасен он
    Наплевать тебе!
    И ты попала!
    
    [Припев]
    К настоящему колдуну
    Он загубил таких, как ты, не одну!
    Словно куклой, в час ночной
    Теперь он может управлять тобой!
    
    [Аутро]
    Всё происходит, будто в страшном сне
    И находиться здесь опасно мне!`
    },
    {
        title: 'Валет и дама',
        image: '/frontend/static/images/albums/korol-i-shut.jpg',
        audio: '/frontend/static/audio/valet-i-dama.mp3',
        text: `[Текст песни "Валет и Дама"]

    [Куплет]
    Шёл с улыбкой здоровяк по ночному парку
    И у тихого пруда повстречал гадалку
    Обратился парень к ней: "Вот что знать хочу я -
    Сколько мне осталось дней? Как, скажи, умру я?"
    
    [Припев]
    И упали карты на снег, и старуха парню сказала
    Сквозь хриплый смех:
    "Весь в крови несчастный Валет, а над ним ужасная Дама
    С ножом в руке!"
    
    [Куплет 2]
    И воскликнул здоровяк, руки потирая:
    "Что ты хочешь мне сказать, я не понимаю."
    И блеснул во мраке нож, и раздался хохот:
    "Прямо щас и прямо здесь будет тебе плохо!"
    
    [Припев]
    И упало тело на снег, и старуха парню сказала
    Сквозь хриплый смех:
    "Весь в крови несчастный Валет, а над ним ужасная Дама
    С ножом в руке!"
    You might also like
    Охотник (Hunter)
    Король и Шут (The King and the Jester)
    Лесник (Forester)
    Король и Шут (The King and the Jester)
    Дурак и молния (Fool and the Lightning)
    Король и Шут (The King and the Jester)
    [Куплет 3]
    На тело ведьма покосилась
    И в неизвестном направлении
    Скрылась!
    
    [Оутро]
    "Весь в крови несчастный Валет, а над ним ужасная Дама
    С ножом в руке!"`
    }
];

let currentSong = 0;

function loadSong() {
    title.innerText = songs[currentSong].title;
    image.src = songs[currentSong].image;
    player.src = songs[currentSong].audio;
    musicText.innerText = songs[currentSong].text;
}

function playSong() {
    player.play();
    document.querySelector('#play').innerHTML = '⏸';
}

function pauseSong() {
    player.pause();
    document.querySelector('#play').innerHTML = '▶️';
}

function prevSong() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    loadSong();
    playSong();
}

function nextSong() {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    loadSong();
    playSong();
}

loadSong();

document.querySelector('#prev').addEventListener('click', prevSong);
document.querySelector('#next').addEventListener('click', nextSong);

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        prevSong();
    } else if (e.code === 'ArrowRight') {
        nextSong();
    }
});

// карусель альбомов
let discIndex = 0;

function prevDisc(maxIndex) {
    let elements = document.getElementsByClassName('three-albums');

    if (discIndex == 0) {
        discIndex = maxIndex;
    }
    discIndex--;
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.transform = `translateX(-${100 * (discIndex)}vw)`;
    }
}

function nextDisc(maxIndex) {
    let elements = document.getElementsByClassName('three-albums');
    console.log(discIndex)
    if (discIndex == maxIndex - 1) {
        discIndex = -1;
    }

    discIndex++;
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.transform = `translateX(-${100 * discIndex}vw)`;
    }
}
