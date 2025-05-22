/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_RP3aJNOmixG0@ep-noisy-forest-a50p0e9p-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
}