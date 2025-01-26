import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    publicSupabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    publicSupabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }
};

export default nextConfig;
