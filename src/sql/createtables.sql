CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE
);

CREATE TABLE phones (
    id SERIAL PRIMARY KEY,
    number CHAR(11) NOT NULL UNIQUE,
    description VARCHAR(255),
    id_carrier INT NOT NULL,
    id_client INT NOT NULL,
    FOREIGN KEY (id_carrier) REFERENCES carriers (id),
    FOREIGN KEY (id_client) REFERENCES clients (id)
);


CREATE TABLE recharges (
    id SERIAL PRIMARY KEY,
    id_phone INT NOT NULL,
    id_carrier INT NOT NULL,
    carrier_name VARCHAR(255) NOT NULL,
    id_client INT NOT NULL,
    recharge_value INT NOT NULL,
	recharge_date DATE NOT NULL,
	
    FOREIGN KEY (id_phone) REFERENCES phones (id),
    FOREIGN KEY (id_carrier) REFERENCES carriers (id),
    FOREIGN KEY (id_client) REFERENCES clients (id)
);
