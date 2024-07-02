import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://fnesatyujdskubwgffwt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZXNhdHl1amRza3Vid2dmZnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1ODU4NzgsImV4cCI6MjAzNTE2MTg3OH0.UKHV3UwE07af5FVRn4KoRfiL__oAgy2xCQJ5scWacoc'
)