import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://supabase.gaetanoficarra.de";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc3NDY1NDc0MCwiZXhwIjo0OTMwMzI4MzQwLCJyb2xlIjoiYW5vbiJ9.paW1Vtr0IFHdBv3ErFqCAlmdXu4aDfB-aZtEwiBwa2M";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  cover_image: string | null;
  published_at: string | null;
  published: boolean;
  created_at?: string;
  updated_at?: string;
}
