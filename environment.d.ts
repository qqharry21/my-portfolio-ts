declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test' | 'local';
    readonly NEXT_PUBLIC_BASE_URL: string;
    readonly NEXT_PUBLIC_MEASUREMENT_ID: string;
    readonly NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: string;
    readonly RESEND_API_KEY: string;
    readonly MONGODB_URI: string;
    readonly MONGODB_DB: string;
    readonly NOTION_API_KEY: string;
    readonly NOTION_DATABASE_ID: string;
    readonly NEXT_PUBLIC_WORK_STATUS: string;
  }
}
