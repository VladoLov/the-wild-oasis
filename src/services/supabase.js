import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yrrlghbkzlrmkfxcchlc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlycmxnaGJremxybWtmeGNjaGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4ODkyMDUsImV4cCI6MjAzMjQ2NTIwNX0.D2yKZBKrQIO10c1n-4EYEBcZRVkWY-XMt1cxUr_TEyg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
