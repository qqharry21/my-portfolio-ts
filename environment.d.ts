declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test' | 'local';
    readonly NEXT_PUBLIC_BASE_URL: string;
    readonly NEXT_PUBLIC_MEASUREMENT_ID: string;
    readonly NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: string;
    readonly RESEND_API_KEY: string;
  }
}
