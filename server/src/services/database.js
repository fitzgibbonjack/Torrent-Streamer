import mysql from "mysql";

class Database {
	constructor() {
		this.connection = mysql.createConnection({
			host: process.env.MYSQL_HOST || "database",
			user: process.env.MYSQL_USER || "root",
			password: process.env.MYSQL_PASSWORD || "root",
		});
	}

	connect() {
		this.connection.connect((error) => {
			if (error) throw error;
			console.log("Database connected.");
		});
	}
}

export default Database;
