-- --------------------------------------------------------
-- Хост:                         localhost
-- Версия сервера:               5.7.31 - MySQL Community Server (GPL)
-- Операционная система:         Win64
-- HeidiSQL Версия:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных rskbank
CREATE DATABASE IF NOT EXISTS `rskbank` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `rskbank`;

-- Дамп структуры для таблица rskbank.ads
CREATE TABLE IF NOT EXISTS `ads` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `img_url` text NOT NULL,
  `video_url` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.ads: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `ads` DISABLE KEYS */;
INSERT INTO `ads` (`id`, `name`, `img_url`, `video_url`) VALUES
	(1, 'ФЫ', 'ВФЫ', 'C:\\rsk\\video\\43.mp4'),
	(2, 'asd', 'asd', 'C:\\rsk\\video\\12345.mp4');
/*!40000 ALTER TABLE `ads` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.ads_schedules
CREATE TABLE IF NOT EXISTS `ads_schedules` (
  `id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `ads_id` bigint(20) unsigned DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `days` json NOT NULL COMMENT 'на какие дни должна показыватся реклама',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.ads_schedules: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `ads_schedules` DISABLE KEYS */;
INSERT INTO `ads_schedules` (`id`, `ads_id`, `start_time`, `end_time`, `start_date`, `end_date`, `days`) VALUES
	(1, 1, '08:52:40', '08:52:40', '2020-12-28 08:52:41', '2020-12-28 08:52:41', '1'),
	(2, 2, '13:38:27', '13:38:27', '2020-12-28 13:38:28', '2020-12-28 13:38:29', '2');
/*!40000 ALTER TABLE `ads_schedules` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.ads_schedules_tvtablos
CREATE TABLE IF NOT EXISTS `ads_schedules_tvtablos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ads_schedules_id` bigint(20) unsigned DEFAULT NULL,
  `tvtablos_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.ads_schedules_tvtablos: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `ads_schedules_tvtablos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ads_schedules_tvtablos` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.alfavit
CREATE TABLE IF NOT EXISTS `alfavit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name1` char(50) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы rskbank.alfavit: ~29 rows (приблизительно)
/*!40000 ALTER TABLE `alfavit` DISABLE KEYS */;
INSERT INTO `alfavit` (`id`, `name1`, `status`) VALUES
	(1, 'А', 0),
	(2, 'Б', 0),
	(3, 'В', 0),
	(4, 'Г', 0),
	(5, 'Д', 0),
	(6, 'Е', 0),
	(7, 'Ё', 0),
	(8, 'Ж', 0),
	(9, 'З', 0),
	(10, 'И', 0),
	(11, 'Й', 0),
	(12, 'К', 0),
	(13, 'Л', 0),
	(14, 'М', 0),
	(15, 'Н', 0),
	(16, 'О', 0),
	(17, 'П', 0),
	(18, 'Р', 0),
	(19, 'С', 0),
	(20, 'Т', 0),
	(21, 'У', 0),
	(22, 'Ф', 0),
	(23, 'Х', 0),
	(24, 'Ц', 0),
	(25, 'Ч', 0),
	(26, 'Ш', 0),
	(27, 'Щ', 0),
	(28, 'Ъ', 0),
	(29, 'Ы', 0),
	(30, 'Ь', 0),
	(31, 'Э', 0),
	(32, 'Ю', 0),
	(33, 'Я', 0);
/*!40000 ALTER TABLE `alfavit` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.branches
CREATE TABLE IF NOT EXISTS `branches` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name_b` mediumtext NOT NULL,
  `address` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.branches: ~1 rows (приблизительно)
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;
INSERT INTO `branches` (`id`, `name_b`, `address`, `created_at`) VALUES
	(15, 'Ош филиал', 'ОШ', '2020-12-23 12:32:39');
/*!40000 ALTER TABLE `branches` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.day
CREATE TABLE IF NOT EXISTS `day` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы rskbank.day: ~7 rows (приблизительно)
/*!40000 ALTER TABLE `day` DISABLE KEYS */;
INSERT INTO `day` (`id`, `day`) VALUES
	(1, 'Понедельник'),
	(2, 'Вторник'),
	(3, 'Среда'),
	(4, 'Четверг'),
	(5, 'Пятница'),
	(6, 'Суббота'),
	(7, 'Воскресенье');
