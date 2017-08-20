-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.17-0ubuntu0.16.04.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.4.0.5142
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for automs
CREATE DATABASE IF NOT EXISTS `automs` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `automs`;


CREATE TABLE `measurements` (
	`id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
	`lightElectricalQuantity` INT(11) UNSIGNED NULL DEFAULT NULL,
	`createdDateTIme` DATETIME NULL DEFAULT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB;
