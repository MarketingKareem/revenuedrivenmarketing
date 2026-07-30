/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_GTM_ID?: string;
	readonly PUBLIC_GSC_VERIFICATION?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
