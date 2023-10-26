-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-10-2023 a las 03:20:36
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año_publicacion` date NOT NULL,
  `isbn` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `año_publicacion`, `isbn`) VALUES
(1, 'CIEN AÑOS DE SOLEDAD (C.A.100)', 'Garcia Marquez, Gabriel', 'Novela', '1989-01-01', '9788423919000'),
(2, 'Don Quijote de la Mancha', 'Cervantes', 'Novela', '1987-01-01', '9788420727967'),
(3, 'Viaje al centro de la tierra', 'Verne', 'Ficcion', '2008-01-01', '9788498721119'),
(4, 'El Señor de los Anillos', 'J.R.R. Tolkien', 'Fantasía', '1954-01-01', '978-84-9838-6'),
(5, 'La Odisea', 'Homero', 'Epopeya', '0001-01-01', '978-84-941614'),
(6, 'El Quijote de la Mancha', 'Miguel de Cervantes', 'Novela', '1605-01-01', '978-84-9788-8'),
(7, 'Cien años de soledad', 'Gabriel García Márquez', 'Novela', '1967-01-01', '978-84-339-05'),
(8, 'La metamorfosis', 'Franz Kafka', 'Novela corta', '1915-01-01', '978-84-339-02'),
(9, 'El principito', 'Antoine de Saint-Exupéry', 'Novela corta', '1943-01-01', '978-84-339-12'),
(10, 'Los miserables', 'Victor Hugo', 'Novela', '1862-01-01', '978-84-339-12'),
(11, 'Hamlet', 'William Shakespeare', 'Tragedia', '1603-01-01', '978-84-339-12'),
(13, 'Harry Potter y la piedra filos', 'J.K. Rowling', 'Fantasia', '1997-01-01', '9788478884499'),
(14, 'La Biblia', 'Dios', 'Religión', '0001-01-01', '9788422015001');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
