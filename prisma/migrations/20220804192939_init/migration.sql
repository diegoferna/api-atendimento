-- CreateTable
CREATE TABLE `Funcionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pessoa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `lastName` VARCHAR(60) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL,

    UNIQUE INDEX `Pessoa_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Visitas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `note` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `ativo` BOOLEAN NOT NULL,
    `idFuncionario` INTEGER NOT NULL,
    `idPessoa` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Visitas` ADD CONSTRAINT `Visitas_idFuncionario_fkey` FOREIGN KEY (`idFuncionario`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Visitas` ADD CONSTRAINT `Visitas_idPessoa_fkey` FOREIGN KEY (`idPessoa`) REFERENCES `Pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
