-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Ноя 03 2019 г., 21:58
-- Версия сервера: 5.7.27-0ubuntu0.19.04.1
-- Версия PHP: 7.2.24-0ubuntu0.19.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `DataBase`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Comment`
--

CREATE TABLE `Comment` (
  `Id` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `Message` text NOT NULL,
  `Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Comment`
--

INSERT INTO `Comment` (`Id`, `Date`, `Message`, `Name`) VALUES
(1, '2019-10-30 17:18:45', 'фыв', 'фывфыв'),
(2, '2019-10-30 17:18:55', 'asd', 'asd'),
(3, '2019-10-30 17:27:48', 'sdfa', 'asdf'),
(4, '2019-10-30 17:27:50', 'sdfaasdf', 'asdf'),
(5, '2019-10-30 17:28:19', 'zxcv', 'zxcv'),
(6, '2019-10-30 17:28:22', 'zxcv', 'zxcv'),
(7, '2019-10-30 17:28:23', 'zxcv', 'zxcv'),
(8, '2019-10-30 17:45:32', 'asdfasdfasdfalhsdfblahsbflahsvflausgfausyvfkawehvolawhveofyiagspdigapsiyebvpHWVEPYVSEPYFGWepiyfPWIEVFPAHVWEIAYVPAIYGWEPUEGPuigPUIgpiusgepugpifugsepubaprhgbahrvg', 'NAME');

-- --------------------------------------------------------

--
-- Структура таблицы `Commits`
--

CREATE TABLE `Commits` (
  `Project` text NOT NULL,
  `Date` datetime NOT NULL,
  `Message` mediumtext NOT NULL,
  `UrlProj` text NOT NULL,
  `UrlCommit` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Commits`
--

