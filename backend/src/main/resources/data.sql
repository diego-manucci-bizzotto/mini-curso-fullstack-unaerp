

INSERT INTO ATIVIDADE (titulo, descricao, responsavel, qtdInscrito) VALUES
                                                                        ('Workshop de Programação', 'Aprenda os fundamentos da programação', 'Carlos Silva', 30),
                                                                        ('Curso de Design Gráfico', 'Técnicas avançadas de design', 'Ana Pereira', 25),
                                                                        ('Seminário de Inteligência Artificial', 'Discussão sobre as últimas tendências em IA', 'Mariana Costa', 50);

INSERT INTO PARTICIPANTE (nome, urlImagem) VALUES
                                               ('João Souza', 'https://example.com/imagens/joao.jpg'),
                                               ('Maria Oliveira', 'https://example.com/imagens/maria.jpg'),
                                               ('Pedro Santos', 'https://example.com/imagens/pedro.jpg');


INSERT INTO ATIVIDADE_PARTICIPANTE (idAtividade, idParticipante, dtInscricao) VALUES
                                                                                  (1, 1, '2024-05-01'),
                                                                                  (1, 2, '2024-05-02'),
                                                                                  (2, 3, '2024-05-03'),
                                                                                  (3, 1, '2024-05-04'),
                                                                                  (3, 2, '2024-05-05');
