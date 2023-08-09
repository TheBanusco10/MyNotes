import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL = 'https://iaqlkylqsgjhhgvwlpfw.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcWxreWxxc2dqaGhndndscGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1OTQzNTYsImV4cCI6MjAwNzE3MDM1Nn0.3EXkf76OIEg02KOlADS4OhdgHYoooDSwaWSePx00VHQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