/*!40000 ALTER TABLE `day` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.langs
CREATE TABLE IF NOT EXISTS `langs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `locale` varchar(100) CHARACTER SET utf8 NOT NULL,
  `is_aktiv` varchar(11) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `locale` (`locale`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.langs: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `langs` DISABLE KEYS */;
INSERT INTO `langs` (`id`, `locale`, `is_aktiv`) VALUES
	(1, 'RU', '0'),
	(3, 'KG', '0'),
	(4, 'KG', '0');
/*!40000 ALTER TABLE `langs` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.lang_words
CREATE TABLE IF NOT EXISTS `lang_words` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `locale` varchar(250) DEFAULT NULL,
  `key` varchar(250) DEFAULT NULL,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.lang_words: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `lang_words` DISABLE KEYS */;
/*!40000 ALTER TABLE `lang_words` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.options
CREATE TABLE IF NOT EXISTS `options` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `key` mediumtext CHARACTER SET utf8,
  `value` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.options: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `options` DISABLE KEYS */;
INSERT INTO `options` (`id`, `key`, `value`) VALUES
	(1, 'Sound_Voice', 'ALL'),
	(5, 'Customer_Call', '52');
/*!40000 ALTER TABLE `options` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.parol
CREATE TABLE IF NOT EXISTS `parol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы rskbank.parol: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `parol` DISABLE KEYS */;
INSERT INTO `parol` (`id`, `log`, `pass`) VALUES
	(1, 'rsk', '123');
/*!40000 ALTER TABLE `parol` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.position
CREATE TABLE IF NOT EXISTS `position` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name_p` varchar(250) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name_p` (`name_p`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COMMENT='Должности сотрудников\r\n';

-- Дамп данных таблицы rskbank.position: ~6 rows (приблизительно)
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` (`id`, `name_p`) VALUES
	(14, 'Бугалтер'),
	(7, 'Касса'),
	(13, 'Кредитный отдел'),
	(5, 'Операторы'),
	(9, 'Перевод отдел'),
	(4, 'Юр. Лицо');
/*!40000 ALTER TABLE `position` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.positions_services
CREATE TABLE IF NOT EXISTS `positions_services` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `position_id` int(11) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы rskbank.positions_services: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `positions_services` DISABLE KEYS */;
/*!40000 ALTER TABLE `positions_services` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.services
CREATE TABLE IF NOT EXISTS `services` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) CHARACTER SET utf8 NOT NULL,
  `index` int(11) unsigned NOT NULL,
  `parent_id` int(11) unsigned DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT '1',
  `suffix` text CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.services: ~5 rows (приблизительно)
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` (`id`, `name`, `index`, `parent_id`, `is_active`, `suffix`) VALUES
	(28, 'Касса', 3, 28, 1, 'К'),
	(29, 'Юр лиц', 3, 29, 1, 'Ю'),
	(30, 'Физ лиц', 3, 30, 1, 'Э'),
	(31, 'Перевод', 3, 29, 1, 'П'),
	(32, 'Кредит', 3, 29, 1, 'Т');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;

-- Дамп структуры для представление rskbank.services_table
-- Создание временной таблицы для обработки ошибок зависимостей представлений
CREATE TABLE `services_table` (
	`id` INT(11) UNSIGNED NOT NULL,
	`parent` VARCHAR(250) NOT NULL COLLATE 'utf8_general_ci',
	`child1` VARCHAR(250) NULL COLLATE 'utf8_general_ci',
	`child2` VARCHAR(250) NULL COLLATE 'utf8_general_ci',
	`child3` VARCHAR(250) NULL COLLATE 'utf8_general_ci',
	`child4` VARCHAR(250) NULL COLLATE 'utf8_general_ci',
	`child5` VARCHAR(250) NULL COLLATE 'utf8_general_ci',
	`child6` VARCHAR(250) NULL COLLATE 'utf8_general_ci',
	`child7` VARCHAR(250) NULL COLLATE 'utf8_general_ci',
	`child8` VARCHAR(250) NULL COLLATE 'utf8_general_ci'
) ENGINE=MyISAM;

-- Дамп структуры для таблица rskbank.service_langs
CREATE TABLE IF NOT EXISTS `service_langs` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `service_id` int(11) unsigned NOT NULL,
  `name` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `locale` varchar(250) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  KEY `service_id` (`service_id`),
  KEY `locale` (`locale`),
  CONSTRAINT `FK_service_langs_langs` FOREIGN KEY (`locale`) REFERENCES `langs` (`locale`),
  CONSTRAINT `FK_service_langs_services` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.service_langs: ~10 rows (приблизительно)
/*!40000 ALTER TABLE `service_langs` DISABLE KEYS */;
INSERT INTO `service_langs` (`id`, `service_id`, `name`, `locale`) VALUES
	(47, 28, 'Касса', 'RU'),
	(48, 29, 'Юр лиц', 'RU'),
	(49, 30, 'Физ лиц', 'RU'),
	(50, 31, 'Перевод', 'RU'),
	(51, 32, 'Кредит', 'RU'),
	(53, 28, 'rs', 'KG'),
	(54, 29, 'sr', 'KG'),
	(55, 30, 'as', 'KG'),
	(56, 31, 'as', 'KG'),
	(57, 32, 'ds', 'KG');
