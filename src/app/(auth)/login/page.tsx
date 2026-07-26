import { AuthCard } from "@/src/features/auth/components/auth-card";
import { AuthLayout } from "@/src/features/auth/components/auth-layout";
import { LoginForm } from "@/src/features/auth/components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome back"
        description="Sign in to your KnowledgeOS account."
        footer={
          <>
            Don&apos;t have an account?
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </>
        }
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}