CREATE TABLE ATIVIDADE (
                           idAtividade BIGINT AUTO_INCREMENT PRIMARY KEY,
                           titulo VARCHAR(80) NOT NULL,
                           descricao VARCHAR(255) NOT NULL,
                           responsavel VARCHAR(255) NOT NULL,
                           qtdInscrito INT
);


CREATE TABLE PARTICIPANTE (
                              idParticipante BIGINT AUTO_INCREMENT PRIMARY KEY,
                              nome VARCHAR(90),
                              urlImagem VARCHAR (255)
);


CREATE TABLE ATIVIDADE_PARTICIPANTE (
                                        idAtividadeParticipante BIGINT AUTO_INCREMENT PRIMARY KEY,
                                        idAtividade BIGINT,
                                        idParticipante BIGINT,
                                        dtInscricao DATE,
                                        CONSTRAINT FK_ATIVIDADE
                                            FOREIGN KEY (idAtividade) REFERENCES ATIVIDADE(idAtividade),
                                        CONSTRAINT FK_PARTICIPANTE
                                            FOREIGN KEY (idParticipante) REFERENCES PARTICIPANTE(idParticipante)
);