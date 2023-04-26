import { createPool, Pool } from 'mysql2/promise';
import { dbConfig } from './config';

export class DB {
  private static pool: Pool;

  static async connect(): Promise<void> {
    DB.pool = createPool(dbConfig);
    await DB.pool.getConnection();
  }

  static async disconnect(): Promise<void> {
    await DB.pool.end();
  }

  static async query(sql: string, values?: any[]): Promise<any> {
    const [rows] = await DB.pool.query(sql, values);
    return rows;
  }
}
