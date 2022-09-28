import { Client } from 'pg';
import dotenv from 'dotenv'
import * as bcrypt from 'bcrypt';
dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL || "postgres://jplsrpkremzjld:5d0b533b4da8df3e3201e40befb09c45df2bd43a89550295cd6b61919d3767a2@ec2-3-224-184-9.compute-1.amazonaws.com:5432/d9k8h8uopsh1su"
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
          dogName Text NOT NULL,
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
}

export async function isValidUser(details: any, serverRes: any) {
    client.query(`SELECT * FROM users
         WHERE email = '${details.email.toLowerCase()}';`, async (err: Error, res) => {
        if (err) throw err;

        const user: any = res.rows[0];
        if (user != null) {
            const isValidPass = await bcrypt.compare(details.password, user.password);
            if (isValidPass) {
                serverRes.send(JSON.stringify({ msg: "User-found", user_id: user.user_id }))
            }
            else
                serverRes.send(JSON.stringify("Invalid email or password"))

        } else {
            serverRes.send(JSON.stringify("Invalid email or password"))
        }
    });
}

export async function addNewUser(details: any, serverRes: any) {
    client.query(`SELECT * FROM users
         WHERE email = '${details.email.toLowerCase()}';`, async (err: Error, res) => {
        if (err) throw err;
        if (res.rows.length > 0) {
            serverRes.send(JSON.stringify("Email in use"))
        } else {
            const hashedPassword = await bcrypt.hash(details.password, 10)
            client.query(`INSERT INTO users (name, password, email) VALUES ('${details.full_name}', '${hashedPassword}', '${details.email.toLowerCase()}');`, (err: Error, _res) => {
                if (err) throw err;

                serverRes.send(JSON.stringify("user added"))
            })
        }
    })
}
export async function addNewDog(dogDetails: any, userId: string, serverRes: any) {
    client.query(`INSERT INTO dogs (name, age, type, chip_number, user_id) VALUES ('${dogDetails.name}', ${dogDetails.age}, '${dogDetails.type}', ${dogDetails.chipNumber}, ${userId});`, (err: Error, _res) => {
        if (err) throw err;

        serverRes.send(JSON.stringify("dog added"))
    });
}

export async function reserveWalk(walkDetails: any, userId: string, serverRes: any) {
    client.query(`INSERT INTO walk_reservations (date, time, location, dogName, price, walk_time, dog_id, user_id) VALUES ('${walkDetails.date}', '${walkDetails.time}', '${walkDetails.location}','${walkDetails.dogName}', ${walkDetails.price}, ${walkDetails.walk_time}, ${walkDetails.dogId}, ${userId});`, (err: Error, _res) => {
        if (err) throw err;

        serverRes.send(JSON.stringify("reservation added"))
    });
}

export async function getDogsByUserId(userId: string, serverRes: any) {
    client.query(`SELECT * FROM dogs
         WHERE user_id=${userId};`, (err: Error, res) => {
        if (err) throw err;
        if (res.rows.length > 0) {//user have dogs
            serverRes.send(JSON.stringify(res.rows))
        } else {//user dont have dogs
            serverRes.send(JSON.stringify("no dogs"))
        }
    })
}

export async function getUserReservation(userId: string, serverRes: any) {
    client.query(`SELECT * FROM walk_reservations
         WHERE user_id=${userId};`, (err: Error, res) => {
        if (err) throw err;

        serverRes.send(JSON.stringify(res.rows))
    })
}
