CREATE TABLE usuario_login (
                               id INT AUTO_INCREMENT PRIMARY KEY,
                               nombre_usuario VARCHAR(50) UNIQUE NOT NULL,
                               contrasena VARCHAR(40) NOT NULL
);

CREATE TABLE usuario_registro (
                                  id INT AUTO_INCREMENT PRIMARY KEY,
                                  nombre_usuario VARCHAR(50) UNIQUE NOT NULL,
                                  email VARCHAR(100) UNIQUE NOT NULL,
                                  contrasena VARCHAR(40) NOT NULL
);

CREATE TABLE IF NOT EXISTS `categorias_ingreso` (
                                                    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
                                                    `nombre_categoria` VARCHAR(60) NOT NULL UNIQUE
    );

-- Insertar categorías predefinidas
INSERT INTO `categorias_ingreso` (`nombre_categoria`) VALUES
                                                          ('Salario'),
                                                          ('Mesada'),
                                                          ('Pensión'),
                                                          ('Remesa'),
                                                          ('Cheque'),
                                                          ('Alquileres')
    ON DUPLICATE KEY UPDATE `nombre_categoria` = `nombre_categoria`; -- Para evitar errores si ya existen

-- Tabla para almacenar los ingresos
CREATE TABLE IF NOT EXISTS `ingresos` (
                                          `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
                                          `nombre_gasto` VARCHAR(60) NOT NULL,
    `total_ingreso` DECIMAL(10, 2) NOT NULL,
    `id_categoria` BIGINT NOT NULL,
    `fecha_ingreso` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`id_categoria`) REFERENCES `categorias_ingreso`(`id`)
    );

CREATE TABLE meta_ahorro (
                              id BIGINT AUTO_INCREMENT PRIMARY KEY,
                              nombre_meta VARCHAR(120) NOT NULL,
                              fecha_inicio DATE NOT NULL,
                              fecha_fin DATE NOT NULL,
                              monto_ahorro DECIMAL(10, 2) NOT NULL,
                              fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);