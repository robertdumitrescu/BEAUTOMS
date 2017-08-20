ALTER TABLE `measurements`
	ADD COLUMN `lightIntensity` INT(11) UNSIGNED NULL DEFAULT NULL AFTER `lightElectricalQuantity`;