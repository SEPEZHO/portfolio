-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 02 2019 г., 16:45
-- Версия сервера: 10.3.13-MariaDB
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `githubproj`
--

-- --------------------------------------------------------

--
-- Структура таблицы `info`
--

CREATE TABLE `info` (
  `Name` text NOT NULL,
  `Url` text NOT NULL,
  `Description` mediumtext NOT NULL,
  `Language` text NOT NULL,
  `CreateAt` date NOT NULL,
  `LastUpdate` date NOT NULL,
  `Size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `info`
--

INSERT INTO `info` (`Name`, `Url`, `Description`, `Language`, `CreateAt`, `LastUpdate`, `Size`) VALUES
('Clicker', 'https://github.com/SEPEZHO/Clicker', 'Game clicker (with account sistem and chat on websockets). You need to click to take a NOC. ', 'JavaScript', '2019-05-17', '2019-09-12', 18240),
('Game-OF-life', 'https://github.com/SEPEZHO/Game-OF-life', 'Thats game of life on canvas. My first programm on JS.', 'JavaScript', '2019-03-29', '2019-09-12', 20),
('Portfolio', 'https://github.com/SEPEZHO/Portfolio', 'Portfolio about my projects. Or just about me.', 'JavaScript', '2019-04-25', '2019-09-29', 26007),
('ShortWay', 'https://github.com/SEPEZHO/ShortWay', 'Algoritm about finding the shortest way to finish poin. Buggy thing.', 'JavaScript', '2019-04-12', '2019-09-12', 28),
('Site-23-February', 'https://github.com/SEPEZHO/Site-23-February', ' My second site that doesn’t look like shit', 'HTML', '2019-03-31', '2019-09-12', 6301),
('sitePHP', 'https://github.com/SEPEZHO/sitePHP', ' My first site that doesn’t look like shit.', 'HTML', '2019-03-31', '2019-09-12', 90);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
