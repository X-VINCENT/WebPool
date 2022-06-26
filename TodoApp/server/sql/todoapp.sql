DROP DATABASE IF EXISTS `todoapp-db`;
CREATE DATABASE `todoapp-db`;
USE `todoapp-db`;

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id`          int unsigned NOT NULL AUTO_INCREMENT,
  `title`       VARCHAR(255) NOT NULL,
  `description` text         NOT NULL,
  `status`      int unsigned NOT NULL,
  `color`       VARCHAR(7)   NOT NULL,
  UNIQUE KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;