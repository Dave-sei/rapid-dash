import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoginForm } from '@/components/LoginForm';
import { ResetPasswordForm } from '@/components/ResetPasswordForm';
import { Dashboard } from '@/pages/Dashboard';

const Index = () => {
  const { user } = useAuth();
  const [currentForm, setCurrentForm] = useState<'login' | 'reset'>('login');

  if (user) {
    return <Dashboard />;
  }

  return (
    <>
      {currentForm === 'login' && (
        <LoginForm onToggleForm={setCurrentForm} />
      )}
      {currentForm === 'reset' && (
        <ResetPasswordForm onToggleForm={setCurrentForm} />
      )}
    </>
  );
};

export default Index;