/*!40000 ALTER TABLE `service_langs` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.terminals
CREATE TABLE IF NOT EXISTS `terminals` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `branches_id` int(11) unsigned NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.terminals: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `terminals` DISABLE KEYS */;
INSERT INTO `terminals` (`id`, `branches_id`, `name`, `is_active`) VALUES
	(1, 6, 'Терминал Ош', 1),
	(2, 2, 'Terminal Batken', 1);
/*!40000 ALTER TABLE `terminals` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.terminals_options
CREATE TABLE IF NOT EXISTS `terminals_options` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `terminal_id` int(11) unsigned NOT NULL,
  `t_key` text,
  `t_ON` text,
  `t_OF` text,
  `t_day` text,
  `t_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_terminals_options_terminals` (`terminal_id`),
  CONSTRAINT `FK_terminals_options_terminals` FOREIGN KEY (`terminal_id`) REFERENCES `terminals` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.terminals_options: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `terminals_options` DISABLE KEYS */;
INSERT INTO `terminals_options` (`id`, `terminal_id`, `t_key`, `t_ON`, `t_OF`, `t_day`, `t_date`) VALUES
	(32, 1, 'ON', '06:00', '16:00', 'Понедельник', NULL),
	(33, 1, 'ON', '06:00', '16:00', NULL, '2014-12-20');
/*!40000 ALTER TABLE `terminals_options` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.turns
CREATE TABLE IF NOT EXISTS `turns` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nomer` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  `service_id` int(11) unsigned DEFAULT NULL,
  `workplace_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `workplace_id` (`workplace_id`),
  KEY `user_id` (`user_id`),
  KEY `FK_turns_services` (`service_id`),
  CONSTRAINT `FK_turns_services` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_turns_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_turns_workplaces` FOREIGN KEY (`workplace_id`) REFERENCES `workplaces` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.turns: ~20 rows (приблизительно)
/*!40000 ALTER TABLE `turns` DISABLE KEYS */;
INSERT INTO `turns` (`id`, `nomer`, `status`, `service_id`, `workplace_id`, `user_id`, `created_at`, `updated_at`) VALUES
	(61, '1', 'new', 28, NULL, NULL, '2020-12-29 11:00:06', NULL),
	(62, '2', 'new', 28, NULL, NULL, '2020-12-29 11:00:16', NULL),
	(63, '3', 'new', 28, NULL, NULL, '2020-12-29 11:00:21', NULL),
	(64, '4', 'new', 28, NULL, NULL, '2020-12-29 11:00:26', NULL),
	(65, '5', 'new', 28, NULL, NULL, '2020-12-29 11:00:31', NULL),
	(66, '6', 'new', 28, NULL, NULL, '2020-12-29 11:00:35', NULL),
	(67, '7', 'new', 28, NULL, NULL, '2020-12-29 11:01:24', NULL),
	(68, '8', 'new', 28, NULL, NULL, '2020-12-29 11:01:26', NULL),
	(69, '9', 'new', 28, NULL, NULL, '2020-12-29 11:01:28', NULL),
	(70, '10', 'new', 30, NULL, NULL, '2020-12-29 11:01:30', NULL),
	(71, '11', 'new', 28, NULL, NULL, '2020-12-29 11:01:33', NULL),
	(72, '12', 'new', 30, NULL, NULL, '2020-12-29 11:01:35', NULL),
	(73, '13', 'new', 28, NULL, NULL, '2020-12-29 11:01:37', NULL),
	(74, '14', 'new', 28, NULL, NULL, '2020-12-29 11:01:39', NULL),
	(75, '15', 'new', 30, NULL, NULL, '2020-12-29 11:01:41', NULL),
	(76, '16', 'new', 28, NULL, NULL, '2020-12-29 11:01:44', NULL),
	(77, '17', 'new', 30, NULL, NULL, '2020-12-29 11:01:46', NULL),
	(78, '18', 'new', 28, NULL, NULL, '2020-12-29 11:05:03', NULL),
	(79, '19', 'new', 28, NULL, NULL, '2020-12-29 11:05:08', NULL),
	(80, '20', 'new', 31, NULL, NULL, '2020-12-29 11:05:14', NULL);
