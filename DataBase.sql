-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Окт 22 2019 г., 16:18
-- Версия сервера: 5.7.27-0ubuntu0.19.04.1
-- Версия PHP: 7.2.19-0ubuntu0.19.04.2

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
-- Структура таблицы `Commits`
--

CREATE TABLE `Commits` (
  `Project` text NOT NULL,
  `Date` datetime NOT NULL,
  `Message` mediumtext NOT NULL,
  `UrlProj` text NOT NULL,
  `UrlCommit` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Структура таблицы `Likes`
--

CREATE TABLE `Likes` (
  `Likes` smallint(6) NOT NULL,
  `Ip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Likes and ip for BAN';

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Likes`
--
ALTER TABLE `Likes`
  ADD PRIMARY KEY (`Likes`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Likes`
--
ALTER TABLE `Likes`
  MODIFY `Likes` smallint(6) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