INSERT INTO `Commits` (`Project`, `Date`, `Message`, `UrlProj`, `UrlCommit`) VALUES
('Portfolio', '2019-10-30 14:57:46', 'Доделал систему комментов через бд и пост запросы. Осталось по мелочи сделать. =)', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/525ba0def4ecd8ce3f284feb9959136ad593e8c8'),
('Portfolio', '2019-10-29 17:57:14', 'Начал делать систему комментариев (сделал сервер для заноса данных о сообщении в таблицу и сделал клиент для отправки этих данных). Переделал proxy, но проблему с багом не исправил.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/e83b550370e7a9fcb1a4562ad08c27401a16e1f5'),
('Portfolio', '2019-10-28 19:18:09', 'Доработал стили по мелочи там да сям. Сделал TableRepos в блоке text.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/ab5b28575d59d0e6092de17c280d3ed9281d0ee6'),
('Portfolio', '2019-10-27 17:09:25', 'Сделал h1 для каждого значимого блока. Изменил таблицу с git hub на главной странице, сделала стрелку \"узнать больше\".', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/0089c9cde3a3f6687045b326897a8855a5f29c43'),
('Portfolio', '2019-10-23 19:56:29', 'Сделал страницу Projects с таблицей, которая запрашивается через node сервер с mysql.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/7b7e78e3338ae2d69a7cade7d64ff979b702bfdf'),
('Portfolio', '2019-10-22 13:19:49', 'Доделал api сервер, который собирает все коммиты с проекта, который позже всех редактировался.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/7413c5e3ebfeb7f0be2f443658737d9d1a4897ae'),
('Portfolio', '2019-10-21 18:24:38', 'Сделал норм запрос на github api и начал строить api сервер для обработки запроса.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/31038feca4f19215dc0e169f7fd31f2a982ca320'),
('Portfolio', '2019-10-20 19:09:41', 'Сделал тень при наведении на каждый h1 / Сделал в меню (и нижнем тоже) ссылку на блок, а не на текст.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/96a4f318bb7d2ee8d1121bb098acdd09bc259256'),
('Portfolio', '2019-10-19 17:08:51', 'Сделал изменение меню в зависимости от страницы переименовал БД', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/56a0137038416c73cc28eab837e00201f3b85c5c'),
('Portfolio', '2019-10-18 19:08:54', 'Поправил sidebar в header-е', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/3952ce1c31acde49fa00f79e425976d364f839bb'),
('Portfolio', '2019-10-18 17:36:46', 'Допилил кнопку лайка и подправил стили.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/a01d88c4b732ea79b5e110bb95619224652105f8'),
('Portfolio', '2019-10-17 18:40:26', 'Сделал проверку на ip и запись в бд при лайке. Чуть-чуть поменял стили и структуру папок.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/d8c202d8b69883e226ad5961cc43985b15a5dc26'),
('Portfolio', '2019-10-16 18:01:54', 'Сдела�� стили для contact для main по мелочи', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/2084e7b10d72cb01ad2618e71b0380c21f8cb323'),
('Portfolio', '2019-10-15 15:50:28', 'Сделал переход по ссылке для Contact. Сделал рабочую форму контакт.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/142c3c91a690c709f936a9a5b97f4e71cbe2822e'),
('Portfolio', '2019-10-14 17:57:53', 'Поправил стили допилил футер поправил обо мне', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/9a3e38ac141e2eff412d268952415558c3d6db7f'),
('Portfolio', '2019-10-14 10:56:23', 'Попытался сделать sideBar в header.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/a4d0b58b32a5975b803565b6a58234ea7d9862b4'),
('Portfolio', '2019-10-14 09:50:53', 'Сделал SideBar поправил все css файлы', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/6ec0b4ae2ea6ea2ce2e6166513d85d52d8c329a2'),
('Portfolio', '2019-10-13 09:13:31', 'Сделал более правильную структуру проекта.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/e054499b58828bd2777ab4e9253a2a1e9a64a0ef'),
('Portfolio', '2019-10-12 13:50:19', 'Try to create like btn work.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/16d7cedcb5760fd5ee8fc831ae01a2ad3ebb315c'),
('Portfolio', '2019-10-12 13:11:50', 'create wotk like btn', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/762c9344e0f1104941a9d63ba33b993ceb0a6ac1'),
('Portfolio', '2019-10-12 11:54:18', 'Create read/write/remove file serv.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/383939375cbb59ffe57eab2796ea544a9a5285a9'),
('Portfolio', '2019-10-08 15:26:01', 'Try to read file. Create another api serv', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/726927b3be54eb0c1d728860c9584b18930be18e'),
('Portfolio', '2019-10-07 19:10:59', 'Remake for new OS (ubuntu).', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/f89c6cbc5d4dd685e07035093986c8a631959ed0'),
('Portfolio', '2019-10-04 17:55:57', 'Делаю пост запрос при нажатии на like', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/341c41676dfc4699b1462b49beae2697c714faff'),
('Portfolio', '2019-10-03 19:21:04', 'Добавил кнопку на верх и занялся футером', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/bb4cb9494170d5e2265e5556151d93e763d11003'),
('Portfolio', '2019-10-02 18:45:32', 'Добавил умения в About', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/4eb98cb6500647a7606be7cfd466690f8b727230'),
('Portfolio', '2019-10-02 13:35:27', 'Переименовал переменные всякие', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/8f466ad56b51d65596d7c6ac9af7d4227922175f'),
('Portfolio', '2019-09-29 18:39:41', 'try to copy Devon)))', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/fb4fb07eb41cb55d161be8fa9736b283d1c59d52'),
('Portfolio', '2019-09-28 17:59:26', 'doing menu.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/9ec4ae7cf22473f58e6df5593670f7b3b035c1b3'),
('Portfolio', '2019-09-28 07:15:25', 'Create menu.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/5d46b279127e33b08b1d88e25c48399a53cb9bb7');

-- --------------------------------------------------------

--
-- Структура таблицы `Info`
--

CREATE TABLE `Info` (
  `Name` text NOT NULL,
  `Url` text NOT NULL,
  `Description` mediumtext NOT NULL,
  `Language` text NOT NULL,
  `CreateAt` datetime NOT NULL,
  `LastUpdate` datetime NOT NULL,
  `Size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Info`
--

INSERT INTO `Info` (`Name`, `Url`, `Description`, `Language`, `CreateAt`, `LastUpdate`, `Size`) VALUES
('Clicker', 'https://github.com/SEPEZHO/Clicker', 'Game clicker (with account sistem and chat on websockets). You need to click to take a NOC. ', 'JavaScript', '2019-05-17 18:05:35', '2019-09-12 14:09:54', 18240),
('Game-OF-life', 'https://github.com/SEPEZHO/Game-OF-life', 'Thats game of life on canvas. My first programm on JS.', 'JavaScript', '2019-03-29 08:48:17', '2019-09-12 14:19:56', 20),
('Portfolio', 'https://github.com/SEPEZHO/Portfolio', 'Portfolio about my projects. Or just about me.', 'JavaScript', '2019-04-25 17:07:32', '2019-10-30 14:59:14', 28827),
('ShortWay', 'https://github.com/SEPEZHO/ShortWay', 'Algoritm about finding the shortest way to finish poin. Buggy thing.', 'JavaScript', '2019-04-12 18:06:00', '2019-09-12 14:12:35', 28),
('Site-23-February', 'https://github.com/SEPEZHO/Site-23-February', ' My second site that doesn’t look like shit', 'HTML', '2019-03-31 17:07:01', '2019-09-12 14:18:48', 6301),
('sitePHP', 'https://github.com/SEPEZHO/sitePHP', ' My first site that doesn’t look like shit.', 'HTML', '2019-03-31 17:06:14', '2019-09-12 14:19:28', 90);

-- --------------------------------------------------------

--
-- Структура таблицы `Likes`
--

CREATE TABLE `Likes` (
  `Likes` smallint(6) NOT NULL,
  `Ip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Likes and ip for BAN';

--
-- Дамп данных таблицы `Likes`
--

INSERT INTO `Likes` (`Likes`, `Ip`) VALUES
(1, '::ffff:127.0.0.1');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `Likes`
--
ALTER TABLE `Likes`
  ADD PRIMARY KEY (`Likes`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Comment`
--
ALTER TABLE `Comment`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `Likes`
--
ALTER TABLE `Likes`
  MODIFY `Likes` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
