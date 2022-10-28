import { BaseDatabase } from "../BaseDatabase"
import { UserDatabase } from "../UserDatabase"
import { PostsDatabase } from "../PostsDatabase"
import { LikesDatabase } from "../LikesDatabase"
import { users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserDatabase.Labook_Users};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.Labook_Users}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        `,
        `
        DROP TABLE IF EXISTS ${PostsDatabase.Labook_Posts};
        
        CREATE TABLE IF NOT EXISTS ${PostsDatabase.Labook_Posts}(
            id VARCHAR(255) PRIMARY KEY,
            content VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL UNIQUE, 
            FOREIGN KEY (user_id) REFERENCES Labook_Users (id))
        );
        `,
        `
        DROP TABLE IF EXISTS ${LikesDatabase.Labook_Likes};
        
        CREATE TABLE IF NOT EXISTS ${LikesDatabase.Labook_Likes}(
            id VARCHAR(255) PRIMARY KEY,
            posts_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (posts_id) REFERENCES Labook_Posts (id))
            user_id VARCHAR(255) NOT NULL UNIQUE, 
            FOREIGN KEY (user_id) REFERENCES Labook_Users (id))
        );
        `
        )
    }
    
  
    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.Labook_Users)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()