/*!40000 ALTER TABLE `turns` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.turns_service_times
CREATE TABLE IF NOT EXISTS `turns_service_times` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `turn_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `finished_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.turns_service_times: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `turns_service_times` DISABLE KEYS */;
INSERT INTO `turns_service_times` (`id`, `turn_id`, `created_at`, `finished_at`) VALUES
	(2, 1, NULL, '2020-12-28 14:46:42'),
	(3, 2, '2020-12-28 18:39:49', NULL);
/*!40000 ALTER TABLE `turns_service_times` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.turns_status
CREATE TABLE IF NOT EXISTS `turns_status` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `desc` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.turns_status: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `turns_status` DISABLE KEYS */;
INSERT INTO `turns_status` (`id`, `name`, `desc`) VALUES
	(1, 'new', 'новая очередь которое стоит в очереди'),
	(2, 'served', 'в данное очередь время обслуживается'),
	(3, 'completed', 'завершен'),
	(4, 'fail', 'неявка'),
	(5, 'waiting', 'в ожидание');
/*!40000 ALTER TABLE `turns_status` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.turns_waiting_times
CREATE TABLE IF NOT EXISTS `turns_waiting_times` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `turn_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `finished_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.turns_waiting_times: ~53 rows (приблизительно)
/*!40000 ALTER TABLE `turns_waiting_times` DISABLE KEYS */;
INSERT INTO `turns_waiting_times` (`id`, `turn_id`, `created_at`, `finished_at`) VALUES
	(1, 1, '2020-12-28 16:22:15', '2020-12-28 16:22:17'),
	(2, 32, NULL, '2020-12-28 18:33:21'),
	(3, 32, NULL, NULL),
	(4, 32, '2020-12-28 16:27:17', NULL),
	(5, 32, '2020-12-28 16:27:17', NULL),
	(6, NULL, NULL, NULL),
	(7, NULL, NULL, NULL),
	(8, NULL, NULL, NULL),
	(9, NULL, NULL, NULL),
	(10, NULL, NULL, NULL),
	(11, NULL, NULL, NULL),
	(12, NULL, NULL, NULL),
	(13, NULL, NULL, NULL),
	(14, NULL, NULL, NULL),
	(15, NULL, NULL, NULL),
	(16, 41, '2020-12-28 08:18:37', NULL),
	(17, NULL, NULL, NULL),
	(18, NULL, NULL, NULL),
	(19, NULL, NULL, NULL),
	(20, NULL, NULL, NULL),
	(21, NULL, NULL, NULL),
	(22, NULL, NULL, NULL),
	(23, NULL, NULL, NULL),
	(24, NULL, NULL, NULL),
	(25, NULL, NULL, NULL),
	(26, NULL, NULL, NULL),
	(27, NULL, NULL, NULL),
	(28, NULL, NULL, NULL),
	(29, NULL, NULL, NULL),
	(30, NULL, NULL, NULL),
	(31, NULL, NULL, NULL),
	(32, NULL, NULL, NULL),
	(33, NULL, NULL, NULL),
	(34, NULL, NULL, NULL),
	(35, NULL, NULL, NULL),
	(36, NULL, NULL, NULL),
	(37, NULL, NULL, NULL),
	(38, NULL, NULL, NULL),
	(39, NULL, NULL, NULL),
	(40, NULL, NULL, NULL),
	(41, NULL, NULL, NULL),
	(42, NULL, NULL, NULL),
	(43, NULL, NULL, NULL),
	(44, NULL, NULL, NULL),
	(45, NULL, NULL, NULL),
	(46, NULL, NULL, NULL),
	(47, NULL, NULL, NULL),
	(48, NULL, NULL, NULL),
	(49, NULL, NULL, NULL),
	(50, NULL, NULL, NULL),
	(51, NULL, NULL, NULL),
	(52, NULL, NULL, NULL),
	(53, NULL, NULL, NULL);
