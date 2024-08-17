import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://qkpxunvgmdsijnhhbean.supabase.co/'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrcHh1bnZnbWRzaWpuaGhiZWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNjIyMDcsImV4cCI6MjAzODczODIwN30.d3I94oEPgh9qUhIp3051EqqLPJOKB5aXrD4E5ErkA-8";
const supabase = createClient(supabaseUrl, supabaseKey)

export const supabase2 = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storageKey: "s1",
    },
});

export default supabase;