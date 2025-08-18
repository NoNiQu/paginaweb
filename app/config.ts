// src/config.ts
function getEnvVar(key: string): string {
  const value = import.meta.env[key] as string | undefined;
  if (!value) throw new Error(`❌ Falta la variable de entorno: ${key}`);
  return value;
}

export const config = {
  instagramUrl: getEnvVar("VITE_INSTAGRAM_URL"),
  facebookUrl: getEnvVar("VITE_FACEBOOK_URL"),
  contactEmail: getEnvVar("VITE_CONTACT_EMAIL"),

  addressTitle: getEnvVar("VITE_ADDRESS_TITLE"),
  addressCityLine: getEnvVar("VITE_ADDRESS_CITYLINE"),

  bizumCode: getEnvVar("VITE_BIZUM_CODE"),

  portersEmail: getEnvVar("VITE_PORTADORES_EMAIL"),
};
