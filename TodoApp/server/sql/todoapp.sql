DROP DATABASE IF EXISTS `todoapp_db`;
CREATE DATABASE `todoapp_db`;
USE `todoapp_db`;

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id`          int unsigned NOT NULL AUTO_INCREMENT,
  `title`       VARCHAR(255) NOT NULL,
  `description` text         NOT NULL,
  `status`      int unsigned NOT NULL,
  `color`       VARCHAR(7)   NOT NULL,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;