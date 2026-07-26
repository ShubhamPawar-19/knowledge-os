"use client";

import { authClient } from "@/src/lib/auth-client";

export interface SignUpInput {
  name: string;
  email: string;
  password: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export async function signUp(data: SignUpInput) {
  return authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
  });
}

export async function signIn(data: SignInInput) {
  return authClient.signIn.email({
    email: data.email,
    password: data.password,
  });
}

export async function signOut() {
  return authClient.signOut();
}