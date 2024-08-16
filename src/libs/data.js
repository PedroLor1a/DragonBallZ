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
    console.log("Characters insertados correctamente en la base de datos.");
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

export async function getCharactersOrderAsc() {
  try {
    const charactersAsc =
      await sql`SELECT characters.id,characters.name,characters.ki,characters.maxki,characters.race,characters.gender,characters.description,characters.image,characters.affiliation FROM characters ORDER BY characters.name ASC`;
    return charactersAsc.rows;
  } catch (error) {
    console.error({ error: error.message });
  }
}

export async function getCharactersOrderDesc() {
  try {
    const charactersDesc =
      await sql`SELECT characters.id,characters.name,characters.ki,characters.maxki,characters.race,characters.gender,characters.description,characters.image,characters.affiliation FROM characters ORDER BY characters.name DESC`;
    return charactersDesc.rows;
  } catch (error) {
    console.error({ error: error.message });
  }
}

export async function getCharactersByName(query) {
  try {
    const charactersByName =
      await sql`SELECT * FROM characters WHERE characters.name ILIKE ${`%${query}%`} 
    ORDER BY characters.name DESC
    LIMIT 6`;
    return charactersByName.rows;
  } catch (error) {
    console.error({ error: message.error });
  }
}

export async function createPlanetsInDB() {
  try {
    const res = await axios("https://dragonball-api.com/api/planets?limit=25");
    const planets = res.data.items;
    for (const item of planets) {
      await sql`INSERT INTO planets(name, isDestroyed, description, image)
        VALUES (${item.name}, ${item.isDestroyed}, ${item.description}, ${item.image})`;
    }
    console.log("Planetas insertados correctamente en la base de datos.");
  } catch (error) {
    console.error({ error: error.message });
  }
}

export async function getPlanets() {
  try {
    const { rows } = await sql`SELECT * FROM planets`;
    return rows;
  } catch (error) {
    console.error({ error: error.message });
  }
}
