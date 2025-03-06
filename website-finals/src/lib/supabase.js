import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cwpwpemepewglnwycooj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3cHdwZW1lcGV3Z2xud3ljb29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMzQ2MTIsImV4cCI6MjA1NjgxMDYxMn0.Tke8tacQpCT-7Ypz72yenb4l_tWLjKpYlBOkdGYCl6o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
