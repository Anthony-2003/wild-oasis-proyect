import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://kpxvqgxjmicjpojyfwgy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtweHZxZ3hqbWljanBvanlmd2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MzA0MzksImV4cCI6MjA4MTMwNjQzOX0.GBa8FW0Ona7Sr8PTHirloKJJmGuFDzeUrhwPZvnq43E";
const supabase = createClient(supabaseUrl, supabaseKey)

export const supabase2 = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storageKey: "s1",
    },
});

export default supabase;