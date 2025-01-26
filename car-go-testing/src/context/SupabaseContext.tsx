import React, { createContext, useContext } from 'react'
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

export const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
export const SupabaseContext = createContext(supabase);

export const SupabaseProvider = ({ children }) => {
  
  return (

    <SupabaseContext.Provider value={supabaseClient}>

      {children}

    </SupabaseContext.Provider>

  );

};

export const useSupabase = () => useContext(SupabaseContext);

