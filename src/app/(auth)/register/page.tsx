import Link from "next/link";

import { AuthCard } from "@/src/features/auth/components/auth-card";
import { AuthLayout } from "@/src/features/auth/components/auth-layout";
import { RegisterForm } from "@/src/features/auth/components/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Create your account"
        description="Start building your AI-powered knowledge base."
        footer={
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </>
        }
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}