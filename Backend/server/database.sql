
Table Users {
  id serial  [primary key]
  username varchar
  password varchar
  email varchar [unique]
  role integer
  created_at timestamp [default: `now()`]

}

Table Restaurant {
  id serial  [primary key]
  name varchar
  description text
  created_date timestamp [default: `now()`]
  address  varchar
  type_restaurant varchar
  commander boolean
  reserver boolean
  picture bytea

}

Table Commande {
  id serial [primary key]
  user_id integer 
  restaurant_id integer 
  plat_commande varchar
  montant_total decimal
  etat_commande varchar
  created_at timestamp [default: `now()`]
}

Table Reservation {
  id serial [primary key]
  user_id integer 
  restaurant_id integer 
  nombre_personnes integer
  date_reservation date
  etat_reservation varchar
  created_at timestamp [default: `now()`]
}

Table Payment {
  id serial [primary key]
  user_id integer 
  order_id integer 
  reservation_id integer 
  amount decimal
  payment_status varchar
  payment_method varchar
  transaction_id varchar
  created_at timestamp [default: `now()`]
}




Ref: "users"."id" < "Commande"."user_id"

Ref: "users"."id" < "Reservation"."user_id"

Ref: "Restaurant"."id" < "Reservation"."restaurant_id"

Ref: "Restaurant"."id" < "Commande"."restaurant_id"

Ref: "Payment"."reservation_id" < "Reservation"."id"

Ref: "Payment"."user_id" < "users"."id"

Ref: "Payment"."order_id" < "Commande"."id"