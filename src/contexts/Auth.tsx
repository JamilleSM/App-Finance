import React, {createContext, useState, ReactNode} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<any>(null);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<any>({
    nome: 'Jamille Teste',
  });

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
