import { Client } from 'pg';
import dotenv from 'dotenv'

dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL
export const client = new Client({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();
initDb(); //create the tables
//@ts-ignore
async function initDb() {
    await client.query(
        `CREATE TABLE IF NOT EXISTS users(
          user_id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          password TEXT NOT NULL,
          email TEXT NOT NULL
      );`
    );

    await client.query(
        `CREATE TABLE IF NOT EXISTS dogs(
          dog_id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          age INTEGER NOT NULL,
          type TEXT NOT NULL,
          chip_number INTEGER NOT NULL,
          user_id INTEGER,
          CONSTRAINT FK_userId FOREIGN KEY(user_id)
          REFERENCES users(user_id)
      );`
    );

    await client.query(
        `CREATE TABLE IF NOT EXISTS walk_reservations(
          reservation_id SERIAL PRIMARY KEY,
          date DATE NOT NULL,
          time TIME NOT NULL,
          location Text NOT NULL,
          price INTEGER NOT NULL,
          walk_time INTEGER NOT NULL,
          dog_id INTEGER,
          CONSTRAINT FK_dogId FOREIGN KEY(dog_id)
          REFERENCES dogs(dog_id),
          user_id INTEGER,
          CONSTRAINT FK_userId FOREIGN KEY(user_id)
          REFERENCES users(user_id)
      );`
    );

    await client.query(
        `CREATE TABLE IF NOT EXISTS reservations_history(
            resevation_history_id SERIAL PRIMARY KEY,
            date DATE NOT NULL,
            price INTEGER NOT NULL,
            dog_id INTEGER,
            CONSTRAINT FK_dogId FOREIGN KEY(dog_id)
            REFERENCES dogs(dog_id), 
            user_id INTEGER,
            CONSTRAINT FK_userId FOREIGN KEY(user_id)
            REFERENCES users(user_id),
            reservation_id INTEGER,
            CONSTRAINT FK_reservationId FOREIGN KEY(reservation_id)
            REFERENCES walk_reservations(reservation_id)
        );`
    );

    // await client.query(
    //     `INSERT INTO users (name, password, email) VALUES ('yuval cassuto', '123456789', 'yuval@gmail.com');`
    // );

    // await client.query(
    //     `INSERT INTO dogs (name,age,type,chip_number,user_id) VALUES ('Blue', 11, 'Husky', 206969, 1);`
    // );

    // await client.query(
    //     `INSERT INTO walk_reservations (date,time,location,price,walk_time,dog_id,user_id) VALUES ('2022-10-09', '12:00:00', 'Hod-Hasharon', 40, 30, 1, 1);`
    // );

    // await client.query(
    //     `INSERT INTO locations_history (arrival_date,departure_date, location_id, sock_id) VALUES ('1945-11-13', '1945-11-12',1, 1);`
    // );
}

export async function isValidUser(details: any, serverRes: any) {//return true or false if a user is exist
    const specialCharsForPassowrd = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const specialCharsForEmail = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

    if (!specialCharsForPassowrd.test(details.password) && !specialCharsForEmail.test(details.email)) {
        client.query(`SELECT * FROM users
         WHERE email = '${details.email}' 
         AND password = '${details.password}';`, (err: Error, res) => {
            if (err) throw err;

            if (res.rows.length > 0) {
                serverRes.send(JSON.stringify({ msg: "User-found", user_id: res.rows[0].user_id }))
            } else {
                serverRes.send(JSON.stringify({ msg: "Invalid email or password" }))
            }
        });
    } else {
        serverRes.send(JSON.stringify({ msg: "Sqli attemp" }))
    }
}

