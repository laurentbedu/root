-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  lun. 17 fév. 2020 à 10:15
-- Version du serveur :  8.0.18
-- Version de PHP :  7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dbone`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`, `created`, `modified`) VALUES
(1, 'Fashion', '2014-06-01 00:35:07', '2014-05-30 15:34:33'),
(2, 'Electronics', '2014-06-01 00:35:07', '2014-05-30 15:34:33'),
(3, 'Motors', '2014-06-01 00:35:07', '2014-05-30 15:34:54');

-- --------------------------------------------------------

--
-- Structure de la table `link_rigths_role`
--

DROP TABLE IF EXISTS `link_rigths_role`;
CREATE TABLE IF NOT EXISTS `link_rigths_role` (
  `rigths_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`rigths_id`,`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `link_rigths_role`
--

INSERT INTO `link_rigths_role` (`rigths_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(250) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `category_id`, `image`, `created`, `modified`, `role_id`) VALUES
(3, 'toto', 'How about no? 123', 699, 1, 'telechargement.jpeg', '2019-09-16 20:46:01', '2019-09-13 16:22:27', 1),
(8, 'Samsung Galaxy Tab 10.1', 'Good tablet.', 259, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2014-05-31 00:14:08', 1),
(9, 'Spalding Watch', 'My sports watch.', 199, 1, 'telechargement.jpeg', '2014-06-01 01:18:36', '2014-05-31 00:18:31', 1),
(10, 'Sony Smart Watch', 'The coolest smart watch!', 300, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2014-06-05 16:09:51', 1),
(11, 'Huawei Y300', 'For testing purposes.', 100, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2014-06-05 16:10:54', 1),
(12, 'Abercrombie Lake Arnold Shirt', 'Perfect as gift!', 60, 1, 'telechargement.jpeg', '2014-06-06 17:12:21', '2014-06-05 16:12:11', 1),
(13, 'Abercrombie Allen Brook Shirt', 'Cool red shirt!', 70, 1, 'telechargement.jpeg', '2014-06-06 17:12:59', '2014-06-05 16:12:49', 1),
(25, 'Abercrombie Allen Anew Shirt', 'Awesome new shirt!', 99, 1, 'telechargement.jpeg', '2014-11-22 18:42:13', '2014-11-21 18:42:13', 1),
(26, 'Another product', 'Awesome product!', 555, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2014-11-21 19:07:34', 1),
(49, 'Samsung Galaxy S4', 'How about no? 123', 69, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2019-09-13 16:22:27', 1),
(50, 'Lenovo Laptop', 'My business partner.', 399, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2014-05-31 00:13:39', 1),
(59, 'Google Nexus 4', 'The most awesome phone ', 29, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2019-09-13 16:09:42', 1),
(60, 'Samsung Galaxy S4', 'How about no? 123', 69, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2019-09-13 16:22:27', 1),
(61, 'Lenovo Laptop', 'My business partner.', 399, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2014-05-31 00:13:39', 1),
(62, 'Samsung Galaxy Tab 10.1', 'Good tablet.', 259, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2014-05-31 00:14:08', 1),
(63, 'Spalding Watch', 'My sports watch.', 199, 1, 'telechargement.jpeg', '2014-06-01 01:18:36', '2014-05-31 00:18:31', 1),
(64, 'Sony Smart Watch', 'The coolest smart watch!', 300, 2, 'telechargement.jpeg', '2019-09-16 20:46:01', '2014-06-05 16:09:51', 1),
(66, 'Abercrombie Lake Arnold Shirt', 'Perfect as gift!', 60, 1, 'telechargement.jpeg', '2014-06-06 17:12:21', '2014-06-05 16:12:11', 1),
(67, 'Abercrombie Allen Brook Shirt', 'Cool red shirt!', 70, 1, 'telechargement.jpeg', '2014-06-06 17:12:59', '2014-06-05 16:12:49', 1),
(68, 'Abercrombie Allen Anew Shirt', 'Awesome new shirt!', 999, 1, 'telechargement.jpeg', '2014-11-22 18:42:13', '2014-11-21 18:42:13', 1),
(79, 'sdfgsdf', 'sdfgsdfg', 666, 1, '15813282895103.jpeg', '2020-02-10 10:51:29', '2020-02-10 09:51:29', 1),
(80, 'nomdema categ', '...', 0, 0, '', '2020-02-12 13:09:55', '2020-02-12 12:09:55', 1),
(81, 'nomdema categ', '...', 0, 0, '', '2020-02-12 13:17:27', '2020-02-12 12:17:27', 1),
(82, 'nomdema categ', '...', 0, 0, '', '2020-02-12 13:37:33', '2020-02-12 12:37:33', 1),
(83, 'nomdema categ', '...', 0, 0, '', '2020-02-12 13:37:35', '2020-02-12 12:37:35', 1),
(84, 'nomdema categ', '...', 0, 0, '', '2020-02-12 13:39:18', '2020-02-12 12:39:18', 1),
(85, 'nomdema categ', '...', 0, 0, '', '2020-02-12 13:39:33', '2020-02-12 12:39:33', 1),
(86, 'mon nom', 'fsgsdfg', 1231, 1, 'sfdgsdfg.png', '2020-02-13 10:32:18', '2020-02-13 09:32:18', 1),
(87, 'nomdema', '...', 0, 0, '', '2020-02-13 10:35:51', '2020-02-13 09:35:51', 1);

-- --------------------------------------------------------

--
-- Structure de la table `rigths`
--

DROP TABLE IF EXISTS `rigths`;
CREATE TABLE IF NOT EXISTS `rigths` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entity` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `crud` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `rigths`
--

INSERT INTO `rigths` (`id`, `entity`, `crud`) VALUES
(1, 'create products', 'premet de créer de nouveaux produits'),
(2, 'update products', 'permet de modifier les produits existants'),
(3, 'read products', 'permet de consulter les produits existants');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'visitor');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `email`, `password`, `token`, `role_id`) VALUES
(1, 'admin', 'admin@email.fr', '$2y$10$nEROI7pBeoWxQKQ80Ya.vOzz5wxZGPA1KqvhMTvokjAhgsvvfv8b2', '', 1),
(2, 'michel', 'michel@email.fr', '$2y$10$FUKspNFiqGySDv4YPfPIFe6.jtNXM0sfHFR4c2pb.fPSXSkzyAXQa\r\n', '', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
