-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 21, 2019 at 01:52 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DataBase`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE `Comment` (
  `Id` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `Message` text NOT NULL,
  `Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Comment`
--

INSERT INTO `Comment` (`Id`, `Date`, `Message`, `Name`) VALUES
(1, '2019-12-21 13:04:01', 'Дарова. Это первый коммент. Я закончил делать сайт, мб будет еще пару правок, но в целом это все.', 'Влад');

-- --------------------------------------------------------

--
-- Table structure for table `Commits`
--

CREATE TABLE `Commits` (
  `Project` text NOT NULL,
  `Branch` text NOT NULL,
  `Date` datetime NOT NULL,
  `Message` mediumtext NOT NULL,
  `UrlProj` text NOT NULL,
  `UrlCommit` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Commits`
--

INSERT INTO `Commits` (`Project`, `Branch`, `Date`, `Message`, `UrlProj`, `UrlCommit`) VALUES
('Portfolio', 'server', '2019-12-09 19:29:52', 'Пытаюсь допилить API для gitHub commits cath.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/d87f9a2caff91faa6c61c5d1e0741a34012b38ca'),
('Portfolio', 'master', '2019-11-24 11:30:32', 'Сделал нормальный размер шрифта, сделал норм размер для sidebar.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/d42a1f1aa5e56de452edd203136d5ca25877858b'),
('Portfolio', 'server', '2019-12-08 14:12:53', 'Полностью переделал систему добавления комитов в таблицу на сервере.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/55eacfdef6bd92baa424bd1b6f0826e137ab2bf5'),
('Portfolio', 'master', '2019-11-24 08:55:34', 'Проверочка.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/58b33a834d21870cdb92fb5e2f62318a23e7a959'),
('Portfolio', 'server', '2019-12-06 18:48:24', 'Доделываю структуру API.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/e4421d249e48c1341484f35f6e6d929b46ca2d5c'),
('Portfolio', 'master', '2019-11-24 08:53:55', 'Вернул все как было для пк.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/060caa77dd53a7dbc36d55e03a7ada0182f53d0b'),
('Portfolio', 'server', '2019-12-06 16:06:01', 'Переделал API gitHubCommits.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/3f2e9ce1f93c3f3868925bdb15db34c3e575e56b'),
('Portfolio', 'master', '2019-11-24 08:41:06', 'Перенес сайт на сервер.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/8975b21ed3c2c215db441535f0397db85e2dddc2'),
('Portfolio', 'server', '2019-12-04 18:58:41', 'Поменял стили для меню на телефоне чутка.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/27c3a6c4a42ab07a6218e990d2e5a7ec4f1b630c'),
('Portfolio', 'master', '2019-11-16 16:09:11', 'Seve', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/e8fb02b351f8b4739bb9e08cfae045c8b24ffd2c'),
('Portfolio', 'server', '2019-12-04 16:28:16', 'Сделал меню для телефонов.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/2ab55f5136f2babc77f2a4acdb8e932b1c7c890b'),
('Portfolio', 'master', '2019-11-16 15:53:55', 'Поменял структуру проекта чутка.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/8e1bf2e645ce5e47ebe1c1849597b316c799de63'),
('Portfolio', 'server', '2019-12-03 16:59:56', 'Переверстал стили для всего (в основном в медиа запросах). Очень много мелких фиксов.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/cabfc90ce2d252df0cb3aa8ac289c85d782be58b'),
('Portfolio', 'server', '2019-12-03 12:08:27', 'Переделал стили для всего /main + /footer.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/123ff6832602c6e7306334f8e071815d6fd78734'),
('Portfolio', 'server', '2019-12-02 17:20:21', 'Переверстал стили для страницы /main.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/69689e73ba0a537242fedfd13b4161dec04a3f2a'),
('Portfolio', 'server', '2019-12-01 14:41:18', 'Сделал балдежную анимацию при загрузке страницы.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/0ed27789cf67913139ae9efd950ce1e73caa9cce'),
('Portfolio', 'server', '2019-12-01 11:15:41', 'Поменял API бэк для оптимизированных запросов. Форматнул код кое-где.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/38185e1a76e9d0c241da4e28ad36f9c23a81cb34'),
('Portfolio', 'server', '2019-12-01 11:12:42', 'Оптемизировал все post запросы с сайта на api. Теперь их всего 2, при загрузке стр.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/54e4e2640f96b31405e592c6b6f760b1c59d949f'),
('Portfolio', 'server', '2019-11-30 18:57:29', 'Склеил все запросы для таблиц с проектамиактивностью в один. И сделал норм обработку на клиенте для них.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/2428a444a0d89e19c5702192f8cc0ccb5c9bc6af'),
('Portfolio', 'server', '2019-11-30 10:21:30', 'Ничего не работает +-+', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/d6fc9481e293675c17f4cf12661e4b88b0b6f03f'),
('Portfolio', 'server', '2019-11-29 17:40:41', 'Отворматировал все .jsx файлы. Переверстатл стили футера (чутка поменял стили). Убрал overflow: scroll.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/0c55a572d2f9063e5a85a3bbc62cc7b60589c255'),
('Portfolio', 'server', '2019-11-29 13:30:06', 'Переделал стили для Footer, доделал систему SPA, поменял стили для выделеных текстов.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/e5a1420fdb54a66f28fd87e87ce3b5eda6095a84'),
('Portfolio', 'server', '2019-11-27 18:33:25', 'Merge pull request #2 from SEPEZHO/spa\n\nПеревел весь сайт на SPA. Это было быстро =)', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/f6267f3802996ac4d36d3397cbc804153687ab87'),
('Portfolio', 'server', '2019-11-26 18:16:24', 'Что-то подправил. И таблицы попытался сделать.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/6e15bb5ff12a616e4c8b2a5df939bb3c5e2b10e3'),
('Portfolio', 'server', '2019-11-26 12:46:29', 'Чутка подправил стили.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/8006ee72ee8877de2921fa0010af69e614d38e4d'),
('Portfolio', 'server', '2019-11-25 18:42:28', 'Сделал нормальный бок Лучшие Проекты. Поменял чутка стили для About.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/6af2df0f175a6ba0ae1baf613fb0740f8c3887c9'),
('Portfolio', 'server', '2019-11-24 17:06:46', 'Поменял весь англ текст на русский. Переделал некоторые размеры шрифтов.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/0a806e0d61ab4df7827f8c80ea91647a74bf7173'),
('Portfolio', 'server', '2019-11-24 08:41:06', 'Перенес сайт на сервер.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/8975b21ed3c2c215db441535f0397db85e2dddc2'),
('Portfolio', 'server', '2019-11-16 16:09:11', 'Seve', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/e8fb02b351f8b4739bb9e08cfae045c8b24ffd2c'),
('Portfolio', 'server', '2019-11-16 15:53:55', 'Поменял структуру проекта чутка.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/8e1bf2e645ce5e47ebe1c1849597b316c799de63'),
('Portfolio', 'server', '2019-12-10 18:35:56', 'Допилил по мелочи. Теперь точно все с переделкой таблиц.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/0193376a26dd57fd902bd6f3e102ce93b49d8552'),
('Portfolio', 'server', '2019-12-10 18:14:18', 'Добавил ветки в таблицы.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/83bca454ebfe7295986c01676e1f97a009b518f3'),
('Portfolio', 'server', '2019-12-11 17:55:11', 'Начал делать API для contact fotm. Сделал показ ошибок. И fetch запрос на сервер.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/a51ddb252102d1ca372231adbc73ff06f156fd04'),
('Portfolio', 'server', '2019-12-20 16:03:33', 'Сделал просмотры. Пару фиксов. Можно закругляться с этим.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/aef99ff01ba7b575eafa5fff82620dc84560917f'),
('Portfolio', 'server', '2019-12-20 17:35:52', 'Форматнул код.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/61339ec4642050b7bf8bd74c3cbd90f8203e8e05'),
('Portfolio', 'server', '2019-12-21 12:42:03', 'Доработки по мелочи отправки почты.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/cfabf350246628f89923c34a0203d972418f403e'),
('Portfolio', 'server', '2019-12-21 12:59:38', 'try to merge.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/0c116a039aa6f1b4b70a3ecf68c2e8ceee4856c0'),
('Portfolio', 'master', '2019-12-21 13:29:28', 'Finish merge.', 'https://github.com/SEPEZHO/Portfolio', 'https://github.com/SEPEZHO/Portfolio/commit/4a93fcfdeb90dc1882bf425d2cea545c7f3feaac');

-- --------------------------------------------------------

--
-- Table structure for table `Info`
--

CREATE TABLE `Info` (
  `Name` text NOT NULL,
  `Branches` text NOT NULL,
  `Url` text NOT NULL,
  `Description` mediumtext NOT NULL,
  `Language` text NOT NULL,
  `CreateAt` datetime NOT NULL,
  `LastUpdate` datetime NOT NULL,
  `Size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Info`
--

INSERT INTO `Info` (`Name`, `Branches`, `Url`, `Description`, `Language`, `CreateAt`, `LastUpdate`, `Size`) VALUES
('ShortWay', '[\"New\",\"master\"]', 'https://github.com/SEPEZHO/ShortWay', 'Algoritm about finding the shortest way to finish poin. Buggy thing.', 'JavaScript', '2019-04-12 18:06:00', '2019-09-12 14:12:35', 28),
('Clicker', '[\"2.1\",\"Try-to-create-a-wss-connection\",\"master\"]', 'https://github.com/SEPEZHO/Clicker', 'Game clicker (with account sistem and chat on websockets). You need to click to take a NOC. ', 'JavaScript', '2019-05-17 18:05:35', '2019-09-12 14:09:54', 18240),
('Game-OF-life', '[\"Size\",\"master\"]', 'https://github.com/SEPEZHO/Game-OF-life', 'Thats game of life on canvas. My first programm on JS.', 'JavaScript', '2019-03-29 08:48:17', '2019-09-12 14:19:56', 20),
('Site-23-February', '[\"master\"]', 'https://github.com/SEPEZHO/Site-23-February', ' My second site that doesn’t look like shit', 'HTML', '2019-03-31 17:07:01', '2019-09-12 14:18:48', 6301),
('sitePHP', '[\"master\"]', 'https://github.com/SEPEZHO/sitePHP', ' My first site that doesn’t look like shit.', 'HTML', '2019-03-31 17:06:14', '2019-09-12 14:19:28', 90),
('Portfolio', '[\"master\",\"server\"]', 'https://github.com/SEPEZHO/Portfolio', 'Portfolio about my projects. Or just about me.', 'JavaScript', '2019-04-25 17:07:32', '2019-12-21 13:29:51', 29105);

-- --------------------------------------------------------

--
-- Table structure for table `Likes`
--

CREATE TABLE `Likes` (
  `Likes` smallint(6) NOT NULL,
  `Ip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Likes and ip for BAN';

--
-- Dumping data for table `Likes`
--

INSERT INTO `Likes` (`Likes`, `Ip`) VALUES
(1, '::ffff:127.0.0.1'),
(2, '::ffff:128.70.116.38'),
(3, '::ffff:128.71.116.20'),
(4, '::ffff:37.147.68.164'),
(5, '::ffff:95.30.56.112'),
(6, '::ffff:37.146.61.63'),
(7, '::ffff:188.191.90.136'),
(8, '::ffff:217.118.81.46'),
(9, '::ffff:95.153.131.5'),
(10, '::ffff:128.71.250.186');

-- --------------------------------------------------------

--
-- Table structure for table `Views`
--

CREATE TABLE `Views` (
  `Views` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Views`
--

INSERT INTO `Views` (`Views`) VALUES
(162);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `Likes`
--
ALTER TABLE `Likes`
  ADD PRIMARY KEY (`Likes`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Likes`
--
ALTER TABLE `Likes`
  MODIFY `Likes` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
