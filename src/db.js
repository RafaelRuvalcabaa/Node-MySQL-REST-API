
import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "1800",
  port: 3306,
  database: "companydb",
});

export { pool}; 
