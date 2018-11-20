insert into usuario (nome, email, senha)
values('Administrador', 'admin@softplan.com.br', '$2a$10$i2/v4r4x34AmxHpKxbL3QeEb6z3/7fO/4Y4nvBCF3Yd1MHeuWkPmK');

INSERT INTO role
(nome)
VALUES('ADMIN'), ('TRIADOR'), ('FINALIZADOR');

INSERT INTO users_roles
(user_id, role_id)
VALUES(1, 1), (1, 2), (1, 3);
