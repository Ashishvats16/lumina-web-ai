import { AuthContainer } from '@/components/auth/AuthContainer';
import { AuthToggle } from '@/components/auth/AuthToggle';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContainer>
      <AuthToggle />
      {children}
    </AuthContainer>
  );
}
