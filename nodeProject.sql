-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 18, 2019 at 03:04 PM
-- Server version: 5.7.22-0ubuntu0.17.10.1
-- PHP Version: 7.1.19-1+ubuntu17.10.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodeProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `permissionRoles`
--

CREATE TABLE `permissionRoles` (
  `id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `permission_grant` tinyint(1) NOT NULL COMMENT '0 = deny, 1 = grant',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `permissionRoles`
--

INSERT INTO `permissionRoles` (`id`, `permission_id`, `role_id`, `permission_grant`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, '2019-03-15', '2019-03-15');

-- --------------------------------------------------------

--
-- Table structure for table `Permissions`
--

CREATE TABLE `Permissions` (
  `id` int(11) NOT NULL,
  `module` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `permission_key` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Permissions`
--

INSERT INTO `Permissions` (`id`, `module`, `title`, `permission_key`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'create', '123', '2019-03-15', '2019-03-15');

-- --------------------------------------------------------

--
-- Table structure for table `Resources`
--

CREATE TABLE `Resources` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Resources`
--

INSERT INTO `Resources` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2019-03-18', '2019-03-18');

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2019-03-15', '2019-03-15'),
(2, 'user', '2019-03-15', '2019-03-15'),
(14, 'admin manager ', '2019-03-18', '2019-03-18');

-- --------------------------------------------------------

--
-- Table structure for table `userRoles`
--

CREATE TABLE `userRoles` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userRoles`
--

INSERT INTO `userRoles` (`id`, `role_id`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2019-03-15', '2019-03-15'),
(3, 2, 1, '2019-03-18', '2019-03-18');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'sohit123@gmail.com', '$2b$10$1vq3JFOINlOSxt7GrjZCp.VxQ6YmrvNA8znt/DhuOI307SzbKeQVa', '2019-03-13', '2019-03-13'),
(2, 'sohit@gmail.com', '$2b$10$ThlOCkcrl.zrZ73Un1ph8.nIYfVrM5WixOkHxXcAHuB30vWhu.TG2', '2019-03-15', '2019-03-15'),
(4, 'sohit13@gmail.com', '$2b$10$.0z2DwYyG2I.XA7VIAjU0uzSndNzRbb9utsG9NKAh/a6/Jp4vrvdK', '2019-03-16', '2019-03-16'),
(7, 'sohit458888888@gmail.com', '$2b$10$fFzM8ZffX5JmVNv/JgICoua6lUGLTa0lFQVZXor4O22t2CarRgrhi', '2019-03-16', '2019-03-16'),
(9, 'sohit13455555@gmail.com', '$2b$10$ggXLgFkRcRsVPw3xNEWwT.S4LsxWHkT69Bokh9ZViLa6ibCpFpExW', '2019-03-16', '2019-03-16'),
(10, 'sohit1235566@gmail.com', '$2b$10$EOBYZZ4LRCxlI7erSVASsOJcuR0ZkrU/8tt4oVu9sXlunI9Frk0fC', '2019-03-16', '2019-03-16'),
(12, 'sohit123556@gmail.com', '$2b$10$iWjN379NmmTBJ8K4mN4b6eWYWxs3uiBaTi4fiVFm/AvqBxyhz0B.S', '2019-03-16', '2019-03-16'),
(14, 'sohit1256@gmail.com', '$2b$10$I8LBEVRv/vG7CzvOy/NkrucX7eODQgWvVX5GeRg9Qhs2dli5g/DCu', '2019-03-16', '2019-03-16'),
(19, 'sohit458888888@gmail.comgg', '$2b$10$x3b2qOKsa5Z4w5skrfRhVeessyaOnRN1UkAbDAY.b9YP3lbR2h4L6', '2019-03-16', '2019-03-16'),
(20, 'sohit45888888xxxxx8@gmail.comgg', '$2b$10$sgbvxO7GZXNJ4ETGxl.1iO.Fnhw91mv9TXFSfcrkSO6k72L1l5RhO', '2019-03-16', '2019-03-16'),
(26, 'ss@DFFF', '$2b$10$aDAhIiRoLr92G0iDlgsquuXpo70Px/w0O06JLQBkZUubhoFeO.P3K', '2019-03-16', '2019-03-16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `permissionRoles`
--
ALTER TABLE `permissionRoles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permission_id` (`permission_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `Permissions`
--
ALTER TABLE `Permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Resources`
--
ALTER TABLE `Resources`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `userRoles`
--
ALTER TABLE `userRoles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permission_id` (`role_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `permissionRoles`
--
ALTER TABLE `permissionRoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Permissions`
--
ALTER TABLE `Permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Resources`
--
ALTER TABLE `Resources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `userRoles`
--
ALTER TABLE `userRoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
