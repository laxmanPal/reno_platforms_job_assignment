import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

export const getSchoolsFromDB = async ()=>{
   const [rows] = await pool.query("SELECT * FROM schools");

   return rows;
}


export const addSchoolToDB = async ( name, address, city, state, contact, image, email_id)=>{
   const sql = "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
   const [result] = await pool.query(sql, [name, address, city, state, contact, image, email_id]);
   return result;
}