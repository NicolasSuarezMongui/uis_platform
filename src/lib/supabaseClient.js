import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://zhicgubvwumziphxflzp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoaWNndWJ2d3VtemlwaHhmbHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MTU2NTgsImV4cCI6MjAyODk5MTY1OH0.qz4msIrp2GrZkiUthsAUwupaOA_h_p5YVHH7iFZnB2U'
)
