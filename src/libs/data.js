import { sql } from "@vercel/postgres";
import axios from "axios";

export async function createCharactersInDB() {
  try {
    const res = await axios(
      "https://dragonball-api.com/api/characters?limit=78"
    );
    const characters = res.data.items;
    // console.log(characters.items, "CHARACTERS");
    for (const item of characters) {
      await sql`INSERT INTO characters(name, ki, maxki, race, gender, description, image, affiliation)
        VALUES (${item.name}, ${item.ki}, ${item.maxKi}, ${item.race}, ${item.gender}, ${item.description}, ${item.image}, ${item.affiliation})`;
    }
    // console.log("Characters insertados correctamente en la base de datos.");
  } catch (error) {
    console.error({ error: error.message });
  }
}

export async function getCharacters() {
  try {
    const { rows } = await sql`SELECT * FROM characters`;
    return rows;
  } catch (error) {
    console.error({ error: error.message });
  }
}
