// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bblgfhohvypxhfvvdwpb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJibGdmaG9odnlweGhmdnZkd3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MjQ4MTEsImV4cCI6MjA2NDEwMDgxMX0.vp8IG0gOMN_78cbeCi71A9i-6eyLLvA-EV0_GkxwNz8'; // chave pública do projeto
export const supabase = createClient(supabaseUrl, supabaseKey);
