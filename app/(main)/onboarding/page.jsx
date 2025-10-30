import React from "react";
import OnboardingForm from "./_components/onboarding-form";
import { redirect } from "next/navigation";
import { industries } from "@/data/industries";
import { getUserOnboardingStatus } from "@/actions/user";

export default async function OnboardingPage() {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <div suppressHydrationWarning>
        <OnboardingForm industries={industries} />
      </div>
    </main>
  );
}
