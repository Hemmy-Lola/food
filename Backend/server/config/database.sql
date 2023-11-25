-- Aprés être rentrer dans votre database a l'aide de cette commande
-- psql -U postgres -h localhost
-- normalement votre mdp est root
-- ensuite faire un copier coller du script
CREATE DATABASE food
WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Utilisation de la base de données nouvellement créée
\c food

-- Création de la table Users
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    email VARCHAR UNIQUE,
    role INTEGER,
    created_at TIMESTAMP DEFAULT now()
);

-- Création de la table Restaurant
CREATE TABLE Restaurant (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    description TEXT,    
    address VARCHAR,
    type_restaurant VARCHAR,
    commander BOOLEAN,
    reserver BOOLEAN,
    picture VARCHAR,
    created_date TIMESTAMP DEFAULT now(),
);

-- Création de la table Commande
CREATE TABLE Commande (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    restaurant_id INTEGER REFERENCES Restaurant(id),
    plat_commande VARCHAR,
    montant_total DECIMAL,
    etat_commande VARCHAR,
    created_at TIMESTAMP DEFAULT now()
);

-- Création de la table Reservation
CREATE TABLE Reservation (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    restaurant_id INTEGER REFERENCES Restaurant(id),
    nombre_personnes INTEGER,
    date_reservation DATE,
    etat_reservation VARCHAR,
    created_at TIMESTAMP DEFAULT now()
);

-- Création de la table Payment
CREATE TABLE Payment (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    order_id INTEGER REFERENCES Commande(id),
    reservation_id INTEGER REFERENCES Reservation(id),
    amount DECIMAL,
    payment_status VARCHAR,
    payment_method VARCHAR,
    transaction_id VARCHAR,
    created_at TIMESTAMP DEFAULT now()
);

-- Contraintes de clé étrangère supplémentaires
ALTER TABLE Commande ADD CONSTRAINT fk_user_id_cmd FOREIGN KEY (user_id) REFERENCES Users(id);
ALTER TABLE Reservation ADD CONSTRAINT fk_user_id_res FOREIGN KEY (user_id) REFERENCES Users(id);
ALTER TABLE Reservation ADD CONSTRAINT fk_restaurant_id FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id);
ALTER TABLE Commande ADD CONSTRAINT fk_restaurant_id_cmd FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id);
ALTER TABLE Payment ADD CONSTRAINT fk_reservation_id FOREIGN KEY (reservation_id) REFERENCES Reservation(id);
ALTER TABLE Payment ADD CONSTRAINT fk_user_id_pay FOREIGN KEY (user_id) REFERENCES Users(id);
ALTER TABLE Payment ADD CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES Commande(id);