/*!40000 ALTER TABLE `turns_waiting_times` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.tvtablos
CREATE TABLE IF NOT EXISTS `tvtablos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `branches_id` int(11) unsigned NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.tvtablos: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `tvtablos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tvtablos` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.tvtablos_current_turns
CREATE TABLE IF NOT EXISTS `tvtablos_current_turns` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `turn_nomer` varchar(50) NOT NULL,
  `window_nomer` varchar(50) NOT NULL,
  `lang` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lang` (`lang`),
  CONSTRAINT `FK_tvtablos_current_turns_langs` FOREIGN KEY (`lang`) REFERENCES `langs` (`locale`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы rskbank.tvtablos_current_turns: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `tvtablos_current_turns` DISABLE KEYS */;
INSERT INTO `tvtablos_current_turns` (`id`, `turn_nomer`, `window_nomer`, `lang`) VALUES
	(1, 'А123', '12', 'RU'),
	(2, 'А534', '2', 'RU'),
	(4, 'П423', '1', 'RU');
/*!40000 ALTER TABLE `tvtablos_current_turns` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.tvtablos_options
CREATE TABLE IF NOT EXISTS `tvtablos_options` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tvtablos_id` int(11) unsigned DEFAULT NULL,
  `key` varchar(250) NOT NULL,
  `value` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.tvtablos_options: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `tvtablos_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `tvtablos_options` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.tvtablos_ticker
CREATE TABLE IF NOT EXISTS `tvtablos_ticker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tvtablo_text` mediumtext CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Дамп данных таблицы rskbank.tvtablos_ticker: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `tvtablos_ticker` DISABLE KEYS */;
INSERT INTO `tvtablos_ticker` (`id`, `tvtablo_text`) VALUES
	(1, 'This song and “Luka - Feelings” are the only things keeping me sane through these tough times. I just want to send love to everyone and let everyone know things wil');
/*!40000 ALTER TABLE `tvtablos_ticker` ENABLE KEYS */;

-- Дамп структуры для таблица rskbank.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name_u` varchar(250) NOT NULL,
  `login` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `position_id` int(11) unsigned NOT NULL,
  `branches_id` int(11) unsigned NOT NULL,
  `workplace_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `workplace_id` (`workplace_id`),
  KEY `FK_users_position` (`position_id`),
  CONSTRAINT `FK_users_position` FOREIGN KEY (`position_id`) REFERENCES `position` (`id`),
  CONSTRAINT `FK_users_workplaces` FOREIGN KEY (`workplace_id`) REFERENCES `workplaces` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.users: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name_u`, `login`, `password`, `position_id`, `branches_id`, `workplace_id`) VALUES
	(13, 'Doni', '123', '1234', 7, 15, 29),
	(14, 'Данияр', 'Дания', '234', 13, 15, 28),
	(15, 'Бак', 'test', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 9, 15, 28),
	(16, 'Максатбек', 'лог', '5d4dab03aba53586366b4c967c86e1f170490c74fc6263b27e106f82fe88a614', 7, 15, 27);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Дамп структуры для представление rskbank.view_services
-- Создание временной таблицы для обработки ошибок зависимостей представлений
CREATE TABLE `view_services` (
	`id` INT(11) UNSIGNED NOT NULL,
	`name` VARCHAR(250) NOT NULL COLLATE 'utf8_general_ci',
	`index` INT(11) UNSIGNED NOT NULL,
	`parent_id` INT(11) UNSIGNED NULL,
	`is_active` TINYINT(4) NOT NULL,
	`childrens` BIGINT(21) NULL
) ENGINE=MyISAM;

-- Дамп структуры для таблица rskbank.workplaces
CREATE TABLE IF NOT EXISTS `workplaces` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '',
  `window_nomer` varchar(50) DEFAULT NULL,
  `suffix` varchar(50) DEFAULT NULL,
  `user_id` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `FK_workplaces_users` (`user_id`),
  CONSTRAINT `FK_workplaces_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы rskbank.workplaces: ~7 rows (приблизительно)
