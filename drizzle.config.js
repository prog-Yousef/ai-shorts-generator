/** @type {import('drizzle-kit').Config} */
export default {
    schema: "./configs/schema.js",
    dialect:"postgresql",
    dbCredentials: {
        url: 'postgresql://accounts:7Ws1YiIcbDXN@ep-wild-firefly-a24hjxi7.eu-central-1.aws.neon.tech/ai-shorts-generator?sslmode=require'

    }
};