/*!40000 ALTER TABLE `workplaces` DISABLE KEYS */;
INSERT INTO `workplaces` (`id`, `name`, `window_nomer`, `suffix`, `user_id`) VALUES
	(27, 'Окно 1', '1', NULL, NULL),
	(28, 'Окно 2', '2', NULL, NULL),
	(29, 'Касса 1', '3', NULL, NULL),
	(30, 'Касса 2', '4', NULL, NULL),
	(31, 'Юр. Лица', '5', NULL, NULL),
	(32, 'Окно 3', '6', NULL, NULL),
	(33, 'Оператор 1', '7', NULL, NULL);
/*!40000 ALTER TABLE `workplaces` ENABLE KEYS */;

-- Дамп структуры для представление rskbank.services_table
-- Удаление временной таблицы и создание окончательной структуры представления
DROP TABLE IF EXISTS `services_table`;
CREATE ALGORITHM=UNDEFINED DEFINER=`admin`@`%` SQL SECURITY DEFINER VIEW `services_table` AS select `p`.`id` AS `id`,`p`.`name` AS `parent`,(case when (`s1`.`name` <> 'NULL') then `s1`.`name` else 'Нет' end) AS `child1`,(case when (`s2`.`name` <> 'NULL') then `s2`.`name` else 'Нет' end) AS `child2`,(case when (`s3`.`name` <> 'NULL') then `s3`.`name` else 'Нет' end) AS `child3`,(case when (`s4`.`name` <> 'NULL') then `s4`.`name` else 'Нет' end) AS `child4`,(case when (`s5`.`name` <> 'NULL') then `s5`.`name` else 'Нет' end) AS `child5`,(case when (`s6`.`name` <> 'NULL') then `s6`.`name` else 'Нет' end) AS `child6`,(case when (`s7`.`name` <> 'NULL') then `s7`.`name` else 'Нет' end) AS `child7`,(case when (`s8`.`name` <> 'NULL') then `s8`.`name` else 'Нет' end) AS `child8` from ((((((((`services` `p` left join `services` `s1` on(((`p`.`id` = `s1`.`parent_id`) and (`s1`.`id` <> `s1`.`parent_id`)))) left join `services` `s2` on(((`s1`.`id` = `s2`.`parent_id`) and (`s2`.`id` <> `s2`.`parent_id`)))) left join `services` `s3` on(((`s2`.`id` = `s3`.`parent_id`) and (`s3`.`id` <> `s3`.`parent_id`)))) left join `services` `s4` on(((`s3`.`id` = `s4`.`parent_id`) and (`s4`.`id` <> `s4`.`parent_id`)))) left join `services` `s5` on(((`s4`.`id` = `s5`.`parent_id`) and (`s5`.`id` <> `s5`.`parent_id`)))) left join `services` `s6` on(((`s5`.`id` = `s6`.`parent_id`) and (`s6`.`id` <> `s6`.`parent_id`)))) left join `services` `s7` on(((`s6`.`id` = `s7`.`parent_id`) and (`s7`.`id` <> `s7`.`parent_id`)))) left join `services` `s8` on(((`s7`.`id` = `s8`.`parent_id`) and (`s8`.`id` <> `s8`.`parent_id`)))) where (`p`.`parent_id` = `p`.`id`);

-- Дамп структуры для представление rskbank.view_services
-- Удаление временной таблицы и создание окончательной структуры представления
DROP TABLE IF EXISTS `view_services`;
CREATE ALGORITHM=UNDEFINED DEFINER=`admin`@`%` SQL SECURITY DEFINER VIEW `view_services` AS select `s`.`id` AS `id`,`s`.`name` AS `name`,`s`.`index` AS `index`,`s`.`parent_id` AS `parent_id`,`s`.`is_active` AS `is_active`,(select count(`child`.`id`) from `services` `child` where ((`child`.`parent_id` = `s`.`id`) and (`child`.`id` <> `s`.`id`))) AS `childrens` from `services` `s`;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
